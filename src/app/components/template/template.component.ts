import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: "Jesus Jaime",
    apellido: "Cano Terrazas",
    correo: "jesuscanoterrazas@outlook.com"
  };

  constructor() { }

  ngOnInit() {
  }

  guardar( forma:NgForm ){
    console.log("NgForm", forma);
    console.log("Valor", forma.value);

    console.log("Usuario desde los inputs", this.usuario);
    
  }

}
