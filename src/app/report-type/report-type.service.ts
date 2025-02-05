import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportTypeService {
  private apiUrl = 'https://api.example.com/report-types'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  getReportTypeOptions(): Observable<Array<{ value: string, label: string }>> {
    return this.http.get<Array<{ value: string, label: string }>>(this.apiUrl);
  }
}
