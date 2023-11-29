import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

// Formularios
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// Services
import { TransactionsService } from '../../services/transactions.service';

// Models
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.scss',
})
export class AddTransactionComponent implements OnInit {
  // Objeto que administra la información del formulario
  addTransactionForm!: FormGroup;

  constructor(
    private transactionsService: TransactionsService,
    private router: Router
  ) {}

  // Se ejecuta en el montaje del componente en el DOM Tree
  ngOnInit(): void {
    // Inicialización del formulario
    this.addTransactionForm = new FormGroup({
      amount: new FormControl(0, [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
      type: new FormControl('expense', Validators.required),
      category: new FormControl('food', Validators.required),
      date: new FormControl('2023-11-28', Validators.required),
    });
  }

  onSubmit() {
    // Verifica si el formulario es válido
    if (this.addTransactionForm.valid) {
      // Obtiene el objeto del formulario con los datos de la transacción
      const transaction = this.addTransactionForm.value;

      // Accede al servicio del backend para crear una transacción
      this.transactionsService
        .create(transaction)
        .subscribe((response: Transaction) => {
          // Navega al home de la aplicación
          this.router.navigate(['/']);
        });
    }
  }
}
