import {Product} from '../model/product.model';

export interface State {
  //sum: number;
  products: Product[];
}

export const initialState1: State = {
  products: [],
  //sum: 0
};
export const productsInitialState: ReadonlyArray<Product> = [];
