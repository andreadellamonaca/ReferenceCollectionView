import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAutoriComponent } from './lista-autori.component';

describe('ListaAutoriComponent', () => {
  let component: ListaAutoriComponent;
  let fixture: ComponentFixture<ListaAutoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAutoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAutoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
