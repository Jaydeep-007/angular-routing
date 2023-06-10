import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productDetail? : any;

  constructor(private route : ActivatedRoute,private productService : ProductsService){}

  ngOnInit(): void {
    let productId = this.route.snapshot.params['id'];
    this.getProductDetailById(productId)
  }

  getProductDetailById(id: number){
    this.productService.getProductDetailById(id).subscribe(res => {
      this.productDetail = res
      console.log(res)
    })
  }
}
