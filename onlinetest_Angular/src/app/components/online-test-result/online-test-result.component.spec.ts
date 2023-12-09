import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTestResultComponent } from './online-test-result.component';

describe('OnlineTestResultComponent', () => {
  let component: OnlineTestResultComponent;
  let fixture: ComponentFixture<OnlineTestResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineTestResultComponent]
    });
    fixture = TestBed.createComponent(OnlineTestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
