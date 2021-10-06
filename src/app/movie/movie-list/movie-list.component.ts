import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Observable} from 'rxjs';
import {MovieModel} from '../Models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$: Observable<MovieModel[]>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies();
  }

}
