import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicorporateGameOstComponent } from './ticorporate-game-ost.component';

describe('TicorporateGameOstComponent', () => {
  let component: TicorporateGameOstComponent;
  let fixture: ComponentFixture<TicorporateGameOstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicorporateGameOstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicorporateGameOstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
