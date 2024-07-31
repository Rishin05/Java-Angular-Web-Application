import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgammerHomeComponent } from './progammer-home.component';

describe('ProgammerHomeComponent', () => {
  let component: ProgammerHomeComponent;
  let fixture: ComponentFixture<ProgammerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgammerHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgammerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
