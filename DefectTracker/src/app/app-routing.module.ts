import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentAreaComponent } from './contentArea/app.contentAreaComponent';
import { AboutComponent } from './about/app.aboutComponent';
import { LoginComponent } from './login/app.loginComponent';
import { RegisterUserComponent } from './registerUser/app.registerUserComponent';
import { ContactComponent } from './contact/app.contactComponent';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ContentAreaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registerUser', component: RegisterUserComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

export const routableComponents = [
  ContentAreaComponent,
  AboutComponent,
  ContactComponent,
]

export const routableLoginComponents = [
  LoginComponent,
  RegisterUserComponent
]
