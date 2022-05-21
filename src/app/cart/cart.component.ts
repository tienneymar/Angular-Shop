import { Component, OnInit } from '@angular/core';
import { Sanpham } from '../shared/sanpham.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError} from 'rxjs';
import { HttpService } from '../service/http.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: Array<any>;
  cartDetails: any;
  cartlist:Array<any>;
  total:number=0;
  getCartDetails:Array<any>;

  constructor(private http: HttpService) {}
  
  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
  }
  CartDetails(){
    if(localStorage.getItem("LocalCart")!=null){
      this.getCartDetails=JSON.parse(localStorage.getItem("LocalCart")!);
      console.log(this.getCartDetails);
    }
  }
  cong(id:any,qnt:any){
    
      
      for(let i=0;i<this.getCartDetails.length;i++){
        if(this.getCartDetails[i].MaSP==id){
          if(qnt!=5)
          this.getCartDetails[i].quantity=qnt+1;
        }
      }
      localStorage.setItem("LocalCart",JSON.stringify(this.getCartDetails));
      this.loadCart();
  
  }
  loadCart(){
    if(localStorage.getItem("LocalCart")!=null){
      this.getCartDetails=JSON.parse(localStorage.getItem("LocalCart")!);
      this.total=this.getCartDetails.reduce(function(acc,val){
        return acc+(val.GiaBan * val.quantity);
      },0);
    }
  }
  tru(id:any,qnt:any){
    
      
    for(let i=0;i<this.getCartDetails.length;i++){
      if(this.getCartDetails[i].MaSP==id){
        if(qnt!=1)
        this.getCartDetails[i].quantity=qnt-1;
      }
    }
    localStorage.setItem("LocalCart",JSON.stringify(this.getCartDetails));
    this.loadCart();

}
removeall(){
  localStorage.removeItem("LocalCart");
  this.getCartDetails=[];
  window.location.reload();

}
singleDelete(s:any){
  if(localStorage.getItem("LocalCart")!=null){
    this.getCartDetails=JSON.parse(localStorage.getItem("LocalCart")!);
    for(let i=0;i<this.getCartDetails.length;i++){
      if(this.getCartDetails[i].MaSP==s){
        
        this.getCartDetails.splice(i,1);
      }
        localStorage.setItem("LocalCart",JSON.stringify(this.getCartDetails));
      this.loadCart();
  }
}
}
    
}