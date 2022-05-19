import { createReducer, on } from "@ngrx/store";
import { CardInfo } from "../cardInfo";
import { filterArticles, loadArticles, loadArticlesFailure, loadArticlesSuccess } from "./article.actions";

export interface ArticleState {
    articles: CardInfo[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ArticleState = {
    articles: [],
    error: '',
    status: 'pending'
};


export const filterReducer = createReducer(
    initialState,
    on(filterArticles, (state, {keywords}) => ({
        ...state,
        keywords: keywords,
    })),
    on(loadArticles, (state) => ({...state, status: 'loading'})),
    on(loadArticlesSuccess, (state, {articles}) => ({
        ...state,
        articles: articles,
        originalArticles: articles,
        error: '',
        status: 'success'

    })),
    on(loadArticlesFailure, (state, {error}) => ({...state, error:error, status: 'error'}))
);