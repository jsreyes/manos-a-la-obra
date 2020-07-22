import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendContactUs(body: any) {
    debugger
    return this.http.post('http://localhost:3000/sendmail', body);
  }
}
