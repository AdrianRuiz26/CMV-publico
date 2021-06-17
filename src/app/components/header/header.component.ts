import { Component, OnInit } from '@angular/core';
import { GaleriaService } from 'src/app/services/galeria.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [GaleriaService],
})
export class HeaderComponent{

 /* modoNocheActivo: boolean = false;

  activarModoNoche(){
    this.galeriaService.activarModoNoche(this.modoNocheActivo);
  }

  modoNocheActivo: boolean;


  activarModoNoche() {

    if (this.modoNocheActivo) {
      this.modoNocheActivo = false;
      return ;
    }
    this.modoNocheActivo = true;
  }*/

}
