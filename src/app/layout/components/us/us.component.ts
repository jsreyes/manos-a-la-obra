import { MailService } from './../../../shared/services/mail.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {

  public contactUsForm: FormGroup;

  constructor(private fb: FormBuilder,
              private mailService: MailService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactUsForm = this.fb.group(
      {
        name: [''],
        // phoneNumber: ['', Validators.compose([Validators.minLength(7), Validators.maxLength(10)])],
        // email: ['', Validators.email],
        // message: [''],
      }
    );
  }

  sendContactus(form: FormGroup) {
    this.mailService.sendContactUs(form);
  }

}
