import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Header } from '../header/header';

@Component({
  selector: 'login',
  standalone: true,
  imports: [ReactiveFormsModule, Header],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
