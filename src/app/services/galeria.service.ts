import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  


  activarModoNoche(modoNocheActivo:boolean) {

    if (modoNocheActivo) {
      return false;
    }
    return true;

  }

}
