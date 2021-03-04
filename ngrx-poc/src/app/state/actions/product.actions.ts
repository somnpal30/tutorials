import {createAction, props} from '@ngrx/store';
import {Product} from '../../model/product.model';


export const addProducts = createAction('[Product] ADD Products', props<{ product: Product }>());



