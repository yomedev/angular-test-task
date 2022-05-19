import { createAction, props } from '@ngrx/store';
import { CardInfo } from '../cardInfo';

export const filterArticles = createAction(
    '[Filter Field] Filter Articles',
    props<{ keywords: string }>()
);

export const loadArticles = createAction('[Card List] Load Articles');

export const loadArticlesSuccess = createAction('[Article API] Article Load Success', props<{articles: CardInfo[]}>());

export const loadArticlesFailure = createAction('[Article API] Article Load Failure', props<{error: string}>());