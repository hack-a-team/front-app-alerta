import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(public alertController: AlertController, public httpClient: HttpClient) { }

   causa = 'incendio';
  ngOnInit() {}

  sendPostRequest() {
    

    let postData = {
            "kind": this.causa,
    }

    this.httpClient.post("https://94f37516.ngrok.io/alerts/", postData)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }

  async presentAlert() {
    this.sendPostRequest();
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Seu alerta foi criado',
      message: 'Agradeçemos sua colaboração.',
      buttons: ['Fechar']
    });

    await alert.present();
  }

  
}
