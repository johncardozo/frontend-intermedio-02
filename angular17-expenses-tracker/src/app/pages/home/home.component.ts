import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { BalanceComponent } from '../../components/balance/balance.component';
import { TransactionsComponent } from '../../components/transactions/transactions.component';

// Models
import { Balance } from '../../models/balance.model';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BalanceComponent, TransactionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  balance: Balance = {
    amount: 55_000,
    income: 100_000,
    expenses: 45_000,
  };
  transactions: Transaction[] = [
    {
      id: '1',
      type: 'expense',
      amount: 45,
      category: 'food',
      date: new Date(2023, 11, 1),
    },
    {
      id: '2',
      type: 'expense',
      amount: 280,
      category: 'shopping',
      date: new Date(2023, 11, 2),
    },
    {
      id: '3',
      type: 'expense',
      amount: 60,
      category: 'entertainment',
      date: new Date(2023, 11, 3),
    },
    {
      id: '4',
      type: 'income',
      amount: 500,
      category: 'payroll',
      date: new Date(2023, 11, 4),
    },
  ];
  removeTransaction(id: string) {
    // Elimina la transacción del arreglo
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== id
    );
  }
}
