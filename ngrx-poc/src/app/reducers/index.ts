import {createReducer, on} from '@ngrx/store';
import {Product} from '../model/product.model';
import {addProduct} from '../actions/product.actions';


export interface ProductState {
  product: Product | null;
}

const initialState: ProductState = {
  product: null
};

export const productReducer = createReducer(initialState,
  on(addProduct, (state, product) => {
    return product;
  }));

/*
export const reducers: ActionReducerMap<State> = {};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
*/
