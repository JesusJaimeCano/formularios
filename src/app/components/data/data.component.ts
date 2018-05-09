import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup; //Responsable del manejo de la forma completamente

  usuario: Object = {
    nombreCompleto: {
      nombre: "Jesus",
      apellido: "Terrazas"
    },
    correo: "jesuscanoterrazas@outlook.com",
    // pasatiempos: ["Correr", "Dormir", "Comer"]
  }

  constructor() {
    //Creamos un nuevo formGroup, pero este recibe un objeto de los elementos que tendra dentro del mismo
    //por ejemplo nombre y este mismo al declararlo lleva parametros, como lo son 
    //Valor por defecto,  regla de validacion (si es mas de una, se pone dentro del arreglo), reglas de validacion asyncrona
    this.forma = new FormGroup({

      'nombreCompleto': new FormGroup({
          'nombre': new FormControl('', [Validators.required,
                                         Validators.minLength(3)]),
          'apellido': new FormControl('', [
                                          Validators.required,
                                          this.noHerrera     
                                        ]),
      }),
      'correo': new FormControl('', [
                                      Validators.required, 
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    })

    //Se necesita ligar los elementos del html al ts, y eso se hace añadiendo esto al fomrulario, en la etiqueta form =  [formGroup]="forma"
    
    console.log(this.forma);
    
    
    console.log(this.usuario);

    //this.forma.setValue( this.usuario );

    this.forma.controls['password2'].setValidators([
      Validators.required, 
      this.noIgual.bind(this.forma)
    ])
    
  } 

  noHerrera(control: FormControl): { [s:string]:boolean}{

    if( control.value == "herrera" ){
      return {
        noherrera:true
      }
    }

    return null;

  }

  noIgual(control: FormControl): { [s:string]:boolean}{

    console.log(this);
    let forma:any =  this;
    

    if( control.value !== forma.controls['password1'].value  ){
      return {
        noherrera:true
      }
    }

    return null;

  }

  existeUsuario( control: FormControl ): Promise<any>|Observable<any>{
    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout( ()=>{
            if(control.value == "strider"){
              resolve ( {existe: true} )
            }else{
              resolve(null)
            }
        }, 3000 ) 
      }
    )
    return promesa;
  }

  guardarCambios(){
    console.log(this.forma);
    console.log(this.forma.value);

    // this.forma.reset({
    //   nombreCompleto: {
    //     nombre: "",
    //     apellido: "",
    //   }, 
    //   correo: ""
    // });
    
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
        new FormControl('', Validators.required)
      )
  }

}
