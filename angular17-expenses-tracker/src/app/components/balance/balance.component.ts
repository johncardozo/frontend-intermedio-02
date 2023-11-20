import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.scss',
})
export class BalanceComponent {
  // Variable con tipo implícito
  title = 'This is the Balance Component';
  // Variable con tipo explícito
  search: string = 'iPhone 15 Pro Max';
}
