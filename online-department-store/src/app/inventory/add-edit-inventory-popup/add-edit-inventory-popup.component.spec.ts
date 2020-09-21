import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInventoryPopupComponent } from './add-edit-inventory-popup.component';

describe('AddEditInventoryPopupComponent', () => {
  let component: AddEditInventoryPopupComponent;
  let fixture: ComponentFixture<AddEditInventoryPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditInventoryPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInventoryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
