import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {displayMessage} from '../../state/actions/product.actions';
import {Observable} from 'rxjs';
import {displayMessageSelector} from '../../state/selector/product.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  greetingMessage$: Observable<string> | undefined;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.greetingMessage$ = this.store.select(displayMessageSelector);
  }

  test() {
    this.store.dispatch(displayMessage());
  }
}
