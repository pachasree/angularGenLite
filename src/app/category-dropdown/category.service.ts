import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'api/categories'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any[]> {
   // return this.http.get<any[]>(this.apiUrl);
   //return this.http.get();
  // return this.http
    //  .get<any[]>("/categoryData.json")

      return new Observable();
  }
}
