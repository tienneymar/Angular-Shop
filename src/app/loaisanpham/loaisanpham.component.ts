import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { distinct } from 'rxjs/operators';
import {Sanpham} from '../shared/sanpham.model';
var baseURL="http://localhost:8035/api/Products";
@Component({
  selector: 'app-loaisanpham',
  templateUrl: './loaisanpham.component.html',
  styleUrls: ['./loaisanpham.component.css']
})
export class LoaisanphamComponent implements OnInit {

  product:Sanpham={ ProductID: "",ProductCode:"",CategoryID:"",ProductName:"",ProductImage:"",Description:"",Price:"",PromotionPrice:"",Quantity:""};
  products:Observable<Sanpham[]>;
  constructor(private httpClient:HttpClient,
    
   ) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll():void{
    this.products=this.httpClient.get<Sanpham[]>(baseURL);
    console.log(this.products);
    
  }
}
