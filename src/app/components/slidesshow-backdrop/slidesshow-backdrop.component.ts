import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slidesshow-backdrop',
  templateUrl: './slidesshow-backdrop.component.html',
  styleUrls: ['./slidesshow-backdrop.component.scss'],
  standalone: false
})
export class SlidesshowBackdropComponent  implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  constructor( private modalController: ModalController) { }

  ngOnInit() {

  }

  async verDetalle(id: number){
   const modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }
}
