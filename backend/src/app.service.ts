import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class AppService {

  constructor(
    private readonly _entityManager: EntityManager,
  ) {
  }

  async obtenerResultadoQuery(consulta: string): Promise<any> {
    try {
      return await this._entityManager.query(consulta);
    } catch (e) {
      console.error({
        mensaje: 'Error a realizar consulta',
        data: consulta,
        error: e,
      });
      throw new InternalServerErrorException({
        mensaje: 'Error obteniendo consulta',
      });
    }
  }
}
