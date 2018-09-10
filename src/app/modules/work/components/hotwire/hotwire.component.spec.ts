import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotwireComponent } from './hotwire.component';

describe('HotwireComponent', () => {
  let component: HotwireComponent;
  let fixture: ComponentFixture<HotwireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotwireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotwireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
