import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { distinct } from 'rxjs/operators';
import {Sanpham} from '../shared/sanpham.model';
import { HttpService } from '../service/http.service';


var baseURL="http://localhost:8035/api/Products";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product:Sanpham={ ProductID: "",ProductCode:"",CategoryID:"",ProductName:"",ProductImage:"",Description:"",Price:"",PromotionPrice:"",Quantity:""};
  products:Sanpham[];

  carts:Observable<Sanpham[]>;
  cartlist:Array<Sanpham>=[];
  itemsCart:Array<any>=[];
  getCartDetails:Array<any>=[];
  qnt:number=1;
  numcart:number=0;
  sumcart:number=0;
  qnt1:Array<any>=[{'quantity':'1'}];
  cart:Sanpham={ProductID: "",ProductCode:"",CategoryID:"",ProductName:"",ProductImage:"",Description:"",Price:"",PromotionPrice:"",Quantity:""};
  temp:Sanpham={ProductID: "",ProductCode:"",CategoryID:"",ProductName:"",ProductImage:"",Description:"",Price:"",PromotionPrice:"",Quantity:""};
 
  constructor(private httpClient:HttpClient,private http:HttpService,
    
    private httpService: HttpService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    return this.httpClient.get<Sanpham[]>(baseURL).subscribe((data) => (this.products = data));
  }

  CartDetails(){
    if(localStorage.getItem("LocalCart")!=null){
      this.getCartDetails=JSON.parse(localStorage.getItem("LocalCart")!);
      console.log(this.getCartDetails);
    }
  }
  getnumberCart(){
    if(localStorage.getItem("LocalCart")!=null){
      this.getCartDetails=JSON.parse(localStorage.getItem("LocalCart")!);
      this.numcart=this.getCartDetails.length;
    }
     
      
  }
  
  getsumCart(){
    if(localStorage.getItem("LocalCart")!=null){
      this.getCartDetails=JSON.parse(localStorage.getItem("LocalCart")!);
      this.sumcart=this.getCartDetails.reduce(function(acc,val){
        return acc+(val.Price * val.Quantity);
      },0);
    }
  }
  // _addItemToCart( id: any, Quantity: any): void {
  //   let payload = {
  //     ProductID:id,
  //     Quantity
  //   };
  //   this.http.addToCart(payload).subscribe(() => {
  //     this.getAll();
  //     alert('Product Added');
  //   });
  // }
  
  addCart(product:any):void{
    //console.log(product);
         let cartNull=localStorage.getItem("LocalCart");
         if(cartNull==null){
           var storeDataGet:Array<any>=[];
           storeDataGet.push(product);
        
           localStorage.setItem("LocalCart",JSON.stringify(storeDataGet));
         }
         else{
           var id= product.MaSP;
           let index=0;
           this.itemsCart=JSON.parse(localStorage.getItem("LocalCart")!);
           if(this.itemsCart!=null){
            for(let i=0;i<this.itemsCart.length;i++){
              if(id==this.itemsCart[i].MaSP){
                this.itemsCart[i].quantity+=1;
                index=i;
                break;
              }
            }
            if(index==0){
                  this.itemsCart.push(product);
            
              localStorage.setItem("LocalCart",JSON.stringify(this.itemsCart)); 
            }
            else{
              
               localStorage.setItem("LocalCart",JSON.stringify(this.itemsCart)); 
            }
            window.alert('Sản Phẩm Đã Được Thêm Vào Giỏ Hàng !');
           }
         }
        }
      }