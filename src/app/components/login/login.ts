import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Header } from '../header/header';
import { UserService } from '../../services/user';

@Component({
  selector: 'login',
  standalone: true,
  imports: [ReactiveFormsModule, Header],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private readonly formBuilder = inject(FormBuilder);
  private readonly userService = inject(UserService);

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
