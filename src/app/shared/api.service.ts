import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  //Create reatautarnt using post method
  postRestaurant(data: any) {
    return this._http.post<any>("http://localhost:5000/posts", data)
    .pipe(map((res: any)=> {
      return res;
    }))
  }
  //Get Restaurant data using get Method
  getRestaurant(){
    return this._http.get<any>("http://localhost:5000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  //update Restuarent data
  updateRestaurant(data:any,id:number){
    return this._http.put<any>("http://localhost:5000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  //Delete Restaurent
  deleteRestaurent(id:number){
    return this._http.delete<any>("http://localhost:5000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
