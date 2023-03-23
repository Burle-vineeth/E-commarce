import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObjComponent } from './add-obj.component';

describe('AddObjComponent', () => {
  let component: AddObjComponent;
  let fixture: ComponentFixture<AddObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddObjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
