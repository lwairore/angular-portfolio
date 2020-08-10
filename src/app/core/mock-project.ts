import { Project } from '../shared/project';

export const PROJECTS: Project[] = [
    {
        heading: `Flask News Highlights`,
        slug: `flask-news-highlights`,
        tags: [
            {
                title: `Flask`,
                slug: `flask`,
                resourceURL: `https://en.wikipedia.org/wiki/Flask_(web_framework)`,
                description: `Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.`
            }
        ],
        portfolioThumb: `/assets/img/portfolio/news-highlights.png`,
        liveLink: `https://giko.herokuapp.com/`,
        createdAt: new Date(`Sept 3, 2020`),
        projectGallery: `/assets/img/portfolio/single/slider/03.jpg`,
        githubRepo: `https://github.com/lwairore/flask-news-highlight`,
        objective: `<ol>
        <li>Project should contain two models, one for the news source and one for the news article.</li>
        <li>Project must use views and routes.</li>
        <li>Project should consume the News API.</li>
        <li>Project must contain request(s) to the News API.</li>
        <li>Project should follow the proper folder structure.</li>
        <li>Application should be deployed to Heroku.</li>
        </ol>`,
        collaborators: [
            {
                fullName: `Karangu Lucas Wairore`,
                githubProfile: `https://github.com/lwairore`,
                githubUsername: `lwairore`,
                avatarURL: `/assets/img/me.png`
            }
        ],
        description: `Lacus vestibulum sed arcu non odio euismod. Massa eget egestas purus viverra. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Ut lectus arcu bibendum at. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. 

        Lacinia quis vel eros donec ac odio. Sit amet tellus cras adipiscing enim eu turpis. Diam in arcu cursus euismod quis. Urna condimentum mattis pellentesque id nibh. Maecenas pharetra convallis posuere morbi leo. Facilisis leo vel fringilla est. Orci nulla pellentesque dignissim enim. Nulla facilisi cras fermentum odio eu. 
        
        Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Senectus et netus et malesuada fames ac turpis. Ultrices neque ornare aenean euismod elementum nisi quis. Feugiat pretium nibh ipsum consequat nisl vel pretium. Nec ultrices dui sapien eget mi proin sed libero. Lacus sed viverra tellus in hac.`,
        userStories: [
            `Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer.`,
            `Pulvinar mattis nunc sed blandit libero volutpat sed.`,
            `Sed augue lacus viverra vitae congue eu consequat ac.`,
            `Felis bibendum ut tristique et egestas quis.`
        ]
    },
    {
        heading: `Pig-Dice`,
        slug: `pig-dice`,
        tags: [
            {
                title: `Javascript`,
                slug: `javascript`,
                resourceURL: `https://en.wikipedia.org/wiki/JavaScript`,
                description: `JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. `
            },
            {
                title: `HTML`,
                slug: `hmtl`,
                resourceURL: `https://en.wikipedia.org/wiki/HTML`,
                description: `Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.`
            },
            {
                title: `CSS`,
                slug: `css`,
                resourceURL: `https://en.wikipedia.org/wiki/Cascading_Style_Sheets/`,
                description: `Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.`
            },
            {
                title: `Bootstrap`,
                slug: `bootstrap`,
                resourceURL: `https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)`,
                description: `Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.`
            }],
        portfolioThumb: `/assets/img/portfolio/pig-dice.png`,
        liveLink: `http://localhost:4200/`,
        createdAt: new Date(`Sept 6, 2020`),
        projectGallery: `/assets/img/portfolio/single/slider/04.jpg`,
        githubRepo: `https://github.com/{:owner}/{:repoName}`,
        objective: `The purpose of this Independent Project is to demonstrate your level of understanding of the various concepts that you have covered in the content throughout the week. Cras sed felis eget velit aliquet sagittis id consectetur purus. Orci eu lobortis elementum nibh tellus molestie nunc. Non quam lacus suspendisse faucibus interdum. Urna cursus eget nunc scelerisque. Tortor id aliquet lectus proin nibh nisl. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Quisque id diam vel quam elementum pulvinar etiam. Sed faucibus turpis in eu mi bibendum neque. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Risus nec feugiat in fermentum. Dis parturient montes nascetur ridiculus. Volutpat lacus laoreet non curabitur gravida arcu ac. Mattis aliquam faucibus purus in massa tempor nec feugiat. Ullamcorper dignissim cras tincidunt lobortis feugiat.`,
        collaborators: [
            {
                fullName: `Karangu Lucas Wairore`,
                githubProfile: `https://github.com/lwairore`,
                githubUsername: `lwairore`,
                avatarURL: `/assets/img/me.png`
            }
        ],
        description: `Sed risus ultricies tristique nulla. Maecenas accumsan lacus vel facilisis volutpat est velit. Faucibus purus in massa tempor nec feugiat. 

        Neque viverra justo nec ultrices dui sapien eget mi proin. Commodo elit at imperdiet dui accumsan sit. Egestas dui id ornare arcu odio ut sem. In pellentesque massa placerat duis ultricies lacus. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. 
        
        Vel facilisis volutpat est velit egestas. Pellentesque id nibh tortor id aliquet lectus proin. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Ultricies tristique nulla aliquet enim. Aliquam ultrices sagittis orci a scelerisque purus.`,
        userStories: [
            `Aliquet lectus proin nibh nisl condimentum id.`,
            `Id semper risus in hendrerit gravida.`,
            `Adipiscing at in tellus integer feugiat scelerisque varius morbi enim.`,
            `Ac placerat vestibulum lectus mauris ultrices eros in cursus.`
        ]
    },
    {
        heading: `Quotes`,
        slug: `quotes`,
        tags: [
            {
                title: `Angular`,
                slug: `angular`,
                resourceURL: `https://en.wikipedia.org/wiki/Angular_(web_framework)`,
                description: `Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. `
            }
        ],
        portfolioThumb: `/assets/img/portfolio/quotes.png`,
        liveLink: `http://localhost:4200/`,
        createdAt: new Date(`Sept 9, 2020`),
        projectGallery: `/assets/img/portfolio/single/slider/05.jpg`,
        githubRepo: `https://github.com/{:owner}/{:repoName}`,
        objective: `The purpose of this Independent Project is to demonstrate your level of understanding of the various concepts that you have covered in the content throughout the week. Varius vel pharetra vel turpis nunc. Vitae turpis massa sed elementum tempus egestas. Mauris cursus mattis molestie a. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Enim sed faucibus turpis in eu. Mi bibendum neque egestas congue quisque egestas diam in. Sed euismod nisi porta lorem mollis aliquam ut. Nunc faucibus a pellentesque sit amet. Sit amet consectetur adipiscing elit ut aliquam purus. Risus in hendrerit gravida rutrum. Arcu non sodales neque sodales ut. Nibh venenatis cras sed felis eget velit. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Purus viverra accumsan in nisl nisi scelerisque eu.`,
        collaborators: [
            {
                fullName: `Karangu Lucas Wairore`,
                githubProfile: `https://github.com/lwairore`,
                githubUsername: `lwairore`,
                avatarURL: `/assets/img/me.png`
            }
        ],
        description: `Et molestie ac feugiat sed lectus vestibulum mattis. Rhoncus dolor purus non enim praesent elementum facilisis. Ornare suspendisse sed nisi lacus sed viverra tellus in. 

        Egestas integer eget aliquet nibh praesent tristique. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Senectus et netus et malesuada. Non odio euismod lacinia at quis risus sed vulputate. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. In massa tempor nec feugiat nisl pretium fusce. 
        
        Donec massa sapien faucibus et molestie ac feugiat sed. Eros in cursus turpis massa tincidunt dui ut ornare. A cras semper auctor neque vitae tempus quam. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Eros donec ac odio tempor orci.`,
        userStories: [
            `Vitae aliquet nec ullamcorper sit amet risus nullam eget felis.`,
            `Quam pellentesque nec nam aliquam sem et tortor.`,
            `Laoreet id donec ultrices tincidunt arcu non sodales neque.`,
            `At volutpat diam ut venenatis tellus in.`
        ]
    },
    {
        heading: `Quiz-Board`,
        slug: `quiz-board`,
        tags: [
            {
                title: `Javascript`,
                slug: `javascript`,
                resourceURL: `https://en.wikipedia.org/wiki/JavaScript`,
                description: `JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. `
            },
            {
                title: `HTML`,
                slug: `hmtl`,
                resourceURL: `https://en.wikipedia.org/wiki/HTML`,
                description: `Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.`
            },
            {
                title: `CSS`,
                slug: `css`,
                resourceURL: `https://en.wikipedia.org/wiki/Cascading_Style_Sheets/`,
                description: `Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.`
            },
            {
                title: `Bootstrap`,
                slug: `bootstrap`,
                resourceURL: `https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)`,
                description: `Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.`
            }],
        portfolioThumb: `/assets/img/portfolio/quiz-board.png`,
        liveLink: `http://localhost:4200/`,
        createdAt: new Date(`Sept 13, 2020`),
        projectGallery: `/assets/img/portfolio/single/slider/01.jpg`,
        githubRepo: `https://github.com/{:owner}/{:repoName}`,
        objective: `The purpose of this Independent Project is to demonstrate your level of understanding of the various concepts that you have covered in the content throughout the week. Egestas dui id ornare arcu odio ut. Cursus metus aliquam eleifend mi. Eget gravida cum sociis natoque penatibus et. Nec ullamcorper sit amet risus nullam eget felis eget. Justo nec ultrices dui sapien eget mi. Ut pharetra sit amet aliquam id diam. Et malesuada fames ac turpis egestas integer. Neque convallis a cras semper auctor neque vitae tempus quam. Bibendum ut tristique et egestas quis. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Non arcu risus quis varius quam. Leo urna molestie at elementum eu. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Arcu bibendum at varius vel pharetra vel. Donec et odio pellentesque diam volutpat commodo sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Varius morbi enim nunc faucibus a pellentesque sit amet. Mi sit amet mauris commodo quis imperdiet massa tincidunt.`,
        collaborators: [
            {
                fullName: `Karangu Lucas Wairore`,
                githubProfile: `https://github.com/lwairore`,
                githubUsername: `lwairore`,
                avatarURL: `/assets/img/me.png`
            }
        ],
        description: `Eget magna fermentum iaculis eu non diam. Aenean et tortor at risus viverra adipiscing at in. Nulla posuere sollicitudin aliquam ultrices. Urna cursus eget nunc scelerisque viverra mauris. 

        Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Urna neque viverra justo nec ultrices. Ante metus dictum at tempor commodo. Vulputate enim nulla aliquet porttitor. 
        
        Gravida neque convallis a cras semper auctor neque vitae. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Pulvinar elementum integer enim neque volutpat ac tincidunt. Nisi vitae suscipit tellus mauris a. Velit aliquet sagittis id consectetur. Neque aliquam vestibulum morbi blandit cursus risus at. Ut tortor pretium viverra suspendisse potenti. Magna eget est lorem ipsum dolor. Proin sagittis nisl rhoncus mattis. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Et malesuada fames ac turpis egestas sed tempus.`,
        userStories: [
            `Odio ut sem nulla pharetra diam sit amet.`,
            `Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin.`,
            `Tincidunt vitae semper quis lectus.`,
            `Cras sed felis eget velit aliquet sagittis id consectetur purus.`
        ]
    }
]