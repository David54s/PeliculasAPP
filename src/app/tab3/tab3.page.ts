import { Component, OnInit } from '@angular/core';
import { Genre, Pelicula, PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocal } from '../services/data-local';
import { Movies } from '../services/movies';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { ModalController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements ViewWillEnter{

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];

  constructor(private dataLocal: DataLocal,
              private moviesService: Movies,
              private modalController: ModalController
  ) {}

  async ionViewWillEnter(){
    this.peliculas = await this.dataLocal.cargarFavoritos()

  }


  async detalle(id: number){

      const modal = await this.modalController.create({
        component: DetalleComponent,
        componentProps: {
          id
        }
      });
      await modal.present();
      await modal.onDidDismiss();
      this.peliculas = await this.dataLocal.cargarFavoritos();
    }


}
