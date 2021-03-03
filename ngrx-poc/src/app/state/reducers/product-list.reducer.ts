import {createReducer, on} from '@ngrx/store';
import {initialState} from '../product.state';
import {addProducts} from '../actions/product.actions';


export const productReducer = createReducer(initialState,
  on(addProducts, (state, {product}) => {
    return [...state, product];
  })
);



