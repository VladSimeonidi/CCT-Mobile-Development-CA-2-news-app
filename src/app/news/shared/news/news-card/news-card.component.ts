import {Component, Input, OnInit} from '@angular/core';
import {FavouritesService} from "../services/favourites.service";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() public title: string = "";
  @Input() public imageUrl: string = "";
  @Input() public author: string = "";
  @Input() public description: string = "";
  @Input() public goto: string = "";
  public isFavorite: boolean = false;

  constructor(private favouritesService: FavouritesService) {
  }

  async ngOnInit() {
    // this.favouritesService.clear()
    const res = await this.favouritesService.getAllFavorites()
    console.log(res)
    this.isFavorite = await this.favouritesService.isFavourite(this.title);
    // console.log(this.title)
    // console.log(res2)
  }

  goToLink() {
    window.open(this.goto, '_blank');
  }

  async clickFavorites() {
    const object = {title: this.title, description: this.description, url: this.goto}

    if (!this.isFavorite) {
      console.log("12345")
      await this.favouritesService.favoritePost(object);
      this.isFavorite = true;
    } else {
      await this.favouritesService.unfavouritePost(object)
      this.isFavorite = false;
    }
  }
}
