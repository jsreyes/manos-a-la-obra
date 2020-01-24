import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/shared/services/mail.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, DoCheck {

  public contactUsForm: FormGroup;
  public isDisabled = true;

  constructor(private fb: FormBuilder,
              private mailService: MailService) { }

  ngOnInit() {
    this.initForm();
  }
  ngDoCheck() {
    console.log('entro');
    if (this.contactUsForm.get('name').value !== '' && this.contactUsForm.get('email').value !== ''
        && this.contactUsForm.get('phoneNumber').value !== '') {
          this.isDisabled = false;
          console.log('entro dos');
    }
  }

  initForm() {
    this.contactUsForm = this.fb.group({
      name: [''],
      email: ['', Validators.email],
      phoneNumber: ['', [Validators.minLength(7), Validators.maxLength(10)]]
    });
  }

  sendContactUs(form: FormGroup) {
    if (this.contactUsForm.valid) {
      this.mailService.sendContactUs(form).subscribe((r) => {
        this.isDisabled = true;
      });
    }
  }

}
