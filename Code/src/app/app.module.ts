import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CamelToTitlePipe } from './shared/camel-to-title.pipe';
import {TooltipModule} from 'ng2-tooltip-directive';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule,TooltipModule,HttpClientModule ],
  declarations: [ AppComponent, AppRoutingModule.components, CamelToTitlePipe, BienvenidaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }