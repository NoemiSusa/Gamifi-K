import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRankingsAlumnoComponent } from './vista-rankings-alumno.component';

describe('VistaRankingsAlumnoComponent', () => {
  let component: VistaRankingsAlumnoComponent;
  let fixture: ComponentFixture<VistaRankingsAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaRankingsAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRankingsAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
