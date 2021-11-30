import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {Mascota} from './mascota.model';
import {Empleado} from './empleado.model';

@model()
export class SolicitudAfiliacion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idSolicitud?: string;

  @property({
    type: 'string',
  })
  idEmpleado?: string;

  @property({
    type: 'string',
    required: true,
  })
  idMascota: string;

  @property({
    type: 'string',
    required: true,
  })
  idCliente: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  sexo: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreMascota: string;

  @property({
    type: 'string',
    required: true,
  })
  especie: string;

  @property({
    type: 'string',
    required: true,
  })
  raza: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaNacimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  fotoMascota: string;

  @property({
    type: 'string',
    required: true,
  })
  Estado: string;

  @belongsTo(() => Cliente)
  clienteId: string;

  @hasMany(() => Mascota)
  mascotas: Mascota[];

  @belongsTo(() => Empleado)
  empleadoId: string;

  constructor(data?: Partial<SolicitudAfiliacion>) {
    super(data);
  }
}

export interface SolicitudAfiliacionRelations {
  // describe navigational properties here
}

export type SolicitudAfiliacionWithRelations = SolicitudAfiliacion & SolicitudAfiliacionRelations;
