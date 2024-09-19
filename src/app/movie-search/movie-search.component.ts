import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet,ReactiveFormsModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})
export class MovieSearchComponent {
  movieTitle: string = '';
  movie: any;

  constructor(private movieService: MovieService) { }
/**
 *serch movide 
 */
  searchMovie(): void {
    if (this.movieTitle) {
      this.movieService.getMovieDetails(this.movieTitle)
        .subscribe(movie => this.movie = movie);
    }
  }
}
