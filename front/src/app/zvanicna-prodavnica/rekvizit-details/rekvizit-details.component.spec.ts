import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekvizitDetailsComponent } from './rekvizit-details.component';

describe('RekvizitDetailsComponent', () => {
  let component: RekvizitDetailsComponent;
  let fixture: ComponentFixture<RekvizitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekvizitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekvizitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
