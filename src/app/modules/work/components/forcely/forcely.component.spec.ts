import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcelyComponent } from './forcely.component';

describe('ForcelyComponent', () => {
  let component: ForcelyComponent;
  let fixture: ComponentFixture<ForcelyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcelyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
