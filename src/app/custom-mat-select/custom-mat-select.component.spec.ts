import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMatSelectComponent } from './custom-mat-select.component';

describe('CustomMatSelectComponent', () => {
  let component: CustomMatSelectComponent;
  let fixture: ComponentFixture<CustomMatSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMatSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMatSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
