import {Product} from '../../model/product.model';


export interface ProductState {
  product: Product | null;
}

const initialState: ProductState = {
  product: null
};

/*
export const productReducer = createReducer(initialState,
  on(addProduct, (state, {product}) => {
    return [];
  }));
*/

/*
export const reducers: ActionReducerMap<State> = {};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
*/
