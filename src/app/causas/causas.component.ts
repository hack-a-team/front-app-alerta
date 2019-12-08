import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'app-causas',
  templateUrl: './causas.component.html',
  styleUrls: ['./causas.component.scss'],
})
export class CausasComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  async showModalOne() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    });
    modal.present();
  }

}
