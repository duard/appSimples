import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FrontendComponent } from './index';
import { IndexComponent } from './index/index';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FrontendComponent, IndexComponent, SobreComponent, ContatoComponent],
  exports: [FrontendComponent]
})
export class FrontendModule { }
