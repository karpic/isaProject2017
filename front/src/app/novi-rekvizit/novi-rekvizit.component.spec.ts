import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviRekvizitComponent } from './novi-rekvizit.component';

describe('NoviRekvizitComponent', () => {
  let component: NoviRekvizitComponent;
  let fixture: ComponentFixture<NoviRekvizitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoviRekvizitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoviRekvizitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
