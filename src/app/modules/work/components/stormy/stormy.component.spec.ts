import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StormyComponent } from './stormy.component';

describe('StormyComponent', () => {
  let component: StormyComponent;
  let fixture: ComponentFixture<StormyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StormyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StormyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
