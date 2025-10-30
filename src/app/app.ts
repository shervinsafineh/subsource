import { Component } from '@angular/core';
import { Api } from './services/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  constructor(private apiService: Api) {}

  logoData =
    'data:image/webp;base64,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';

  searchType = 'title';
  titleSearchOptions = [
    { label: 'Title', value: 'text' },
    { label: 'IMDb ID/Link', value: 'imdb' },
  ];
  titleSearchType = 'text';
  titleSearchQuery = '';
  titleYear: number | null = null;
  titleTypeOptions = [
    { label: 'All', value: 'all' },
    { label: 'Movie', value: 'movie' },
    { label: 'Series', value: 'series' },
  ];
  titleType = 'all';
  seasonNumber: number | null = null;

  searchByTitle() {
    if (this.titleSearchType === 'text') {
      this.apiService
        .searchTitle(
          this.titleSearchType,
          this.titleSearchQuery,
          undefined,
          this.titleYear ? this.titleYear : undefined,
          this.titleType !== 'all' ? this.titleType : undefined,
          this.titleType !== 'movie'
            ? this.seasonNumber
              ? this.seasonNumber
              : undefined
            : undefined
        )
        .subscribe((response) => {
          console.log(response);
        });
    } else {
      this.apiService
        .searchTitle(this.titleSearchType, undefined, this.titleSearchQuery)
        .subscribe((response) => {
          console.log(response);
        });
    }
  }

  resetSearchByTitle() {
    this.titleSearchType = 'text';
    this.titleSearchQuery = '';
    this.titleYear = null;
    this.titleType = 'all';
    this.seasonNumber = null;
  }

  searchByTitleChanged() {
    return (
      this.titleSearchType !== 'text' ||
      this.titleSearchQuery !== '' ||
      this.titleYear !== null ||
      this.titleType !== 'all' ||
      this.seasonNumber !== null
    );
  }
}
