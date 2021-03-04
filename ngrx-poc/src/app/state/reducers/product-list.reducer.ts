import {createReducer, on} from '@ngrx/store';
import {initialState} from '../product.state';
import * as  ProductAction from '../actions/product.actions';

export const productListFeatureKey = 'productList';

/*export const productReducer = createReducer(initialState,
  on(addProducts, (state, action) => {
    console.log(action);
    return [...state, action.product];
  })
);*/

export const productReducer = createReducer(initialState,
  on(ProductAction.addProducts, (state, {product}) => {
    console.log(product);
    return [...state, product];
  })
);



