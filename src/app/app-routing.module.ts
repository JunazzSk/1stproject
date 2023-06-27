import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent,
},{
  path:'about',
  component:AboutComponent,
},{
  path:'checkout',
  component:CheckoutComponent,
}
,{
  path:'Cart',
  component:CartComponent,
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
