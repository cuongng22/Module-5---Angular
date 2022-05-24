import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  @Input()
  product: Product;
  @Output()
  deleteEvent = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteEvent.emit(this.product);
  }

}
