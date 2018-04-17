import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmoviEditComponent } from './filmovi-edit.component';

describe('FilmoviEditComponent', () => {
  let component: FilmoviEditComponent;
  let fixture: ComponentFixture<FilmoviEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmoviEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmoviEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
