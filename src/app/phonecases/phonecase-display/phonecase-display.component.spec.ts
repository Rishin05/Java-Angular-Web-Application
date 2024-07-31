import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonecaseDisplayComponent } from './phonecase-display.component';

describe('PhonecaseDisplayComponent', () => {
  let component: PhonecaseDisplayComponent;
  let fixture: ComponentFixture<PhonecaseDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhonecaseDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhonecaseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
