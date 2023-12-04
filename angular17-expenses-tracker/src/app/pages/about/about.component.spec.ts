import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    // Configura el módulo de pruebas
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    // Crea el componente
    fixture = TestBed.createComponent(AboutComponent);
    // Obtiene el componente
    component = fixture.componentInstance;
    // Detecta cambios en el componente
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
