export class News {
    articles!: Article[];
    totalResults!: number;
    status!: string;
}
 
export class Article {
    author!: string;
    content!: string;
    description!: string;
    url!: string;
    publishedAt!: Date;
    title!: string;
    urlToImage?: string;
    source!: { id: string, name: string };
}