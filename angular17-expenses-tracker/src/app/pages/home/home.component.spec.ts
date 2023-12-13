import { ComponentFixture, TestBed } from '@angular/core/testing';

// Componentes
import { HomeComponent } from './home.component';
import { BalanceComponent } from '../../components/balance/balance.component';
import { TransactionsComponent } from '../../components/transactions/transactions.component';
// Routing
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
// Services
import { TransactionsService } from '../../services/transactions.service';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        BalanceComponent,
        TransactionsComponent,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        TransactionsService,
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have en element with css class main', () => {
    const div = compiled.querySelector('.main');
    expect(div).toBeTruthy();
  });

  it('should calculate balance', () => {
    const dummyTransactions = [
      {
        id: '1',
        type: 'income',
        amount: 100,
        category: 'payroll',
        date: new Date(),
      },
      {
        id: '2',
        type: 'expense',
        amount: 25,
        category: 'food',
        date: new Date(),
      },
      {
        id: '3',
        type: 'expense',
        amount: 10,
        category: 'entertainment',
        date: new Date(),
      },
    ];
    // Asigna las transacciones al componente
    component.transactions = dummyTransactions;
    // Recalcula el balance
    component.calculateBalance();
    // Verifica las cantidades
    expect(component.balance.amount).toBe(65);
    expect(component.balance.expenses).toBe(35);
    expect(component.balance.income).toBe(100);
  });
});
