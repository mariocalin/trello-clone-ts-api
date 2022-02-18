import { Color } from '../../shared/domain/Color';
import { requireDefined } from '../../shared/domain/Require';
import { BoardId } from './BoardId';
import { BoardName } from './BoardName';

export class Board {
  private readonly id: BoardId;
  private readonly name: BoardName;
  private readonly backgroundColor: Color;

  constructor(id: BoardId, name: BoardName, backgroundColor: Color) {
    requireDefined(id, 'id:BoardId');
    requireDefined(name, 'name:BoardName');
    requireDefined(backgroundColor, 'backgroundColor:Color');

    this.id = id;
    this.name = name;
    this.backgroundColor = backgroundColor;
  }

  get boardId(): BoardId {
    return this.id;
  }

  get boardName(): BoardName {
    return this.name;
  }

  get boardBackgroundColor(): Color {
    return this.backgroundColor;
  }
}
