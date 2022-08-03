import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  get fname() {
    return this.registrationForm.get('fname');
  }

  get lname() {
    return this.registrationForm.get('lname');
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  public errorMessages = {
    fname: [
      { type: 'required', message: 'First name is required' },
      { type: 'maxlength', message: 'Name cannot be longer than 100 characters'}
    ],
    lname: [
      { type: 'required', message: 'Last name is required' },
      { type: 'maxlength', message: 'Name cannot be longer than 100 characters'}
    ],
    username: [
      { type: 'required', message: 'Username is required' },
      { type: 'maxlength', message: 'Username cannot be longer than 15 characters'}
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'maxlength', message: 'Password cannot be longer than 20 characters'}
    ]
  };

  registrationForm = this.formBuilder.group({
    fname: ['', [Validators.required, Validators.maxLength(100)]],
    lname: ['', [Validators.required, Validators.maxLength(100)]],
    username: ['', [Validators.required, Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.maxLength(20)]]
  });

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  public submit() {
    console.log(this.registrationForm.value);
  }

  ngOnInit() {
  }

  spinner(){
    this.router.navigate(['spinner']);
  }

  login(){
    this.router.navigate(['login']);
  }

  

}
