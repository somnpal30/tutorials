import {Product} from '../../model/product.model';
import {createSelector} from '@ngrx/store';

export interface AppState {
  products: Product[];
}

export const selectProducts = (state: AppState) => state.products;

export const selectVisibleProducts = createSelector(selectProducts, products => products);
