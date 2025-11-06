import { ModalController } from '@ionic/angular';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { SwiperOptions } from 'swiper/types';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slidesshow-pares',
  templateUrl: './slidesshow-pares.component.html',
  styleUrls: ['./slidesshow-pares.component.scss'],
  standalone: false
})
export class SlidesshowParesComponent  implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();




  // slideOpts: SwiperOptions = {
  //   slidesPerView: 3.3,
  //   spaceBetween: -10,
  //   freeMode: true,

  // };

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onClick(){

    this.cargarMas.emit();
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
