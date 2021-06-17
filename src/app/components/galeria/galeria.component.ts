import { Component } from '@angular/core';
import { Imagen } from '../../models/imagen';
import galeria from '../../../assets/imagenes.json';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  imagenes: Imagen[] = galeria;
  

  
  rotate(imagen:Imagen) {
    var img = document.getElementById(imagen._id);
    
    if (!imagen.canRotate) {
      img.setAttribute("class", "card rotateImg");
      imagen.canRotate = true;
      return;
    }
    imagen.canRotate = false;
    img.setAttribute("class", "card rotateImg2");
    
  }

}
