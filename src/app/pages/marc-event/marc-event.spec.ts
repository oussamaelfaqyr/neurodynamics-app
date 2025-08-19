import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcEvent } from './marc-event';

describe('MarcEvent', () => {
  let component: MarcEvent;
  let fixture: ComponentFixture<MarcEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
