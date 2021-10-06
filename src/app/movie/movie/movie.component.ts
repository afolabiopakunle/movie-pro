import {Component, Input, OnInit} from '@angular/core';
import {MovieModel} from '../Models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieModel;

  constructor() { }

  ngOnInit(): void {
  }

}
