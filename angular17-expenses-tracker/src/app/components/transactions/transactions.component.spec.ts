import { ComponentFixture, TestBed } from '@angular/core/testing';

// Objetos de pruebas para routing
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { TransactionsComponent } from './transactions.component';
import { TransactionComponent } from '../transaction/transaction.component';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TransactionsComponent,
        TransactionComponent,
        RouterTestingModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // Obtiene el HTML del componente
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all transactions', () => {
    const dummyTransactions = [
      {
        id: '1',
        type: 'income',
        amount: 200,
        category: 'payroll',
        date: new Date(),
      },
      {
        id: '2',
        type: 'expense',
        amount: 50,
        category: 'food',
        date: new Date(),
      },
      {
        id: '3',
        type: 'expense',
        amount: 100,
        category: 'entertainment',
        date: new Date(),
      },
    ];
    // Modifica los datos de componente
    component.transactions = dummyTransactions;
    // Forza la detección de cambios del componente
    fixture.detectChanges();

    // Verifica la cantidad de elementos
    const appTransactionElements =
      compiled.getElementsByTagName('app-transaction');
    expect(appTransactionElements.length).toBe(dummyTransactions.length);

    // Verifica las clases CSS de los elementos generados
    const icons = compiled.querySelectorAll(
      'app-transaction .transaction .transaction__icon'
    );
    expect(icons[0]).toHaveClass('transaction__icon-income');
    expect(icons[1]).toHaveClass('transaction__icon-expense');
    expect(icons[2]).toHaveClass('transaction__icon-expense');
  });
});
