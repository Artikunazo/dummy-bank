import { Component } from '@angular/core';
import { Products } from "../products/products";
import { MyBank } from "../my-bank/my-bank";

@Component({
  selector: 'app-dashboard',
  imports: [Products, MyBank],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
