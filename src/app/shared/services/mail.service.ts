import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from '../models/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendContactUs(body: any) {
    return this.http.post('http://localhost:3000/sendmail', body);
  }

}
