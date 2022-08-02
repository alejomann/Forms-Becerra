import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desafio03';
  formulario: FormGroup;
  constructor(
    private fb: FormBuilder
  ){
    this.formulario = fb.group({
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      nacionalidad: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      mensaje: new FormControl('',[Validators.required])
    })
  }

  enviarContacto(){
    console.log(this.formulario);
  }

}
