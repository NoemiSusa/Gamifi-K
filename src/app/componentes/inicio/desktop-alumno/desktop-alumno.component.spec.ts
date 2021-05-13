import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopAlumnoComponent } from './desktop-alumno.component';

describe('DesktopAlumnoComponent', () => {
  let component: DesktopAlumnoComponent;
  let fixture: ComponentFixture<DesktopAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
