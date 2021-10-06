import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: ':id', component: MovieDetailComponent}
  ];

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent, MovieComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MovieModule { }
