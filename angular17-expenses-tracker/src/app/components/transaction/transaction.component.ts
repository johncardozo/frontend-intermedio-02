import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Models
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
})
export class TransactionComponent {
  @Input() transaction!: Transaction;
}
