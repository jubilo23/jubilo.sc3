import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultmenComponent } from './cultmen.component';

describe('CultmenComponent', () => {
  let component: CultmenComponent;
  let fixture: ComponentFixture<CultmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultmenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CultmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
