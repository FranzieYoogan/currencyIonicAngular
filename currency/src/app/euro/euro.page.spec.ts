import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EuroPage } from './euro.page';

describe('EuroPage', () => {
  let component: EuroPage;
  let fixture: ComponentFixture<EuroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
