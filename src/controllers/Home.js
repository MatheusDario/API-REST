import Aluno from '../models/Aluno';

class Home {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Pedro',
      sobrenome: 'Joaquim',
      email: 'joaquim@test.com',
      idade: 96,
      peso: 55.0,
      altura: 1.69,
    });
    res.json(novoAluno);
  }
}

export default new Home();
