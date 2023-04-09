import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredicasComponent } from './predicas.component';

describe('PredicasComponent', () => {
  let component: PredicasComponent;
  let fixture: ComponentFixture<PredicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
