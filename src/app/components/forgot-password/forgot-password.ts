import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Header } from '../header/header';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, Header],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss'
})
export class ForgotPassword {
  private readonly formBuilder = inject(FormBuilder);
  
  forgotPasswordForm = this.formBuilder.group({
    username: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.forgotPasswordForm.value);
  }
}
