import { Color } from '../../../shared/domain/Color';
import { requireNotEmpty } from '../../../shared/domain/Require';
import { BoardId } from '../../domain/BoardId';
import { BoardName } from '../../domain/BoardName';

export class BoardCreatorRequest {
  public readonly boardId: BoardId;
  public readonly boardName: BoardName;
  public readonly backgroundColor: Color;

  constructor(boardId: string, boardName: string, backgroundColor: string) {
    requireNotEmpty(boardId);
    requireNotEmpty(boardName);
    requireNotEmpty(backgroundColor);

    this.boardId = new BoardId(boardId);
    this.boardName = new BoardName(boardName);
    this.backgroundColor = new Color(backgroundColor);
  }
}
