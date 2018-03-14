import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepertoarPozoristaComponent } from './repertoar-pozorista.component';

describe('RepertoarPozoristaComponent', () => {
  let component: RepertoarPozoristaComponent;
  let fixture: ComponentFixture<RepertoarPozoristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepertoarPozoristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepertoarPozoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
