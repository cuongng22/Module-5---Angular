import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id : 1,
      name : ' cuong'
    }
  ];
  isShowList = true;
  isShowCreate = false;
  isShowEdit = false;
  isShowDelete = false;
  currentProduct: Product = {};
  constructor() { }

  ngOnInit() {
  }
  changStatusShowList() {
    this.isShowList = !this.isShowList;
  }
  showCreateForm() {
    this.isShowCreate = !this.isShowCreate;
  }
  showEditForm(product) {
    this.isShowEdit = !this.isShowEdit;
    this.changStatusShowList();
    this.currentProduct = product;
  }
  showDeleteForm(product) {
    this.isShowDelete = !this.isShowDelete;
    this.changStatusShowList();
    this.currentProduct = product;
  }
  createProduct(product) {
    this.products.push(product);
    this.showCreateForm();
    this.changStatusShowList();
  }

  deleteProduct(product) {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
        // tslint:disable-next-line:triple-equals
        if (this.products[i].id == product.id) {
          index = i;
          break;
        }
      }
       let newProducts: Product[] = [];
      for (let i = 0; i < this.products.length; i++) {
        if (i < index) {
          newProducts.push(this.products[i]);
        }
        if (i > index) {
          newProducts.push(this.products[i]);
        }
      }
      this.products = newProducts;
      this.isShowDelete = !this.isShowDelete;
      this.changStatusShowList();
  }
  editProduct(product) {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (this.products[i].id == product.id) {
        index = i;
        break;
      }
    }
    this.products[index] = product;
    this.isShowEdit = !this.isShowEdit;
    this.changStatusShowList();
  }
}
