import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, from } from "rxjs";
import { map, switchMap, catchError } from 'rxjs/operators'
import { CardService } from "../card.service";
import { getFilteredArticles } from "../getFilteredArticles";
import { filterArticles, loadArticles, loadArticlesFailure, loadArticlesSuccess } from "./article.actions";

@Injectable()
export class ArticleEffects {
    loadArticles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadArticles),
            switchMap(() =>
                from(this.cardService.getCardInfo()).pipe(
                    map(articles => loadArticlesSuccess({ articles: articles })),
                    catchError(error => of(loadArticlesFailure({ error })))
                )
            )
        )
    )

    filterArticles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(filterArticles),
            switchMap((keywords) =>
                from(this.cardService.getFilteredCardInfo(keywords.keywords)).pipe(
                    map(articles => loadArticlesSuccess({ articles: articles })),
                    catchError(error => of(loadArticlesFailure({ error })))
                )
            )
        )
    )





    constructor(
        private actions$: Actions,
        private cardService: CardService,
    ) { }
}