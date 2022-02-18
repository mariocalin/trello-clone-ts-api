import { EntitySchema } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';

export class BaseEntity {
  _id!: ObjectId;
  id!: string;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}

export const schema = new EntitySchema<BaseEntity>({
  class: BaseEntity,
  abstract: true,
  properties: {
    _id: { type: 'ObjectId', primary: true },
    id: { type: 'string', serializedPrimaryKey: true },
    createdAt: { type: 'Date', onCreate: () => new Date(), nullable: true },
    updatedAt: { type: 'Date', onCreate: () => new Date(), onUpdate: () => new Date(), nullable: true }
  }
});
