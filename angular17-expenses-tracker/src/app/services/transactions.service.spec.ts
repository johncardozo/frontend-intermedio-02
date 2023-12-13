import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// Services
import { TransactionsService } from './transactions.service';
// Models
import { Transaction } from '../models/transaction.model';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be 3 transactions', (done) => {
    service.get().subscribe((transactions: Transaction[]) => {
      expect(transactions.length).toBe(3);
      done();
    });
  });

  it('should get the right categories', (done) => {
    service.get().subscribe((transactions: Transaction[]) => {
      const incomes: Transaction[] = transactions.filter(
        (transaction) => transaction.type === 'income'
      );
      // Verifica la cantidad de incomes
      expect(incomes.length).toBe(1);
      // Verifica la categoría del income resultante
      expect(incomes[0].category).toBe('payroll');
      // Verifica las categorías obtenidas
      expect(transactions[1].category).toBe('food');
      expect(transactions[2].category).toBe('entertainment');
      done();
    });
  });
});
