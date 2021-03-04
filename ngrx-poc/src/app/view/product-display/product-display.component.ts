import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SampleState} from '../../reducers/sample.reducer';
import {getProduct} from '../../state/selector/product.selector';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  products: Product[] = [];
  products$: Observable<Product[]> | undefined;


  constructor(private store: Store<SampleState>) {
  }


  ngOnInit(): void {
    this.products$ = this.store.select(getProduct);
  }

}
