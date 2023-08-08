import { Pieces } from './Pieces';

export const Grids = {
  grid1: {
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0, 0, 1, 0],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0],
    ],
    pieces: [Pieces.piece1, Pieces.piece3, Pieces.piece10]
  },
  grid2: {
    grid: [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
    ],
    pieces: [Pieces.piece1, Pieces.piece2, Pieces.piece4]
  },
};