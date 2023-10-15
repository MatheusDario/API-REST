import AlunoModel from '../models/Aluno';

class Aluno {
  async index(req, res) {
    const alunos = await AlunoModel.findAll();
    res.json(alunos);
  }
}

export default new Aluno();
