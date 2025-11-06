import { Component } from '@angular/core';
import { Movies } from '../services/movies';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {


  textoBuscar = '';
  ideas: string[] = ['Spiderman', 'Godzilla', 'SuperMan', 'Saw', 'Chaninsaw'];
  peliculas: Pelicula[]= [];

  buscando = false;

  constructor(private moviesService: Movies,
              private modalController: ModalController
  ) {}


  buscar(event: any) {
    const valor = event.detail.value;
    this.buscando = true

    // console.log(valor);
    this.moviesService.buscarPeliculas(valor)
      .subscribe( resp => {
        console.log(resp);
        this.peliculas = resp.results;
        this.buscando = false;
      });
  }

  async detalle(id: number){

    const modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }
}
