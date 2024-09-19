import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _apiKey = 'b44f1fef';
  private _apiUrl = `https://www.omdbapi.com/?apikey=${this._apiKey}&t=`;

  constructor(private _http: HttpClient) { }


  /** 
   * get movie details
   * 
   * @param title 
   * @returns 
   */
  getMovieDetails(title: string): Observable<any> {
    return this._http.get<any>(`${this._apiUrl}${title}`);
  }

}
