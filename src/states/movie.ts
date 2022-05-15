import { atom } from 'hooks/state';
import { IMovie } from 'types/movie';

export const movieState = atom<IMovie[]>({
  key: '#movieState',
  default: [],
});
