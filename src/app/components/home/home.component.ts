import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private productService : ProductsService){}

  productList : any;

  ngOnInit(){
    this.getProduct()
  }

  getProduct(){
    this.productService.getProductList().subscribe(res =>{
      this.productList = res
      console.log(this.productList);
    })
  }
}
