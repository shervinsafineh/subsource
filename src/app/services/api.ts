import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Secrets } from '../other/secrets';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://api.subsource.net/api/v1';
  authString = `X-API-Key: ${Secrets.apiKey}`;
}
