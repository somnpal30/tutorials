import {createReducer, on} from '@ngrx/store';
import {Product} from '../model/product.model';
import {ProductActions} from '../state/action-type';


export const sampleFeatureKey = 'sample';

export interface SampleState {
  products: Product[];
}

export const initialState: SampleState = {
  products: []
};


export const reducer = createReducer(
  initialState,
  on(ProductActions.addProducts, (state, action) => {
    return {
      products: [...state.products, action.product]
    };
  })
);

