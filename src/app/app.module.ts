import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BirthdayComponent } from './birthday/birthday.component';
import {ArticleComponent} from "./article/article.component";
import {LikeComponent} from "./like/like.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FormComponent } from './form/form.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { TodoComponent } from './todo/todo.component';
import { RegistrationComponent } from './registration/registration.component';
import { TimelinesComponent } from './timelines/timelines.component';

@NgModule({
  declarations: [
    AppComponent,
    BirthdayComponent,
    ArticleComponent,
    LikeComponent,
    NameCardComponent,
    ProgressBarComponent,
    FormComponent,
    ProductComponent,
    StudentComponent,
    TodoComponent,
    RegistrationComponent,
    TimelinesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
