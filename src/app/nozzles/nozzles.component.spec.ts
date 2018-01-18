import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NozzlesComponent } from './nozzles.component';

describe('NozzlesComponent', () => {
  let component: NozzlesComponent;
  let fixture: ComponentFixture<NozzlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NozzlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NozzlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
