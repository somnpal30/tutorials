import {createReducer, on} from '@ngrx/store';
import {Product} from '../model/product.model';
import {ProductActions} from '../state/action-type';


export const sampleFeatureKey = 'sample';

export interface SampleState {
  products: Product[];
  sum: number
}


export const initialState: SampleState = {
  products: [],
  sum: 0
};


export const reducer = createReducer(
  initialState,
  on(ProductActions.addProducts, (state, action) => {
    return {
      // products: [...state.products, action.product]
      ...state,
      products: [...state.products, action.product]
    };
  }),
  on(ProductActions.addQuantity, (state) => {
    return {
      ...state,
      sum: addProductQuantity(state.products)
    };
  })
);


const addProductQuantity = (products: Product[]): number => {
  var sum: number = 0;
  for (let product of products) {
    sum += +product.quantity;
  }
  return sum;
};


