import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { CatComponent } from './components/cat.component';
import { PeopleComponent } from './components/people.component';
import { FilmComponent } from './components/film.component';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from './components/table.component';
import { MatTableModule } from '@angular/material/table';

const appRoutes: Routes = [
//  { path: '', component: HomeComponent },
  { path: '', component: PeopleComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'film/:pId', component: FilmComponent },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableComponent },
  { path: 'cats', component: CatComponent },
  { path: 'cats/:catId', component: CatComponent },
//  { path: 'dog', component: DogComponent },
  { path: "**", redirectTo: '/', pathMatch: 'full' },

  ];
  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatComponent,
    PeopleComponent,
    FilmComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes), //When loading RouterModule, need to define the all the routes in the current application
    MatListModule, BrowserAnimationsModule, MatCardModule, MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
