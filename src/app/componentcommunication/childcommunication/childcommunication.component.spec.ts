import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcommunicationComponent } from './childcommunication.component';

describe('ChildcommunicationComponent', () => {
  let component: ChildcommunicationComponent;
  let fixture: ComponentFixture<ChildcommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
