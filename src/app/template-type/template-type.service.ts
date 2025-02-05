import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateTypeService {

  private apiUrl = 'https://api.example.com/report-types'; // Replace with actual API endpoint

  constructor(private http: HttpClient) { }

  getTemplateTypes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
