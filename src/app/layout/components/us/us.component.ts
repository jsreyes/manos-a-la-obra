import { MailService } from './../../../shared/services/mail.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { removeWhiteSpacesValidator } from 'src/app/shared/validators';

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

  initForm(): void {
    this.contactUsForm = this.fb.group(
      {
        name: ['', Validators.compose([Validators.required, removeWhiteSpacesValidator])],
        phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(7),
                                              Validators.maxLength(14), removeWhiteSpacesValidator])],
        email: ['', Validators.compose([Validators.required, Validators.email, removeWhiteSpacesValidator])],
        message: ['',Validators.compose([removeWhiteSpacesValidator])],
      }
    );
  }

  sendContactUs(form: FormGroup): void {
    this.mailService.sendContactUs(form);
  }

}
