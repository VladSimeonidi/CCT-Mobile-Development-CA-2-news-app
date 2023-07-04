import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Business} from "../models/business";
import {environment} from "../../../../../environments/environment";

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;


@Injectable({
  providedIn: 'root'
})
export class NewsHttpService {
  constructor(private http: HttpClient) {
  }

  public getBusinessArticles(page: number = 1, category: string): Observable<Business> {
    const params = new HttpParams()
      .set('q', category)
      .set('sortBy', 'popularity')
      .set('pageSize', '12')
      .set('page', page)
      .set('apiKey', API_KEY);

    return this.http.get<Business>(API_URL, {params});
  }
}
