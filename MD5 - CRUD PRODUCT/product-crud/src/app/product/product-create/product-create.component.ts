import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};

  @Output()
  createEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }
  create() {
    this.createEvent.emit(this.product);
  }

}
