import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../../services/galeria.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [GaleriaService],
})
export class FooterComponent{

}
