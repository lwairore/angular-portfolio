export interface Project {
    heading: string;
    tags: {title: string, slug: string}[];
    slug: string;
    portfolioThumb: string;
    liveLink: string;
    createdAt: Date;
}
