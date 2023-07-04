import {Component, OnInit} from '@angular/core';
import {FavouritesService} from "../shared/news/services/favourites.service";
import {Article} from "../shared/news/models/business";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
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
