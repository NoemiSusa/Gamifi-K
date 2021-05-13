import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRankingsAlumnoComponent } from './listar-rankings-alumno.component';

describe('ListarRankingsAlumnoComponent', () => {
  let component: ListarRankingsAlumnoComponent;
  let fixture: ComponentFixture<ListarRankingsAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRankingsAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRankingsAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
