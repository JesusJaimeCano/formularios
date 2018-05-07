import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
  

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup; //Responsable del manejo de la forma completamente

  usuario: any = {
    nombreCompleto: {
      nombre: "Jesus",
      apellido: "Terrazas"
    },
    correo: "jesuscanoterrazas@outlook.com"
  }

  constructor() {
    //Creamos un nuevo formGroup, pero este recibe un objeto de los elementos que tendra dentro del mismo
    //por ejemplo nombre y este mismo al declararlo lleva parametros, como lo son 
    //Valor por defecto,  regla de validacion (si es mas de una, se pone dentro del arreglo), reglas de validacion asyncrona
    this.forma = new FormGroup({

      'nombreCompleto': new FormGroup({
          'nombre': new FormControl( this.usuario.nombreCompleto.nombre , [Validators.required,
                                         Validators.minLength(3)]),
          'apellido': new FormControl( this.usuario.nombreCompleto.apellido , Validators.required),
      }),
      'correo': new FormControl( this.usuario.correo , [
                                      Validators.required, 
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ])
    });

    //Se necesita ligar los elementos del html al ts, y eso se hace añadiendo esto al fomrulario, en la etiqueta form =  [formGroup]="forma"
    
    
    console.log(this.usuario);

    
    
  } 

  guardarCambios(){
    console.log(this.forma);
    
  }

}
