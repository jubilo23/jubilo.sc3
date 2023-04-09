import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predicas',
  templateUrl: './predicas.component.html',
  styleUrls: ['./predicas.component.css']
})
export class PredicasComponent implements OnInit {

  id = 'NGasEvuwqmk';
  id2 = 'pY0LgpXhE4k';
  id3 = 'elXyv4nBADU';
  id4 = '6JqsFAhN574';
  id5 = 'i0i8RHM-O14';
  id6 = '60C6-kH-p-Y';
  player: any; 

  savePlayer(player: any) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event: any) {
    console.log('player state', event.data);
  }

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
  

}
