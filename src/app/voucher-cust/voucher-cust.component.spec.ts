import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherCustComponent } from './voucher-cust.component';

describe('VoucherCustComponent', () => {
  let component: VoucherCustComponent;
  let fixture: ComponentFixture<VoucherCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
