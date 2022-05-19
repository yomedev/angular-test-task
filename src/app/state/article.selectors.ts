import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { ArticleState } from "./filter.reducer";

export const selectArticles = (state: AppState) => state.articles;

export const selectAllArticles = createSelector(
    selectArticles,
    (state: ArticleState) => state.articles
)
