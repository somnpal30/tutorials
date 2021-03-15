import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MessageState, SampleState} from '../../reducers/sample.reducer';


const getProductState = createFeatureSelector<SampleState>('productListFeatureKey');
const getGreetingState = createFeatureSelector<MessageState>('msgReducer');
export const getProduct = createSelector(getProductState, state => {
  return state.products;
});

export const getTotalQuantity = createSelector(getProductState, state => {
  return state.sum;
});

export const displayMessageSelector = createSelector(getGreetingState, state => state.message);

