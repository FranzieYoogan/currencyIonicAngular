import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraPage } from './libra.page';

describe('LibraPage', () => {
  let component: LibraPage;
  let fixture: ComponentFixture<LibraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
