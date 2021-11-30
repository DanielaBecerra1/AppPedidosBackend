import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  SolicitudAfiliacion,
  Empleado,
} from '../models';
import {SolicitudAfiliacionRepository} from '../repositories';

export class SolicitudAfiliacionEmpleadoController {
  constructor(
    @repository(SolicitudAfiliacionRepository)
    public solicitudAfiliacionRepository: SolicitudAfiliacionRepository,
  ) { }

  @get('/solicitud-afiliacions/{id}/empleado', {
    responses: {
      '200': {
        description: 'Empleado belonging to SolicitudAfiliacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Empleado)},
          },
        },
      },
    },
  })
  async getEmpleado(
    @param.path.string('id') id: typeof SolicitudAfiliacion.prototype.idSolicitud,
  ): Promise<Empleado> {
    return this.solicitudAfiliacionRepository.empleado(id);
  }
}
