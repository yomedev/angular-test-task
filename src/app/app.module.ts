import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardArticleComponent } from './card-article/card-article.component';
import { CardListComponent } from './card-list/card-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleComponent } from './article/article.component';
import { MainComponent } from './main/main.component';
import { FilterPipe } from './filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { StoreModule } from '@ngrx/store';
import { filterReducer } from './state/filter.reducer';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider'
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './state/article.effects';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CardArticleComponent,
    CardListComponent,
    ArticleComponent,
    MainComponent,
    FilterPipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    AppRoutingModule,
    MatCardModule,
    MatDividerModule,

    StoreModule.forRoot({ articles: filterReducer }),
    EffectsModule.forRoot([ArticleEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
