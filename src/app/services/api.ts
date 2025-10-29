import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Secrets } from '../other/secrets';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}

  apiKey = Secrets.apiKey;
}
