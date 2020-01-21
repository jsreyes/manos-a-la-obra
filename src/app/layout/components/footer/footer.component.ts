import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/shared/services/mail.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public contactUsForm: FormGroup;

  constructor(private fb: FormBuilder,
              private mailService: MailService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactUsForm = this.fb.group({
      name: [''],
      email: ['', Validators.email],
      phoneNumber: ['']
    });
  }

  sendContactUs(form: FormGroup) {
    if (this.contactUsForm.valid) {
      this.mailService.sendContactUs(form).subscribe((r) => {
        console.log(r);
      });
      console.log('Esta es la info del formulario ', form);
    }
  }

}
