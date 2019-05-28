import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoreComponent } from './autore.component';

describe('AutoreComponent', () => {
  let component: AutoreComponent;
  let fixture: ComponentFixture<AutoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
