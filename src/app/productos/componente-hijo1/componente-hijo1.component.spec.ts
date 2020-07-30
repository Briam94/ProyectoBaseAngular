import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHijo1Component } from './componente-hijo1.component';

describe('HistorialComponent', () => {
  let component: ComponenteHijo1Component;
  let fixture: ComponentFixture<ComponenteHijo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteHijo1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteHijo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
