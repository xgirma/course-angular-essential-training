import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, MediaItemComponent, MediaItemListComponent, FavoriteDirective, CategoryListPipe, MediaItemFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
