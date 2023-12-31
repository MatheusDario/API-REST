import jwt from 'jsonwebtoken';
import User from '../models/User';

class Home {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.json({
        errors: ['Credenciais inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.json({
        errors: ['Usuário não existe'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.json({
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new Home();
