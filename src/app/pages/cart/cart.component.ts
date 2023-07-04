import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any[];

  ngOnInit(): void {
    this.getItemsFromLocalStorage();
  }

  getItemsFromLocalStorage(): void {
    const savedItems = JSON.parse(localStorage.getItem('cartproducts')) || [];
    console.log('cart', savedItems);
    this.items = savedItems;
  }

  removeItemFromCart(item: any): void {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  clearCart(): void {
    localStorage.removeItem('cartproducts');
    this.items = [];
  }

  updateLocalStorage(): void {
    localStorage.setItem('cartproducts', JSON.stringify(this.items));
  }
}
