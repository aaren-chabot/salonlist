import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  handleSubmit({ value, valid }: any) {
    console.log(value, valid);
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      cacheLogin: [false, [Validators.required]]
    });
  }
}
