import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public productdetails: any;

  public getproductdetail(product:any){
    console.log(product);
    this.productdetails= product;
  }

public products= [
  {
    id: 1,
    name: 'product 1',
    price: '100',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
    imgUrl:'assets/images/home/cart img.jpeg'
  },
  {
    id: 2,
    name: 'product 2',
    price: '200',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
    imgUrl:'assets/images/home/cart img.jpeg'
  },
  {
    id: 3,
    name: 'product 3',
    price: '300',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
    imgUrl:'assets/images/home/cart img.jpeg'
  },
  {
    id: 4,
    name: 'product 4',
    price: '400',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
    imgUrl:'assets/images/home/cart img.jpeg'
  },
  {
    id: 5,
    name: 'product 5',
    price: '500',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
    imgUrl:'assets/images/home/cart img.jpeg'
   },
]
}
