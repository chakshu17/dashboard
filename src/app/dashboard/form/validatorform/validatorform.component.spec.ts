import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorformComponent } from './validatorform.component';

describe('ValidatorformComponent', () => {
  let component: ValidatorformComponent;
  let fixture: ComponentFixture<ValidatorformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
