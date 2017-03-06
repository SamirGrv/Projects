import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './app/registerUser/registerUser.html'
})

export class RegisterUserComponent {
  registerUserForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.registerUserForm = fb.group({
      'txtFName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      'txtLName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      'txtUName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      'pwdPassword': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15), passwordValidator])],
      'txtRPassword': '',
      'txtEmail': [null, Validators.compose([Validators.required])],
      'gender': '0',
      'selDay': '0',
      'selMonth': 'january',
      'selYear': '1999'
    })
  }

  registerUser(value: any): void {
    console.log('Reactive form data:');
    console.log(value);
  }

  passwordValidator(control: FormControl): { [s: string]: boolean } {
    console.log('Begin Password Validation');
    if (!control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/)) {
      console.log('Bad Password!');
      return { "validPassword": true };
    }
    else {
      console.log('Good Password!');
      return { "validPassword": false };
    }
  }
}
