import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public contactUsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
    if(this.contactUsForm.valid) {
      console.log('Esta es la info del formulario ', form);
    }

  }

}
