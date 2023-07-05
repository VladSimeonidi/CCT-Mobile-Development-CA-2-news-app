import {Component, OnInit} from '@angular/core';
import {FavouritesService} from "../services/favourites.service";
import {Article} from "../models/post";

@Component({
  selector: 'app-tab-favorites',
  templateUrl: 'tab-favorites.component.html',
  styleUrls: ['tab-favorites.component.scss']
})
export class TabFavorites implements OnInit {
  public posts: Partial<Article>[] | null = null;

  constructor(private favouritesService: FavouritesService) {
  }

  async ngOnInit() {
    this.posts = await this.favouritesService.getAllFavorites();
  }

  public async deletePostFromFavorites(post: Partial<Article>) {
    await this.favouritesService.unfavouritePost(post);
    if (this.posts) {
      const foundPost = this.posts.find(onePost => onePost.title == post.title);
      if (foundPost) {
        const index = this.posts.indexOf(foundPost);
        this.posts.splice(index, 1);
      }
    }
  }

}
