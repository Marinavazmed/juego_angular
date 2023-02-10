import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatineteComponent } from './patinete.component';

describe('PatineteComponent', () => {
  let component: PatineteComponent;
  let fixture: ComponentFixture<PatineteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatineteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatineteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
