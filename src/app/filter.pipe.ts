import { Pipe, PipeTransform } from '@angular/core';
import { CardInfo } from './cardInfo';

@Pipe({ name: 'articleFilter' })
export class FilterPipe implements PipeTransform {
    transform(articles: CardInfo[], filterWords: string) {
        if (!articles) {
            return [];
        }
        if (!filterWords) {
            return articles;
        }

        return this.getFilteredArticles(articles, filterWords);
    }

    isContaineKeywords(text: string, keywords: string) {
        keywords = keywords.toLocaleLowerCase();
        const keywordsArray = keywords.split(' ');
        let isContain = false;
        keywordsArray.forEach(keyword => {
            if (!isContain && keyword)
                isContain = text.toLocaleLowerCase().includes(keyword);
        })
        return isContain;
    }

    getFilteredArticles(articles: CardInfo[], filterWords: string) {
        const filterWordSet = new Set();
        articles.forEach(article => {
            if (this.isContaineKeywords(article.title, filterWords))
                filterWordSet.add(article.id);
        })
        articles.forEach(article => {
            if (this.isContaineKeywords(article.summary.slice(0, 100), filterWords))
                filterWordSet.add(article.id);
        })

        const filteredArticles: any[] = [];
        filterWordSet.forEach(id => {
            filteredArticles.push(articles.find(article => article.id === id));
        })

        return filteredArticles;
    }
}