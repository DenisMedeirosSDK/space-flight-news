import { populateArticles } from './popupale-articles';
import { populateArticlesYesterday } from './get-articles-yesterday';

export function startJob() {
  populateArticles;
  populateArticlesYesterday;
}
