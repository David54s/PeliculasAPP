import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { Movies } from 'src/app/services/movies';
import { DataLocal } from 'src/app/services/data-local';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  standalone: false
})
export class DetalleComponent  implements OnInit {

  @Input() id: any;

  pelicula: PeliculaDetalle = {};

  actores: Cast[] = [];
  verMas: number = 150;

  alternar = 'bookmark-outline'

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebeetween: -5
  }


  constructor( private moviesService: Movies,
               private modalController: ModalController,
               private dataLocal: DataLocal
  ) { }

  ngOnInit() {


   this.dataLocal.existePelicula(this.id)
    .then(existe => this.alternar = (existe) ? 'bookmark': 'bookmark-outline');

    this.moviesService.getPeliculaDetalle(this.id)
      .subscribe( resp => {
        console.log(resp)
        this.pelicula = resp;
      });


    this.moviesService.getActoresPelicula(this.id)
      .subscribe( resp => {
        console.log(resp)
        this.actores = resp.cast
      });
  }


  cerrar(){
    this.modalController.dismiss();
  }

  favorito(){
    const existe = this.dataLocal.guardarPelicula(this.pelicula)
       this.alternar = (existe) ? 'bookmark': 'bookmark-outline';


  }


}
