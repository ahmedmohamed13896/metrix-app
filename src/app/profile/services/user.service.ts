import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubordinateDto } from './../models/subordinateDto.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  loadSubordinates(): Observable<SubordinateDto> {
    return this.http.post<any>(
      'http://194.163.169.47:5000/subordinates.php',
      null
    );
  }
}
