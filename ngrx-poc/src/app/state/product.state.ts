import {Product} from '../model/product.model';

export interface ProductState {
  products: Product[];
}
/*
export const initialState: ProductListState = {
  products: []
};*/
export const initialState: ReadonlyArray<Product> = [];
