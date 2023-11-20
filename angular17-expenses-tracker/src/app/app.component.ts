import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { BalanceComponent } from './components/balance/balance.component';

import { Balance } from './models/balance.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BalanceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  balance: Balance = {
    amount: 55_000,
    income: 100_000,
    expenses: 45_000,
  };
}
