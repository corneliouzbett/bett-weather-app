import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultcityComponent } from './defaultcity.component';

describe('DefaultcityComponent', () => {
  let component: DefaultcityComponent;
  let fixture: ComponentFixture<DefaultcityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultcityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
