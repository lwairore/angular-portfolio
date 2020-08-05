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
        liveLink: `http://localhost:4200/`
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
        liveLink: `http://localhost:4200/`
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
        liveLink: `http://localhost:4200/`
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
        liveLink: `http://localhost:4200/`
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
        liveLink: `http://localhost:4200/`
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
        liveLink: `http://localhost:4200/`
    }
]