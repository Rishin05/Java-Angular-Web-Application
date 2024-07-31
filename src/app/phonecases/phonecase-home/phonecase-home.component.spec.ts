import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonecaseHomeComponent } from './phonecase-home.component';

describe('PhonecaseHomeComponent', () => {
  let component: PhonecaseHomeComponent;
  let fixture: ComponentFixture<PhonecaseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhonecaseHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhonecaseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
