import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private service : HttpClient) { }

  getProductList(){
    return this.service.get("https://fakestoreapi.com/products")
  }

  getProductDetailById(id : number){
    return this.service.get("https://fakestoreapi.com/products/" + id)
  }

}
