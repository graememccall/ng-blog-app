import { Article } from "./article"

export const ARTICLES: Article[] = [ { 
        id: 1, 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
        date: new Date(), 
        description: 'This is the first article', 
        imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png', 
        key: 'first-article', 
        title: 'First article'
    },{
        id: 2, 
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 
        date: new Date(), 
        description: 'This is the second article', 
        imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png', 
        key: 'second-article', 
        title: 'Second article'
    },{
        id: 3, 
        content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.', 
        date: new Date(), 
        description: 'This is the third article', 
        imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png', 
        key: 'third-article', 
        title: 'Third article'
    }
];
