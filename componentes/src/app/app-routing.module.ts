import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 }
