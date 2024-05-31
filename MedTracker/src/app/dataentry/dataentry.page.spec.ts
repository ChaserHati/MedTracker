import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataentryPage } from './dataentry.page';

describe('DataentryPage', () => {
  let component: DataentryPage;
  let fixture: ComponentFixture<DataentryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DataentryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
