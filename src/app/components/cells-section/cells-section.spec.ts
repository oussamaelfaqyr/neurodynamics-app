import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellsSection } from './cells-section';

describe('CellsSection', () => {
  let component: CellsSection;
  let fixture: ComponentFixture<CellsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
