import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadArticles, filterArticles } from '../state/article.actions'
import { selectAllArticles } from '../state/article.selectors';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  allArticles$ = this.store.select(selectAllArticles);

  keywords: string = '';

  addNewKeyword() {    
    console.log(this.keywords);
    
    this.store.dispatch(filterArticles({keywords: this.keywords}));
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadArticles());
  }
}
