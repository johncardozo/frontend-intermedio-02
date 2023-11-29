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
    amount: 55_000,
    income: 100_000,
    expenses: 45_000,
  };

  // Provee el servicio al componente usando Dependency Injection
  constructor(private transactionService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionService.get().subscribe((response: Transaction[]) => {
      this.transactions = response;
    });
  }

  removeTransaction(id: string) {
    // Elimina la transacción del arreglo
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== id
    );
  }
}
