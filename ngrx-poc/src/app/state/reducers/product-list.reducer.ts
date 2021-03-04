import {Action, createReducer, on, State} from '@ngrx/store';
import {initialState} from '../product.state';
import {addProducts} from '../actions/product.actions';

export const productListFeatureKey = 'productList';

/*export const productReducer = createReducer(initialState,
  on(addProducts, (state, action) => {
    console.log(action);
    return [...state, action.product];
  })
);*/

export const productReducer = createReducer(initialState,
  on(addProducts, (state, {product}) => {
    console.log(product);
    return [...state, product];
  })
);





