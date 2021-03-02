import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  prodName: string = '';
  prodDetail: string = '';

  constructor() {
  }

  ngOnInit(): void {

  }

  addProduct = () => {
    console.log('...add product ' + this.prodName);
    this.reset();
  };

  reset = () => {
    this.prodName = this.prodDetail = '';
  };
}
