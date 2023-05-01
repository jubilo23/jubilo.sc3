import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-predicas',
  templateUrl: './predicas.component.html',
  styleUrls: ['./predicas.component.css']
})
export class PredicasComponent implements OnInit {

  id = 's5KjE69sfhU';
  id2 = 'XGUokl7YjCk';
  id3 = 'HhMvNKTZ8bA';
  id4 = 'n3UG69mPZQE';
  id5 = 'lpUZKzgjyKY';
  id6 = 'elXyv4nBADU';
  
  player: any; 

  savePlayer(player: any) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event: any) {
    console.log('player state', event.data);
  }

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {

    
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
  

}
