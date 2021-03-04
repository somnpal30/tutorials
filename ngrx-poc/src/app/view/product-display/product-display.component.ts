import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  products: Product[] = [];
  products$: Observable<Product[]> | undefined;


  constructor(private store: Store<{ productListFeatureKey: Product[] }>) {
  }


  ngOnInit(): void {
    this.products$ = this.store.select('productListFeatureKey');
  }

}
