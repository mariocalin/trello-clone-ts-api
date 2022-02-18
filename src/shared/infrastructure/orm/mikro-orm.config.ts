import { Options } from '@mikro-orm/core';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';

import { BaseEntity } from '../BaseEntity';

const options: Options = {
  type: 'mongo',
  entities: [BaseEntity],
  dbName: 'trello-clone',
  highlighter: new MongoHighlighter(),
  debug: true
};

export default options;
