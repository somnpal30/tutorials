import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  subscription: Subscription | undefined;

  constructor(private store: Store<{ myProduct: Product[] }>) {
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {

    this.subscription = this.store.select('myProduct').subscribe(data => {
      this.products = data;
    });

  }

}
