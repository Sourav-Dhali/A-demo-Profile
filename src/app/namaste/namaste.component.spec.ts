import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamasteComponent } from './namaste.component';

describe('NamasteComponent', () => {
  let component: NamasteComponent;
  let fixture: ComponentFixture<NamasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
