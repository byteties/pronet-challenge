import { createFeatureSelector } from '@ngrx/store';

export const selectFavorites = createFeatureSelector<Array<string>>('favorites');
