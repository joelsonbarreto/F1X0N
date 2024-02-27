import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentCardComponent } from './percent-card.component';

describe('PercentCardComponent', () => {
  let component: PercentCardComponent;
  let fixture: ComponentFixture<PercentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
