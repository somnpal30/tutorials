import {createAction, props} from '@ngrx/store';
import {Product} from '../model/product.model';

export const loadProducts = createAction(
  '[Product] Load Products'
);

export const addProduct = createAction('[Product] ADD Products', props<{ product: Product }>());

export const addProducts = createAction('[Product] ADD Products', props<{ product: Product }>());

