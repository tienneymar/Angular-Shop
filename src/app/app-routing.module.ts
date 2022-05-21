import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';


const routes: Routes = [
  
  {path:"sanpham",component:SanphamComponent},
  {path:"home",component:HomeComponent},
  {path:"cart",component:CartComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"loaisanpham",component:LoaisanphamComponent},
  {path:'chitiet/:id',component:ChitietComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
