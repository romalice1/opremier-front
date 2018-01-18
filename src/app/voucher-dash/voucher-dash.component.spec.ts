import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherDashComponent } from './voucher-dash.component';

describe('VoucherDashComponent', () => {
  let component: VoucherDashComponent;
  let fixture: ComponentFixture<VoucherDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
