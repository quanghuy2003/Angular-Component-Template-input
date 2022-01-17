import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BirthdayComponent } from './birthday/birthday.component';
import {ArticleComponent} from "./article/article.component";
import {LikeComponent} from "./like/like.component";
import {FormsModule} from "@angular/forms";
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BirthdayComponent,
    ArticleComponent,
    LikeComponent,
    NameCardComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
