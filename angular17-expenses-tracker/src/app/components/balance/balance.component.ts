import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Balance } from '../../models/balance.model';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.scss',
})
export class BalanceComponent {
  @Input() title: string = 'Titulo';
  balance: Balance = {
    amount: 55_000,
    income: 100_000,
    expenses: 45_000,
  };
}
