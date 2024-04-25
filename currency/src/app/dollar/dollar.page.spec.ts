import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DollarPage } from './dollar.page';

describe('DollarPage', () => {
  let component: DollarPage;
  let fixture: ComponentFixture<DollarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
