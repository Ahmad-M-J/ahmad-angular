import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeapleCardsComponent } from './peaple-cards.component';

describe('PeapleCardsComponent', () => {
  let component: PeapleCardsComponent;
  let fixture: ComponentFixture<PeapleCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeapleCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeapleCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
