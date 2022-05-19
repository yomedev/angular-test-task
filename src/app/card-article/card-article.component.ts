import { Component, OnInit, Input } from '@angular/core';
import { CardInfo } from '../cardInfo';


@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss']
})
export class CardArticleComponent implements OnInit {

  @Input() articleInfo: CardInfo = {
    id: 0,
    imageUrl: '',
    updatedAt: '',
    title: '',
    summary: '',
  };
  @Input() filterKeywords: string = '';

  constructor() { 
  }

  ngOnInit(): void {
    
  }

}
