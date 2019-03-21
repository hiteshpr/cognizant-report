import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      firstname : new FormControl(''),
      lastname: new FormControl(''),
      dateofbirth: new FormControl(),
      mobileno : new FormControl()
    });

  }

}
