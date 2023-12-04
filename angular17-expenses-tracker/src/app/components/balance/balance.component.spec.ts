import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceComponent } from './balance.component';

describe('BalanceComponent', () => {
  let component: BalanceComponent;
  let fixture: ComponentFixture<BalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dos mas dos igual a cuatro', () => {
    let suma = 2 + 2;
    // Ejecución de prueba
    expect(suma).toBe(4);
  });
});
