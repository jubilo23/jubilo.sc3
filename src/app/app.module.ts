import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenaComponent } from './components/sidena/sidena.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {LayoutModule} from '@angular/cdk/layout';
import { FooterComponent } from './components/footer/footer.component';
import { CultosComponent } from './components/cultos/cultos.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventComponent } from './components/event/event.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { PredicasComponent } from './components/predicas/predicas.component';
import { CultmenComponent } from './components/cultmen/cultmen.component';
import { CultwomanComponent } from './components/cultwoman/cultwoman.component';
import { BautizosComponent } from './components/bautizos/bautizos.component';
import { YoungComponent } from './components/young/young.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, 
  { path: 'cultos', component: CultosComponent }, 
  { path: 'predicas', component: PredicasComponent }, 
  { path: 'cultmen', component: CultmenComponent }, 
  { path: 'cultwoman', component: CultwomanComponent },
  { path: 'baptism', component: BautizosComponent },
  { path: 'young', component: YoungComponent },
  { path: 'event', component: EventComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    SidenaComponent,
    FooterComponent,
    CultosComponent,
    HomeComponent,
    EventComponent,
    PredicasComponent,
    CultmenComponent,
    CultwomanComponent,
    BautizosComponent,
    YoungComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    LayoutModule,
    NgxYoutubePlayerModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
