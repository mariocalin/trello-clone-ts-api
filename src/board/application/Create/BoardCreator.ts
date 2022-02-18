import { Board } from '../../domain/Board';
import { BoardCreatorRequest } from './BoardCreatorRequest';

export class BoardCreator {
  constructor() {}

  create(boardCreatorRequest: BoardCreatorRequest): Board {
    throw new Error('Method not implemented.');
  }
}
