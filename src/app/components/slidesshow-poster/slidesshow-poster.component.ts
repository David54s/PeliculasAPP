import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slidesshow-poster',
  templateUrl: './slidesshow-poster.component.html',
  styleUrls: ['./slidesshow-poster.component.scss'],
  standalone: false
})
export class SlidesshowPosterComponent  implements OnInit {

  @Input() peliculas: (Pelicula | PeliculaDetalle)[] = [];
  constructor(private modalController: ModalController) { }

  ngOnInit() {}



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
