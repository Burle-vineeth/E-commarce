import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherobjComponent } from './otherobj.component';

describe('OtherobjComponent', () => {
  let component: OtherobjComponent;
  let fixture: ComponentFixture<OtherobjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherobjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherobjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
