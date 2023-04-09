import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BautizosComponent } from './bautizos.component';

describe('BautizosComponent', () => {
  let component: BautizosComponent;
  let fixture: ComponentFixture<BautizosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BautizosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BautizosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
