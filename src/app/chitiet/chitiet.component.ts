import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError} from 'rxjs';
import {Sanpham} from '../shared/sanpham.model';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {
  sanpham= new Sanpham;
  constructor(private httpClient:HttpClient,private productService:ProductService,private titleService:Title,private route:ActivatedRoute,private router:Router) { }
 

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id']);
  }

  getRoute(id:any){
    this.productService.find(id).subscribe((res:any)=>{
      this.sanpham = res;
    });    
  }
}
