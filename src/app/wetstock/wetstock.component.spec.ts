import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WetstockComponent } from './wetstock.component';

describe('WetstockComponent', () => {
  let component: WetstockComponent;
  let fixture: ComponentFixture<WetstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
