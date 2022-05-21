import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Sanpham} from 'src/app/shared/sanpham.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError} from 'rxjs';


const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'http://localhost:8035/api/Products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Sanpham[]>{
    return this.httpClient.get<Sanpham[]>(apiUrl).pipe(
   )
  }
  find(id:number):Observable<Sanpham>{
   return this.httpClient.get<Sanpham>(`${apiUrl}/${id}`).pipe(
    )
  }
}