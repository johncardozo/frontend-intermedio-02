import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  // Construye un httpClient usando Dependency Injection
  constructor(private httpClient: HttpClient) {}

  public get(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(
      'http://localhost:3000/transactions'
    );
  }

  public create(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(
      'http://localhost:3000/transactions',
      transaction
    );
  }
}
