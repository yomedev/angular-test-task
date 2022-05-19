import { CardInfo } from "./cardInfo";


export function getFilteredArticles(articles: CardInfo[], filterWords: string): CardInfo[] {
    if (!filterWords) return  [...articles];
    const filterWordSet = new Set();
    articles.forEach(article => {
        if (isContaineKeywords(article.title, filterWords))
            filterWordSet.add(article.id);
    })
    articles.forEach(article => {
        if (isContaineKeywords(article.summary.slice(0, 100), filterWords))
            filterWordSet.add(article.id);
    })

    const filteredArticles: any[] = [];
    filterWordSet.forEach(id => {
        filteredArticles.push(articles.find(article => article.id === id));
    })

    return filteredArticles;
}

function getHighlightedText(filterWords: string, content: string) {
    const filterWordsArray = filterWords.split(' ');
    const filterWordRegEx = new RegExp(`${filterWordsArray.join('|')}`, 'gi');
    return content.replace(filterWordRegEx, regEx => `<span style="background-color: yellow">${regEx}</span>`);
  }

function isContaineKeywords(text: string, keywords: string): boolean {
    keywords = keywords.toLocaleLowerCase();
    const keywordsArray = keywords.split(' ');
    let isContain = false;
    keywordsArray.forEach(keyword => {
        if (!isContain && keyword)
            isContain = text.toLocaleLowerCase().includes(keyword);
    })
    return isContain;
}