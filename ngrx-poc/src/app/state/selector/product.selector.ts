import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SampleState} from '../../reducers/sample.reducer';


const getProductState = createFeatureSelector<SampleState>('productListFeatureKey');

export const getProduct = createSelector(getProductState, state => {
   return state.products;
});

export const getTotalQuantity = createSelector(getProductState, state => {
  return state.sum;
});

