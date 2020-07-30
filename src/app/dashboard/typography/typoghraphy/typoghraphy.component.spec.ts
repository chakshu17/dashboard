import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypoghraphyComponent } from './typoghraphy.component';

describe('TypoghraphyComponent', () => {
  let component: TypoghraphyComponent;
  let fixture: ComponentFixture<TypoghraphyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypoghraphyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypoghraphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
