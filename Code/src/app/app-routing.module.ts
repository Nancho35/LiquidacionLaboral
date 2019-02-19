import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bienvenida' },
  { path: 'bienvenida',     component: BienvenidaComponent  }];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [  BienvenidaComponent ];
}


