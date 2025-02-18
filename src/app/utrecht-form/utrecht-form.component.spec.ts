import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtrechtFormComponent } from './utrecht-form.component';

describe('UtrechtFormComponent', () => {
  let component: UtrechtFormComponent;
  let fixture: ComponentFixture<UtrechtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtrechtFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtrechtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
