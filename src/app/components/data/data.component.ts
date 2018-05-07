import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
  

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup; //Responsable del manejo de la forma completamente

  constructor() {
    //Creamos un nuevo formGroup, pero este recibe un objeto de los elementos que tendra dentro del mismo
    //por ejemplo nombre y este mismo al declararlo lleva parametros, como lo son 
    //Valor por defecto,  regla de validacion (si es mas de una, se pone dentro del arreglo), reglas de validacion asyncrona
    this.forma = new FormGroup({
      'nombre': new FormControl('Jesús'),
      'apellido': new FormControl(),
      'correo': new FormControl()
    });

    //Se necesita ligar los elementos del html al ts, 

  }

}
