import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Post} from "../models/post";
import {environment} from "../../../environments/environment";

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;


@Injectable({
  providedIn: 'root'
})
export class NewsHttpService {
  constructor(private http: HttpClient) {
  }

  public getArticles(page: number = 1, category: string) {

    if (category === "headline") return this.getHeadlines(page)

    return this.getPosts(page, category);

  }

  public getPosts(page: number = 1, category: string): Observable<Post> {
    const pageSize: number = 12;
    const URI = API_URL + "/everything";
    const params = new HttpParams()
      .set('q', category)
      .set('sortBy', 'popularity')
      .set('pageSize', '12')
      .set('page', page)
      .set('apiKey', API_KEY);

    return this.http.get<Post>(URI, {params}).pipe(map(post => {
        return {
          ...post,
          totalResults: Math.ceil(post.totalResults / pageSize),
        }
      }
    ));;
  }

  public getHeadlines(page: number = 1): Observable<Post> {
    const pageSize: number = 12;
    const URI = API_URL + "/top-headlines";
    const params = new HttpParams()
      .set('country', 'ie')
      .set('sortBy', 'popularity')
      .set('pageSize', pageSize)
      .set('page', page)
      .set('apiKey', API_KEY);

    return this.http.get<Post>(URI, {params}).pipe(map(post => {
        return {
          ...post,
          totalResults: Math.ceil(post.totalResults / pageSize),
        }
      }
    ));
  }

}
