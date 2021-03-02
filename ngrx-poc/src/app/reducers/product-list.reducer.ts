import {createReducer, on} from '@ngrx/store';
import {Product} from '../model/product.model';
import {addProducts, loadProducts} from '../actions/product.actions';


export const productListFeatureKey = 'productList';

export interface ProductListState {
  products: Product[];
}

export const initialState: ProductListState = {
  products: []
};

export const addProductListReducer = createReducer(initialState.products,
  on(addProducts, (state, {product}) => {
    return [...state, product];
  })
);

export const loadProductListReducer = createReducer(initialState.products,
  on(loadProducts, (state, {products}) => {
    return [...products];
  })
);

