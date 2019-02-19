import { Injectable } from '@angular/core';
import { Bienvenida } from './shared/bienvenida';
import { Acumulacion } from './shared/acumulacion';
import { Metabolico } from './shared/metabolico';
import { Somatotipo } from './shared/somatotipo';
import { Final } from './shared/final';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public base: Bienvenida;
  public acumulacion: Acumulacion;
  public metabolico: Metabolico;
  public somatotipo: Somatotipo;
  public final: Final;
  constructor() { }
}
