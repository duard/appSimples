import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { SharedModule } from '../shared/shared.module';

import { AuthenticationComponent } from './index';
import { SigninComponent } from './signin/index';
import { LoginComponent } from './login/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AuthenticationComponent, SigninComponent, LoginComponent],
  exports: [AuthenticationComponent]
})
export class AuthenticationModule { }
