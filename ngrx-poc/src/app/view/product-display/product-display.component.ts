import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  products: Product[] = [];

  constructor() {
  }

  ngOnInit(): void {
    const product: Product = {name: 'Apple' , detail : 'This is a Red Apple'};
    this.products.push(product);
  }

}
