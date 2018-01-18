import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherAllComponent } from './voucher-all.component';

describe('VoucherAllComponent', () => {
  let component: VoucherAllComponent;
  let fixture: ComponentFixture<VoucherAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
