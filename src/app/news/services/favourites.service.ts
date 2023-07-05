import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Article} from "../models/post";

const STORAGE_KEY: string = 'favouriteNews';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private storage: Storage) {
    this.init();
  }

  public init() {
    this.storage.create();
  }

  public clear() {
    this.storage.clear();
  }

  public getAllFavorites(): Promise<Partial<Article>[]> {
    return this.storage.get(STORAGE_KEY)
  }

  async isFavourite(title: string) {
    return this.getAllFavorites().then(result => {
      return result && !!result.find(post => post.title == title);
    });
  }


  favoritePost(object: Partial<Article>) {
    return this.getAllFavorites().then(result => {
      if (result) {
        result.push(object);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [object]);
      }
    });
  }

  unfavouritePost(object: Partial<Article>) {
    return this.getAllFavorites().then(result => {
      if (result) {
        const foundPost = result.find(post => post.title == object.title);
        if (foundPost) {
          const index = result.indexOf(foundPost);
          result.splice(index, 1);
          return this.storage.set(STORAGE_KEY, result);
        } else {
          return undefined
        }
      } else {
        return null
      }
    });

  }
}
