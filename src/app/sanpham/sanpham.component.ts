import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable,throwError} from 'rxjs';
import {Sanpham} from '../shared/sanpham.model';
var baseURL="http://localhost:8035/api/Products/";

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {

  sanphams:Observable<Sanpham[]> ;
  sanpham:Sanpham={ProductID:"",ProductCode:"",CategoryID:"",ProductName:"",ProductImage:"",Description:"",Price:"",PromotionPrice:"",Quantity:""};
  kq:string="";
  cols: any[];
  httpClient: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   
    this.sanphams=this.http.get<Sanpham[]>(baseURL);
    this.LoadData()
  }
  LoadData():void{
    this.sanphams=this.http.get<Sanpham[]>(baseURL);
  }
  getSanpham() {
    return this.http.get<any>(baseURL)
    .toPromise()
    .then(res => <Sanpham[]>res)
    .then(data => { return data; });
  }
 
  addSanpham():void{
    console.log(this.sanpham);
    this.http.post(baseURL,this.sanpham).subscribe(
      data  => {
        this.kq="Thêm  vào thành công   !!!";
        this.sanphams = this.http.get<Sanpham[]>(baseURL);
      },
      error  => {
        this.kq="Thêm vào thất bại   !!!";
        console.log("Error", error);

      }); 
  }
findSanpham(id:string):void{
  let url = baseURL+"/"+id;
  this.http.get<Sanpham>(url).subscribe(data=>{
    console.log(data);
    this.sanpham.ProductID=data.ProductID;
    this.sanpham.CategoryID=data.CategoryID;
    this.sanpham.ProductName=data.ProductName;
    this.sanpham.ProductImage=data.ProductImage;
    this.sanpham.Price=data.Price;
    this.sanpham.Quantity=data.Quantity;
   

  });
}


updateSanpham(id:string):void{
  let url = baseURL+"/"+id;
  let headers = new HttpHeaders({'Content-type':'Application/json'});
  this.http.put(url,this.sanphams).subscribe(
    data  => {
      this.kq="Sửa du lieu thanh cong!";
      alert(this.kq);
    this.LoadData();
    },
    error  => {
      this.kq="Sửa dữ liệu k thành công!";
      console.log("Error", error);

    });
}



editdata(id: string): void {

  this.http.put<Sanpham>(baseURL+ '/' + id, this.sanpham).subscribe(
    data => {

      console.log("Sửa dữ liệu thành công", data);
      this.sanphams = this.http.get<Sanpham[]>(baseURL);
      this.ngOnInit();
    },
    error => {
      this.kq = ("Sửa không thành công");
      console.log("Error", error);
    });

}

deleteSanpham(id:string):void{
this.http.delete(baseURL+'/'+id).subscribe({
 next: data => {
  
   if(confirm("Bạn có muốn xóa "+id)) {
     this.kq="Bạn đã xóa thành công";

     this.sanphams = this.http.get<Sanpham[]>(baseURL);

   }
        
}, error: error => {
 this.kq = error.message;
 console.error('Xảy ra lỗi!', error);
}
})   
}
}

