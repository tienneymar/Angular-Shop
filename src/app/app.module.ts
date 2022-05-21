import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'

import { SanphamComponent } from './sanpham/sanpham.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { IndexadminComponent } from './indexadmin/indexadmin.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';





@NgModule({
  declarations: [
    AppComponent,
    SanphamComponent,
    HomeComponent,
    IndexadminComponent,
    ChitietComponent,
    
    CartComponent,
    CheckoutComponent,
    LoaisanphamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
