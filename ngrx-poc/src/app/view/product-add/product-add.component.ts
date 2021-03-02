import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {addProduct, addProducts} from '../../actions/product.actions';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  prodName: string = '';
  prodDetail: string = '';

  constructor(public store: Store) {
  }

  ngOnInit(): void {

  }

  addProduct = () => {
    console.log('...add product ' + this.prodName);
    this.store.dispatch(addProducts({product: new Product(this.prodName, this.prodDetail)}));
    this.reset();
  };

  reset = () => {
    this.prodName = this.prodDetail = '';
  };
}
