import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Pedido, PedidoRelations, Persona} from '../models';
import {PersonaRepository} from './persona.repository';

export class PedidoRepository extends DefaultCrudRepository<
  Pedido,
  typeof Pedido.prototype.id,
  PedidoRelations
> {

  public readonly Persona: BelongsToAccessor<Persona, typeof Pedido.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>,
  ) {
    super(Pedido, dataSource);
    this.Persona = this.createBelongsToAccessorFor('Persona', personaRepositoryGetter,);
    this.registerInclusionResolver('Persona', this.Persona.inclusionResolver);
  }
}
