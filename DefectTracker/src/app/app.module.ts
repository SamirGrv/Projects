import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/app.headerComponent';
import { NavComponent } from './nav/app.navComponent';
import { FooterComponent } from './footer/app.footerComponent';
import { ContactComponent } from './contact/app.contactComponent';

import { AppRoutingModule, routableComponents, routableLoginComponents } from './app-routing.module';

@NgModule({
  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    routableComponents,
    routableLoginComponents,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
