import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MdcCheckboxModule, MdcFormFieldModule, MdcListModule } from '@angular-mdc/web';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { FilmService } from './film.service';
import { FilmsComponent } from './films/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { CollectionService } from './collection.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailComponent,
    DashboardComponent,
    CollectionDetailComponent,
    NewCollectionComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MdcCheckboxModule,
    MdcFormFieldModule,
    MdcListModule,
    AppRoutingModule
  ],
  providers: [
    FilmService,
    CollectionService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
