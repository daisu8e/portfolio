import {ModelH} from 'App/models/entities';

export class ModelHRepository {

  static async read(id: number): Promise<ModelH> {
    const response = await fetch(`http://localhost:3333/model-h/${id}`);
    const data = await response.json();
    return new ModelH(data.name);
  }

}
