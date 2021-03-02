import {createAction, props} from '@ngrx/store';
import {Product} from '../model/product.model';

export const loadProducts = createAction('[Product] Load Products', props<{ products: Product[] }>());

export const addProduct = createAction('[Product] ADD Product', props<{ product: Product }>());

export const addProducts = createAction('[Product] ADD Products', props<{ product: Product }>());

