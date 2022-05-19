import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterArticles } from '../state/article.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  keywords: string = '';

  addNewKeyword() {    
    console.log(this.keywords);
    
    this.store.dispatch(filterArticles({keywords: this.keywords}));
  }


  
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
