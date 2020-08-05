import { Project } from '../shared/project';

export const PROJECTS: Project[] = [
    {
        heading: `Pitch`,
        slug: `pitch`,
        tags: [
            {
                title: `Flask`,
                slug: `flask`
            }
        ],
        portfolioThumb: '/assets/img/portfolio/pitch.png',
        liveLink: `http://localhost:4200/`,
        createdAt: new Date(`Aug 28, 2020`),
        projectGallery: `/assets/img/portfolio/single/slider/01.jpg`,
        githubRepo: `https://github.com/{:owner}/{:repoName}`
    },
    {
        heading: `InstaClone`,
        slug: `instaclone`,
        tags: [
            {
                title: `Django`,
                slug: `django`
            }
        ],
        portfolioThumb: `/assets/img/portfolio/instaclone.png`,
        liveLink: `http://localhost:4200/`,
        createdAt: new Date(`Aug 30, 2020`),
        projectGallery: `/assets/img/portfolio/single/slider/02.jpg`,
        githubRepo: `https://github.com/{:owner}/{:repoName}`
    },
    {
        heading: `News-Highlights`,
        slug: `news-highlights`,
        tags: [
            {
                title: `Flask`,
                slug: `flask`
            }
        ],
        portfolioThumb: `/assets/img/portfolio/news-highlights.png`,
        liveLink: `http://localhost:4200/`,
        createdAt: new Date(`Sept 3, 2020`),
        projectGallery: `/assets/img/portfolio/single/slider/03.jpg`,
        githubRepo: `https://github.com/{:owner}/{:repoName}`
    },
    {
        heading: `Pig-Dice`,
        slug: `pig-dice`,
        tags: [
            {
                title: `Javascript`,
                slug: `javascript`
            },
            {
                title: `HTML`,
                slug: `hmtl`
            },
            {
                title: `CSS`,
                slug: `css`
            },
            {
                title: `Bootstrap`,
                slug: `bootstrap`
            }],
        portfolioThumb: `/assets/img/portfolio/pig-dice.png`,
        liveLink: `http://localhost:4200/`,
        createdAt: new Date(`Sept 6, 2020`),
        projectGallery: `/assets/img/portfolio/single/slider/04.jpg`,
        githubRepo: `https://github.com/{:owner}/{:repoName}`
    },
    {
        heading: `Quotes`,
        slug: `quotes`,
        tags: [
            {
                title: `Angular`,
                slug: `angular`
            }
        ],
        portfolioThumb: `/assets/img/portfolio/quotes.png`,
        liveLink: `http://localhost:4200/`,
        createdAt: new Date(`Sept 9, 2020`),
        projectGallery: `/assets/img/portfolio/single/slider/05.jpg`,
        githubRepo: `https://github.com/{:owner}/{:repoName}`
    },
    {
        heading: `Quiz-Board`,
        slug: `quiz-board`,
        tags: [
            {
                title: `JavaScript`,
                slug: `javascript`
            },
            {
                title: `HTML`,
                slug: `html`
            },
            {
                title: `CSS`,
                slug: `css`
            }],
        portfolioThumb: `/assets/img/portfolio/quiz-board.png`,
        liveLink: `http://localhost:4200/`,
        createdAt: new Date(`Sept 13, 2020`),
        projectGallery: `/assets/img/portfolio/single/slider/01.jpg`,
        githubRepo: `https://github.com/{:owner}/{:repoName}`
    }
]