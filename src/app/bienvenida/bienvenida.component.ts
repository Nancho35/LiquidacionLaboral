import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { DataService } from '../data.service';
import { Bienvenida } from '../shared/bienvenida';
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})

export class BienvenidaComponent implements OnInit {
  // @Output('texto1') enviar = new EventEmitter<string>();
  contrato: string[];
  baseForm: FormGroup;
  submitted = false;
  model: Bienvenida;
  submittedModel: Bienvenida;
  condition = false;
  constructor(private formBuilder: FormBuilder, public router: Router, private data: DataService) {
    this.baseForm = this.createMyForm();
  }

  ngOnInit() {
    this.contrato = ['Prestación de servicios', 'Termino indefinido'];
  }
  createMyForm() {
    return this.formBuilder.group({
      contrato: ['', Validators.compose([Validators.required])],
      cargo: ['', Validators.compose([Validators.pattern('^[1-2](\\.[0-9]{1,2})?$'), Validators.required])],
      nombre: ['', Validators.compose([Validators.pattern('^([0-9]{1,3})(\\.[0-9]{1,2})?$'), Validators.required])],
      tiempo: ['', Validators.compose([Validators.pattern('^[0-9]{2}$'), Validators.required])]

    });
  }
  onSubmit({ value, valid }: { value: Bienvenida, valid: boolean }) {
    this.condition = true;
    this.submittedModel = value;
    this.data.base = this.submittedModel;
  }
  continuar() {
    this.submitted = true;
    this.router.navigate(['acumulacion']);
  }

}
