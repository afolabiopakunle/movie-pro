import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {ActivatedRoute} from '@angular/router';
import {MovieModel} from '../Models/movie.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id: number;
  movie: MovieModel;
  movieSub$: Subscription;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieSub$ = this.movieService.movie(this.id)
      .subscribe(movie => {
        this.movie = movie
        console.log(movie);
      })
  }

  ngOnDestroy(): void {
    this.movieSub$.unsubscribe();
  }

}
