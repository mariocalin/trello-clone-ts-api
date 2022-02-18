import { Uuid } from '../../../shared/domain/value-object/Uuid';
import { Board } from '../../domain/Board';
import { BoardCreator } from './BoardCreator';

describe('BoardCreatorTest', () => {
  it('Should create a board with required parameters', () => {
    const boardCreator = new BoardCreator();
    const boardId = Uuid.random().toString();
    const boardName = 'Personal projects';
    const boardColor = '#333CFF';

    const boardCreatorRequest = new BoardCreatorRequest(boardId, boardName, boardColor);

    const board: Board = boardCreator.create(boardCreatorRequest);

    expect(board).toBeDefined();
    expect(board.boardName.value).toBe(boardName);
    expect(board.boardId.value).toBe(boardId);
    expect(board.boardBackgroundColor.colorCode).toBe(boardColor);
  });
});
