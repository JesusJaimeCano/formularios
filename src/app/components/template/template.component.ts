import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles:[`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "",
    acepta: false
  };

  paises = [
    {
      codigo:"MX",
      nombre: "Mexico"
    },
    {
      codigo:"USA",
      nombre: "United States of America"
    }
  ];
  
  sexos: string[] = ["Hombre","Mujer","Sin definir"];

  constructor() { }

  ngOnInit() {
  }

  guardar( forma:NgForm ){
    console.log("NgForm", forma);
    console.log("Valor", forma.value);

    console.log("Usuario desde los inputs", this.usuario);
    
  }

}
