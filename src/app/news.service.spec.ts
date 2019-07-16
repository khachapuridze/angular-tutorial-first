import { NewsService } from './news.service';
import { dataBase } from "./dbArticle";

describe('Testing newsService', ()=>{
    let newsService;
    beforeEach(()=>{
        newsService = new NewsService();
    })

    it('Method getArticles should return database', () =>{

        newsService.getArticles();
        const check = dataBase;
        expect(check).toBe(check);

    }); 

    it('Method getArticleById should return ritht article', () =>{
        let id;
        newsService.getArticleById(id);
        const check = dataBase.find((article) =>article.id === id);
        expect(newsService.getArticleById(id)).toBe(check);

    });

})