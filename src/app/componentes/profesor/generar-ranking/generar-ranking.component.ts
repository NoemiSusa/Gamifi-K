import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ranking } from 'src/app/models/ranking,model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-generar-ranking',
  templateUrl: './generar-ranking.component.html',
  styleUrls: ['./generar-ranking.component.css']
})
export class GenerarRankingComponent implements OnInit {
  //variable de tipo ranking para rellenar los datos del formulario
  nuevoRanking : Ranking = null;

  rankingProfesor:FormGroup;


  submitted=false;
  constructor(
     private formBuilder: FormBuilder,
    ) {

  }

  ngOnInit(): void {
this.rankingProfesor = this.formBuilder.group({
  nombreRanking:['',[Validators.required,Validators.minLength(2)]],
  fechaInicio:['',[Validators.required]]


})

  }

    //sirve para ejecutar el control del formulario en el html
    get controlFormulario() {
      return this.rankingProfesor.controls;
    }

  funcionRanking(){
this.nuevoRanking = new Ranking(this.rankingProfesor.controls.nombreRanking.value,
  this.rankingProfesor.controls.fechaInicio.value,


  );
  this.nuevoRanking.nickProfesorRK=environment.vsesion;
console.log(this.nuevoRanking);

  }



}

