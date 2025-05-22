import { createAction, props } from '@ngrx/store';

export const addFavorite = createAction(
  'Add Favorite',
  props<{ bookId: string }>()
);

export const removeFavorite = createAction(
  'Remove Favorite',
  props<{ bookId: string }>()
);
