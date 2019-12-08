import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CausasComponent } from './causas.component';
import { ModalComponent } from '../modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CausasComponent
      }
    ])
  ],
  declarations: [CausasComponent]
})
export class CausasComponentModule {}
