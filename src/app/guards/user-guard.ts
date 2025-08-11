import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {UserService} from '../services/user';

export const userGuard: CanActivateFn = (route, state) => {
	const userService = inject(UserService);
	const router = inject(Router);

	if (!userService.userState().username) {
		router.navigate(['/']);
		return false;
	}

	return true;
};

export const userLoggedGuard: CanActivateFn = (route, state) => {
	const userService = inject(UserService);
	const router = inject(Router);

	if (userService.userState().username) {
		router.navigate(['/dashboard']);
		return false;
	}

	return true;
};
