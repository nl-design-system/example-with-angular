import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcFormComponent } from './rhc-form.component';

describe('RhcFormComponent', () => {
  let component: RhcFormComponent;
  let fixture: ComponentFixture<RhcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RhcFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
