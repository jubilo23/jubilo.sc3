import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultwomanComponent } from './cultwoman.component';

describe('CultwomanComponent', () => {
  let component: CultwomanComponent;
  let fixture: ComponentFixture<CultwomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultwomanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CultwomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
