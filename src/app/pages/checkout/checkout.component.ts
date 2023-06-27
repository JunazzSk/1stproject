import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  name: string;
  email: string;
  address: string;
  paymentMethod: string;


  submit() {

    console.log('Order submitted');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Address:', this.address);
    console.log('Payment Method:', this.paymentMethod);
  }
}
