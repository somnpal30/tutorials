import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SampleState} from '../../reducers/sample.reducer';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  products: Product[] = [];
  products$: Observable<Product[]> | undefined;


  constructor(private store: Store<{ productListFeatureKey: SampleState }>) {
  }


  ngOnInit(): void {
    this.products$ = this.store.select('productListFeatureKey').pipe(map(data => data['products']));

  }

}
