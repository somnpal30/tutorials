import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SampleState} from '../../reducers/sample.reducer';


const getProductState = createFeatureSelector<SampleState>('productListFeatureKey');

export const getProduct = createSelector(getProductState, state => {
  console.log(state)
  return state.products;
});
