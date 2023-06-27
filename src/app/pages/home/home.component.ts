import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public productDetail:any;
  public products:any;
 public cartproducts = [];
 public cartItems;


  constructor( public apiservice:ApiService){
    this.apiservice.getproducts().then((productResponse)=>{
      this.products = productResponse;
      console.log(productResponse);
    })
  }


  public getProductDetail(product:any){

    // console.log(product);
    this.productDetail= product;

  }
  public addtocart(cartproduct) {
    this.cartproducts.push(cartproduct);
    localStorage.setItem('cartproducts', JSON.stringify(this.cartproducts));
    let getproducts = JSON.parse(localStorage.getItem('cartproducts'));
    console.log(getproducts);
    this.cartItems=getproducts;
  }
}
