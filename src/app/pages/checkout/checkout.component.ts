import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items: any[];
  totalPrice: number = 0;

  ngOnInit(): void {
    const savedItems = JSON.parse(localStorage.getItem('cartproducts')) || [];
    console.log('cart', savedItems);
    this.items = savedItems;

    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = 0;
    for (const item of this.items) {
      this.totalPrice += item.price;
    }
  }
}
