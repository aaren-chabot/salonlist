import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  handleSubmit({ value, valid }: any) {
    console.log(value, valid);
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    });
  }
}
