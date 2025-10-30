import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Secrets } from '../other/secrets';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://api.subsource.net/api/v1';
  headers = new HttpHeaders({ 'X-API-Key': Secrets.apiKey });

  searchTitle(
    searchType: string,
    q?: string,
    imdb?: string,
    year?: number,
    type?: string,
    season?: number
  ) {
    let url = `${this.baseUrl}/movies/search?searchType=${searchType}`;
    if (q) url += `&q=${q}`;
    if (imdb) url += `&imdb=${imdb}`;
    if (year) url += `&year=${year}`;
    if (type) url += `&type=${type}`;
    if (season) url += `&season=${season}`;
    return this.http.get(url, { headers: this.headers });
  }

  getTitleById(id: number) {
    const url = `${this.baseUrl}/movies/${id}`;
    return this.http.get(url, { headers: this.headers });
  }

  getSubtitles(
    movieId?: number,
    language?: string,
    productionType?: string,
    releaseType?: string,
    releaseInfo?: string,
    uploader?: number,
    hearingImpaired?: boolean,
    foreignParts?: boolean,
    framerate?: string,
    page?: number,
    limit?: number,
    sort?: string
  ) {
    const params: { [key: string]: any } = {};
    if (movieId) params['movieId'] = movieId;
    if (language) params['language'] = language;
    if (productionType) params['productionType'] = productionType;
    if (releaseType) params['releaseType'] = releaseType;
    if (releaseInfo) params['releaseInfo'] = releaseInfo;
    if (uploader) params['uploader'] = uploader;
    if (hearingImpaired !== undefined) params['hearingImpaired'] = hearingImpaired;
    if (foreignParts !== undefined) params['foreignParts'] = foreignParts;
    if (framerate) params['framerate'] = framerate;
    if (page) params['page'] = page;
    if (limit) params['limit'] = limit;
    if (sort) params['sort'] = sort;

    const query = Object.keys(params)
      .map((k) => `${k}=${params[k]}`)
      .join('&');
    const url =
      query.length > 0 ? `${this.baseUrl}/subtitles?${query}` : `${this.baseUrl}/subtitles`;

    return this.http.get(url, { headers: this.headers });
  }

  getSubtitlesById(id: number) {
    const url = `${this.baseUrl}/subtitles/${id}`;
    return this.http.get(url, { headers: this.headers });
  }

  downloadSubtitle(id: number) {
    const url = `${this.baseUrl}/subtitles/${id}/download`;
    return this.http.get(url, {
      headers: this.headers,
      responseType: 'blob',
    });
  }

  searchUsers(search: string, page?: number, limit?: number) {
    let url = `${this.baseUrl}/users/search?search=${search}`;
    if (page) url += `&page=${page}`;
    if (limit) url += `&limit=${limit}`;
    return this.http.get(url, { headers: this.headers });
  }

  getUserById(id: number) {
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.get(url, { headers: this.headers });
  }

  getSubtitlesByUserId(
    id: number,
    page?: number,
    limit?: number,
    sort?: string,
    movieId?: number,
    language?: string,
    releaseType?: string,
    productionType?: string,
    hearingImpaired?: boolean,
    foreignParts?: boolean,
    framerate?: string
  ) {
    const params: { [key: string]: any } = {};
    if (page) params['page'] = page;
    if (limit) params['limit'] = limit;
    if (sort) params['sort'] = sort;
    if (movieId) params['movieId'] = movieId;
    if (language) params['language'] = language;
    if (releaseType) params['releaseType'] = releaseType;
    if (productionType) params['productionType'] = productionType;
    if (hearingImpaired !== undefined) params['hearingImpaired'] = hearingImpaired;
    if (foreignParts !== undefined) params['foreignParts'] = foreignParts;
    if (framerate) params['framerate'] = framerate;
    const query = Object.keys(params)
      .map((k) => `${k}=${params[k]}`)
      .join('&');
    const url =
      query.length > 0
        ? `${this.baseUrl}/users/${id}/subtitles?${query}`
        : `${this.baseUrl}/users/${id}/subtitles`;
    return this.http.get(url, { headers: this.headers });
  }
}
