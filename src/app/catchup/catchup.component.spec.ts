import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchupComponent } from './catchup.component';

describe('CatchupComponent', () => {
  let component: CatchupComponent;
  let fixture: ComponentFixture<CatchupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
