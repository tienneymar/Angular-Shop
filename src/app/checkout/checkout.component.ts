import { Component, OnInit } from '@angular/core';
import { Sanpham } from '../shared/sanpham.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError} from 'rxjs';
import { HttpService } from '../service/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public todoForm!:FormGroup;
  carts: Array<any>;
  cartDetails: any;
  cartlist:Array<any>;
  total:number=0;
  getCartDetails:Array<any>;

  constructor(private http: HttpService,private route: ActivatedRoute
   ) {}
  
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
public onSubmit(){
  console.log(this.todoForm);
  // throw Error('something go wrong');
}
}
