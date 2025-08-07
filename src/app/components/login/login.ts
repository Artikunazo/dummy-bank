import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Header } from '../header/header';
import { UserService } from '../../services/user';
import { IUser } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';

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
  private readonly router = inject(Router)

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    this.userService.userState.update((user: IUser) => ({
      ...user,
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value,
      })
    );

    this.router.navigate(["/dashboard"]);
  }
}
