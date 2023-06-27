import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any[];

  constructor() {
  }

  ngOnInit(): void {
    const savedItems = JSON.parse(localStorage.getItem('cartproducts'));
  console.log('cart',savedItems);
    this.items = savedItems;

  }

  // addItemToCart(item: any): void {
  //   localStorage.setItem('cartItems', JSON.stringify(this.items));
  // }

  removeItemFromCart(product): void {
   this.items.splice(this.items.indexOf(product), 1);

  }

  clearCart() {
    localStorage.clear();
    this.items = JSON.parse(localStorage.getItem('cartproducts'))

  }
}


