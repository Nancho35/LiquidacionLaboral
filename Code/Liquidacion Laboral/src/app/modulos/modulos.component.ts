
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { DataService } from '../data.service';
import { Modulos } from '../shared/modulos';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {
  contrato: string[];
  termina: string[];
  baseForm: FormGroup;
  submitted = false;
  model: Modulos;
  submittedModel: Modulos;

  lista = {
    opciones: [
      { name: 'Indemnización',  selected: true, id: 1 },
      { name: 'Prestaciones sociales',  selected: false, id: 2 },
      { name: 'Descanso remunerado',  selected: false, id: 3 },
      { name: 'Pendientes de Pago',  selected: false, id: 4 }
    ]
}

  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService) {
    this.baseForm = this.createMyForm();
    this.baseForm = formBuilder.group({opciones: this.buildSkills()});
  }
  get opciones() {
    return this.baseForm.get('opciones');
};

buildSkills() {
  const arr = this.lista.opciones.map(opcion => {
    return this.formBuilder.control(opcion.selected);
  });
  return this.formBuilder.array(arr);
}
  ngOnInit() {
    this.contrato = ['Prestación de servicios', 'Termino indefinido'];
    this.termina = ['Con justa causa', 'Sin justa causa'];

  }
  createMyForm() {
    return this.formBuilder.group({
      cargo: ['', Validators.compose([Validators.pattern('^[aA-zZ áéíóúÁÉÍÓÚñÑ]{2,35}$'), Validators.required])],
      contrato: ['', Validators.compose([Validators.required])],
      jornada: ['', Validators.compose([Validators.required])],
      tiempo: ['', Validators.compose([Validators.pattern('^[0-9]{2}$'), Validators.required])],
      termina: ['', Validators.compose([Validators.required])]


    });
  }
  onSubmit({ value, valid }: { value: Modulos, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
    this.data.modulos = this.submittedModel;
    this.router.navigate(['base']);
  }
  continuar() {
   
  }

}



