import { Injectable } from '@angular/core';
import {MovieModel, movies} from '../Models/movie.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Observable<MovieModel[]> {
    return of(movies);
  }
}
