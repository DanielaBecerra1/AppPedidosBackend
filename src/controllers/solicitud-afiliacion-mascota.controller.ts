import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  SolicitudAfiliacion,
  Mascota,
} from '../models';
import {SolicitudAfiliacionRepository} from '../repositories';

export class SolicitudAfiliacionMascotaController {
  constructor(
    @repository(SolicitudAfiliacionRepository) protected solicitudAfiliacionRepository: SolicitudAfiliacionRepository,
  ) { }

  @get('/solicitud-afiliacions/{id}/mascotas', {
    responses: {
      '200': {
        description: 'Array of SolicitudAfiliacion has many Mascota',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Mascota)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Mascota>,
  ): Promise<Mascota[]> {
    return this.solicitudAfiliacionRepository.mascotas(id).find(filter);
  }

  @post('/solicitud-afiliacions/{id}/mascotas', {
    responses: {
      '200': {
        description: 'SolicitudAfiliacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Mascota)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof SolicitudAfiliacion.prototype.idSolicitud,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mascota, {
            title: 'NewMascotaInSolicitudAfiliacion',
            exclude: ['id'],
            optional: ['solicitudAfiliacionId']
          }),
        },
      },
    }) mascota: Omit<Mascota, 'id'>,
  ): Promise<Mascota> {
    return this.solicitudAfiliacionRepository.mascotas(id).create(mascota);
  }

  @patch('/solicitud-afiliacions/{id}/mascotas', {
    responses: {
      '200': {
        description: 'SolicitudAfiliacion.Mascota PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mascota, {partial: true}),
        },
      },
    })
    mascota: Partial<Mascota>,
    @param.query.object('where', getWhereSchemaFor(Mascota)) where?: Where<Mascota>,
  ): Promise<Count> {
    return this.solicitudAfiliacionRepository.mascotas(id).patch(mascota, where);
  }

  @del('/solicitud-afiliacions/{id}/mascotas', {
    responses: {
      '200': {
        description: 'SolicitudAfiliacion.Mascota DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Mascota)) where?: Where<Mascota>,
  ): Promise<Count> {
    return this.solicitudAfiliacionRepository.mascotas(id).delete(where);
  }
}
