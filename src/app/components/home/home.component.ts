import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cronicas7: any;
  mision: any;
  vision: any;

  constructor() {
    this.cronicas7 = "Si se humillare mi pueblo, sobre el cual mi nombre es invocado, "+ 
      "y oraren, y buscaren mi rostro, y se convirtieren de sus malos caminos; entonces yo oiré "+
      "desde los cielos, y perdonaré sus pecados, y sanaré su tierra.";

      this.mision = "La misión de la Iglesia Evangelica Cristiana Pentecostes Júbilo y Adoración, es buscar como primer punto fundamental, el reino de Dios y su Justicia en nuestras vidas, para posteriormente predicar el evangelio de nuestro Señor Jesucristo para ganar el mayor número de almas para la gloria de Dios.";

      this.vision = "La visión de la Iglesia Evangelica Cristiana Pentecostes Júbilo y Adoración, es la predicación del Evangelio de Jesucristo, asi como una iglesia solida y fundamentada en los principios de la palabra de Dios. Una Iglesia que promueva valores y principios Cristianos con su testimonio. ";
   }

  ngOnInit(): void {
    
  }

 


}
