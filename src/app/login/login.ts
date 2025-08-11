import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Header} from './header/header';
import {UserService} from '../services/user';
import {IUser} from '../models/user';
import {Router} from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@Component({
	selector: 'login',
	standalone: true,
	imports: [ReactiveFormsModule, Header, InputTextModule, ButtonModule],
	templateUrl: './login.html',
	styleUrl: './login.css',
})
export class Login {
	private readonly formBuilder = inject(FormBuilder);
	private readonly userService = inject(UserService);
	private readonly router = inject(Router);

	loginForm = this.formBuilder.group({
		username: ['', Validators.required],
		password: ['', Validators.required],
	});

	onSubmit() {
		this.userService.userState.update((user: IUser) => ({
			...user,
			username: this.loginForm.controls.username.value,
			password: this.loginForm.controls.password.value,
		}));

		this.router.navigate(['/dashboard']);
	}
}
