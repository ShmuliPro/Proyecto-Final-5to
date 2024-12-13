import VisasRepository from '../repositories/visas-repository.js';

export default class VisasService {

  searchAsync = async (params) => {
    const repo = new VisasRepository();

    const arrayVisas = await repo.searchAsync(params);
    let resArray;
    if (arrayVisas != '') {
      resArray = [arrayVisas, 200];
    } else {
      resArray = ["No se encuentran solicitudes de visas", 404];
    }
    return resArray;
  }

  getByIdAsync = async (id) => {
      const repo = new VisasRepository();
      const arrayEventos = await repo.getByIdAsync(id);
      console.log(arrayEventos)
      if (arrayEventos && Object.keys(arrayEventos).length !== 0) {
          return [arrayEventos, 200];
      } else {
          return ["Evento no encontrado", 404];
      }
  }

  createAsync = async (body, token) => {
    const repo = new VisasRepository();
    let resArray = repo.createAsync(body, token);
    return resArray;
  }

}
