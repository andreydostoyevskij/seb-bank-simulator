import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-account',
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  accountNumber: string = '';
  balance: number = 10;
  currency: string = 'EUR';
  deposit() {
    console.log('You have deposited money into your account.');
  }
  withdraw() {
    console.log('You have withdrawn money from your account.');
  }
}
