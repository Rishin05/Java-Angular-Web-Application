import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammerAddComponent } from './programmer-add.component';

describe('ProgrammerAddComponent', () => {
  let component: ProgrammerAddComponent;
  let fixture: ComponentFixture<ProgrammerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammerAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgrammerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
