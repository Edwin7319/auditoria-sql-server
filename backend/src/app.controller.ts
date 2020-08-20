import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(
    private readonly _appService: AppService,
  ) {
  }

  @Post()
  async obtenerResultadosQuery(
    @Body('consulta') consulta: string,
  ) {
    if (consulta) {
      return await this._appService.obtenerResultadoQuery(consulta);
    } else {
      throw new BadRequestException({
        mensaje: 'No envia consulta de auditoria',
      });
    }
  }
}
