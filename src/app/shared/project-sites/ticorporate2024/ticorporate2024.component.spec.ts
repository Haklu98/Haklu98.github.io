import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ticorporate2024Component } from './ticorporate2024.component';

describe('Ticorporate2024Component', () => {
  let component: Ticorporate2024Component;
  let fixture: ComponentFixture<Ticorporate2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ticorporate2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ticorporate2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
