import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpData } from './emp.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface EmpDataRes {
  data: EmpData[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  support: any;
};

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getEmpList(): Observable<EmpData[]> {
    return this.http.get<EmpDataRes>('https://reqres.in/api/users?page=1').pipe(
      map(empData => empData.data)
    );
  }
}
