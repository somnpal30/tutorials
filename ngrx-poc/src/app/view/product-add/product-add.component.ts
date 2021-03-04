import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {addProducts} from '../../state/actions/product.actions';
import {Product} from '../../model/product.model';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  prodName = '';
  prodDetail = '';

  constructor(private store: Store<{ myProduct: Product[] }>) {
  }

  ngOnInit(): void {

  }

  addProduct = () => {
    if (this.prodName && this.prodDetail) {
      this.store.dispatch(addProducts({payload: new Product(this.prodName, this.prodDetail)}));
    }

    this.reset();
  };

  reset = () => {
    this.prodName = this.prodDetail = '';
  };
}
