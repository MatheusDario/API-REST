import UserModel from '../models/User';

class User {
  async store(req, res) {
    try {
      const novoUser = await UserModel.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new User();
