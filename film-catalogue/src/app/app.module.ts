import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FilmService } from './film.service';
import { FilmsComponent } from './films/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { CollectionService } from './collection.service';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailComponent,
    DashboardComponent,
    CollectionDetailComponent,
    NewCollectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    FilmService,
    CollectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
