import {ICarLoan, IChecking, ICreditCard, IMortgageCredit, IPayroll} from './products';
type userProducts = IChecking | IPayroll | ICarLoan | IMortgageCredit | ICreditCard;

export interface IUser {
	username: string | null;
	password: string | null;
	products: userProducts[];
	phoneNumber?: string | null;
}
