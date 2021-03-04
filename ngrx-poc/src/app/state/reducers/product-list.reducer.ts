import {createReducer, on} from '@ngrx/store';
import * as ProductState from '../product.state';
  import {ProductActions} from '../action-type';

export const productListFeatureKey = 'productList';

/*export const productReducer = createReducer(initialState,
  on(addProducts, (state, action) => {
    console.log(action);
    return [...state, action.product];
  })
);*/

export const productReducer = createReducer(ProductState.productsInitialState,
  on(ProductActions.addProducts, (state, {product}) => {
    console.log(product);
    return [...state, product];
  })
);



