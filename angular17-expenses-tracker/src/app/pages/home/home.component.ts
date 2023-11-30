import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { BalanceComponent } from '../../components/balance/balance.component';
import { TransactionsComponent } from '../../components/transactions/transactions.component';

// Models
import { Balance } from '../../models/balance.model';
import { Transaction } from '../../models/transaction.model';

// Services
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BalanceComponent, TransactionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  transactions!: Transaction[];
  balance: Balance = {
    amount: 0,
    income: 0,
    expenses: 0,
  };

  // Provee el servicio al componente usando Dependency Injection
  constructor(private transactionService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionService.get().subscribe((response: Transaction[]) => {
      this.transactions = response;
      // Recalcula los saldos
      this.calculateBalance();
    });
  }

  removeTransaction(id: string) {
    // Elimina la transacción del backend
    this.transactionService.remove(id).subscribe((response: Transaction) => {
      console.log(response);
      // Elimina la transacción del frontend
      this.transactions = this.transactions.filter(
        (transaction) => transaction.id !== id
      );
      // Recalcula los saldos
      this.calculateBalance();
    });
  }

  /**
   * Recalcula los saldos para el componente Balance
   */
  calculateBalance(): void {
    let income: number = 0;
    let expenses: number = 0;
    // Recorre las transacciones para calcular los saldos
    this.transactions.forEach((transaction) => {
      if (transaction.type === 'expense') expenses += transaction.amount;
      if (transaction.type === 'income') income += transaction.amount;
    });
    // Calcula el saldo total
    const amount: number = income - expenses;
    // Actualiza los saldos
    this.balance = { amount, income, expenses };
  }
}
