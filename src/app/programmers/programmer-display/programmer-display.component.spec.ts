import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammerDisplayComponent } from './programmer-display.component';

describe('ProgrammerDisplayComponent', () => {
  let component: ProgrammerDisplayComponent;
  let fixture: ComponentFixture<ProgrammerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammerDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgrammerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
