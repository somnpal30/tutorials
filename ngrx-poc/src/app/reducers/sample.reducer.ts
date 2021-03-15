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

export interface MessageState {
  message: string;
}

export const initialisedMessage: MessageState = {
  message: 'Hello World !'
};

function greet() {
  var date = new Date();
  var hrs = date.getHours();
  var message = '';
  if (hrs < 12) {
    message = 'Good Morning !';
  } else if (hrs >= 12 && hrs < 17) {
    message = 'Good Afternoon !';
  } else if (hrs >= 17 && hrs < 24) {
    message = 'Good Evening !';
  }

  return message;
}


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

export const messageReducer = createReducer(initialisedMessage,
  on(ProductActions.displayMessage, (state, action) => {
    return {
      ...state,
      message: greet() + ' user '
    };
  })
);

