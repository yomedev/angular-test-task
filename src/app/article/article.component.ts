import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardInfo } from '../cardInfo';
import { CardService } from '../card.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articleInfo: CardInfo | undefined;

  constructor(private route: ActivatedRoute, private cardService: CardService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const articleIdFromRoute = Number(routeParams.get('articleId'));
    
    this.cardService.getCardInfo().subscribe(cardInfo => this.articleInfo  = cardInfo.find(article => article.id === articleIdFromRoute));    
  }

}
