import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from './favorites.actions';

export const initialState: string[] = [];

export const favoritesReducer = createReducer(
  initialState,
  on(addFavorite, (state, { bookId }) => {
    if (state.includes(bookId)) {
      return state
    }
    return [...state, bookId]
  }
  ),
  on(removeFavorite, (state, { bookId }) => 
    state.filter(id => id !== bookId)
  )
);
