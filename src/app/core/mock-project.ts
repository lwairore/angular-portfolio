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
            },
        ],
        portfolioThumb: `/assets/img/portfolio/news-highlights.png`,
        liveLink: `https://giko.herokuapp.com/`,
        createdAt: new Date(`May 17, 2019`),
        projectGallery: `/assets/img/portfolio/news-highlights.png`,
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
        description: `In context, your parents are busy workers and they get home really late. They always miss the news and they are very frustrated since they can't keep up with current affairs. You are a developer and will use your skills and prowess to remedy this problem. You will hence create an application that will help them list and preview news articles from various sources.`,
        userStories: [
            `As a user, I would like to see various news sources on the homepage of the application.`,
            `As a user, I would also want to select a news source and see all news articles from the selected news source in the application.`,
            `As a user, I would want to see the image, description and the time a news article was created.`,
            `As a user, I would want to click on an article and read the full article on the source website.`
        ]
    },
    {
        heading: `Django Image Cropper`,
        slug: `django-image-cropper`,
        tags: [
            {
                title: `Django`,
                slug: `django`,
                resourceURL: `https://www.djangoproject.com/`,
                description: `Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It's free and open source.`
            },
        ],
        portfolioThumb: `/assets/img/portfolio/django_image_cropper_tool_in_action.png`,
        liveLink: `https://django-image-cropper.herokuapp.com/`,
        createdAt: new Date(`Aug 14, 2019`),
        projectGallery: `/assets/img/portfolio/django_image_cropper_tool_in_action.png`,
        githubRepo: `https://github.com/lwairore/django-image-cropper`,
        objective: `The purpose of this application is to try to use the <i>jQuery</i> utility and <i>Cropper.js</i> utility to crop images in the Web browser.`,
        collaborators: [
            {
                fullName: `Karangu Lucas Wairore`,
                githubProfile: `https://github.com/lwairore`,
                githubUsername: `lwairore`,
                avatarURL: `/assets/img/me.png`
            }
        ],
        description: `Cropping images is a fairly common use in a Web application. For example, some applications let you upload a profile picture. In addition, it usually also let you crop and resize the image for a better result. 
        
        Django Image Cropper application allows a user to upload an image, display a preview in a modal, crop the image and finally upload it and save it in the server.`,
        userStories: [
            `As a user, I would like to view all the images that have been cropped in the homepage.`,
            `As a user, I would like to be able to upload an image of my choice, be presented with a preview modal which provide to me all the tools to crop the seleted image.`,
            `As a user, I should have a button to upload an image that meets my requirements or discard an image that doesn't.`,
        ]
    },
    {
        heading: `Python Password Locker`,
        slug: `python-password-locker`,
        tags: [
            {
                title: `Python`,
                slug: `python`,
                resourceURL: `https://www.python.org/`,
                description: `Python is an interpreted, high-level, general-purpose programming language.`
            },
          ],
        portfolioThumb: null,
        liveLink: null,
        createdAt: new Date(`May 10, 2019`),
        projectGallery: null,
        githubRepo: `https://github.com/lwairore/python-password-locker`,
        dockerhubRepo: null,
        objective: `<ol>
        <li>Project should have two classes, a <b>User</b> class and <b>Credentials</b> class.</li>
        <li>Application should have an authentication system that enables a user to log into their account and view their credentials.
            A user should be able to login to their account using the password that they created and <b>NOT</b> any password.</li>
        <li>Project should make use of docstrings to document methods and functions.</li>
        <li>Project must have a test class that test each individual method in your classes.</li>
        </ol>`,
        collaborators: [
            {
                fullName: `Karangu Lucas Wairore`,
                githubProfile: `https://github.com/lwairore`,
                githubUsername: `lwairore`,
                avatarURL: `/assets/img/me.png`
            }
        ],
        description: `On Average, a person has at least 7 different accounts he or she has signed into, be it email, social media, entertainment or job portal accounts. It becomes really hard to remember all those passwords and even create new ones.
        
        This application helps users manage their passwords and even generate new passwords for them.`,
        userStories: [
            `As a user, I want to create a password locker account with my details, a login username and password.`,
            `As a user, I want to store my already existing account credentials in the application. Assuming I already have a twitter account, I want to store my already existing twitter username and password in the application.`,
            `As a user, I want to create new account credentials in the application. For example, if I have not yet signed up for Instagram, I would want to create a credentials account for Instagram in the application and the application generates a password for me to use when I sign up for Instagram.`,
            `As a user, I want to have the option of putting in a password that I want to use for the new credential account. For example, when creating my Instagram credential account, I want to have an option of putting in the password I want to use instead of having the application generate a password for me.`,
            `As a user, I also want to view my various account credentials and their passwords in the application.`,
            `As a user, I want to delete a credentials account that I no longer need in the application.`,
            `As a user, I would like to be able to copy my credentials to the clipboard.`,
            `As a user, I would also like to dictate the length of the password I generate.`
        ]
    },
    {
        heading: `Angular Connection Aware`,
        slug: `angular-connection-aware`,
        tags: [
            {
                title: `Angular`,
                slug: `angular`,
                resourceURL: `https://en.wikipedia.org/wiki/Angular_(web_framework)`,
                description: `Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. `
            }
        ],
        portfolioThumb: `/assets/img/portfolio/angular_connection_detector.gif`,
        liveLink: `https://lwairore.github.io/angular-connection-aware/`,
        createdAt: new Date(`Aug 03, 2020`),
        projectGallery: `/assets/img/portfolio/angular_connection_detector.gif`,
        githubRepo: `https://github.com/lwairore/angular-connection-aware`,
        objective: `The purpose of this application is to try to combine the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API">Network Information API</a> with Angular.`,
        collaborators: [
            {
                fullName: `Karangu Lucas Wairore`,
                githubProfile: `https://github.com/lwairore`,
                githubUsername: `lwairore`,
                avatarURL: `/assets/img/me.png`
            }
        ],
        description: `Angular Connection Aware is a simple application that aims to combine the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API">Network Information API</a> with Angular, to write components that render different elements for different connections speeds.`,
        userStories: null
    },
    {
        heading: `Angular Rainbow`,
        slug: `angular-rainbow`,
        tags: [
            {
                title: `Angular`,
                slug: `angular`,
                resourceURL: `https://en.wikipedia.org/wiki/Angular_(web_framework)`,
                description: `Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. `
            },
        ],
        portfolioThumb: `/assets/img/portfolio/hostbinding-example.gif`,
        liveLink: `https://lwairore.github.io/angular-rainbow/`,
        createdAt: new Date(`Jul 29, 2020`),
        projectGallery: `/assets/img/portfolio/hostbinding-example.gif`,
        githubRepo: `https://github.com/lwairore/angular-rainbow`,
        objective: `The purpose of this application is to use <i>@HostBinding</i> and <i>@HostListener</i> in Custom Angular Directives.`,
        collaborators: [
            {
                fullName: `Karangu Lucas Wairore`,
                githubProfile: `https://github.com/lwairore`,
                githubUsername: `lwairore`,
                avatarURL: `/assets/img/me.png`
            }
        ],
        description: `A simple Angular application that uses a directive, <i>RainbowDirective</i> to listen for a <i>keydown</i> event on the host and sets its text and border colour to a random colour from a set of a few available colours when user is trying.`,
        userStories: null
    },
    {
        heading: `Python Ginger Pitch`,
        slug: `python-ginger-pitch`,
        tags: [
            {
                title: `Flask`,
                slug: `flask`,
                resourceURL: `https://en.wikipedia.org/wiki/Flask_(web_framework)`,
                description: `Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.`
            },
        ],
        portfolioThumb: `/assets/img/portfolio/flask-ginger-pitch-homepage.png`,
        liveLink: `https://ginger-pitch.herokuapp.com/`,
        createdAt: new Date(`Sept 13, 2020`),
        projectGallery: `/assets/img/portfolio/flask-ginger-pitch-homepage.png`,
        githubRepo: `https://github.com/lwairore/python-ginger-pitch`,
        objective: `<ol>
        <li>Project must have a <b>User</b> model.</li>
        <li>Models must implemenent at least 1 one-to-many relationship.</li>
        <li>Project should have a comment model.</li>
        <li>Project should have a profile page.</li>
        <li>Project should follow the proper folder structure.</li>
        <li>Project should have a functioning aauthentication system.</li>
        <li>Project should contain migration files for the different model structure.</li>
        </ol>`,
        collaborators: [
            {
                fullName: `Karangu Lucas Wairore`,
                githubProfile: `https://github.com/lwairore`,
                githubUsername: `lwairore`,
                avatarURL: `/assets/img/me.png`
            }
        ],
        description: `In life, you only have 60 seconds to impress someone. 1 minute can make or break you. How do we make sure that you use your 1 minute to actually say something meaningful?

        Flask Ginger Pitch is an application that allows users to use that one minute wisely. The users can submit their one minute pitches and other users can leave comments to give their feedback on them.
        
        The pitches are organized by category. Flask Ginger Pitch offers the following categories:
        
        <ul><li>Elevator</li><li>Interview</li><li>Adding a contact</li><li>Job opportunity</li><li>Product pitch</li><li>Promotional pitch</li></ul>`,
        userStories: [
            `As a user, I would like to see the pitches other people have posted.`,
            `As a user, I would like to vote on the pitch they liked and give it a downvote or upvote.`,
            `As a user, I would like to be signed in for me to leave a comment`,
            `As a user, I would like to receive a welcoming email once I sign up.`,
            `As a user, I would like to view the pitches I have created in my profile page.`,
            `As a user, I would like to comment on the different pitches and leave feedback.`,
            `As a user, I would like to submit a pitch in any category.`,
            `As a user, I would like to view the different categories.`
        ]
    },
    
    {
        heading: `Angular Weather App`,
        slug: `angular-weather-app`,
        tags: [
            {
                title: `Angular`,
                slug: `angular`,
                resourceURL: `https://en.wikipedia.org/wiki/Angular_(web_framework)`,
                description: `Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. `
            },
        ],
        portfolioThumb: `/assets/img/portfolio/weather_app.png`,
        liveLink: `https://angular-simple-weather-app.web.app`,
        createdAt: new Date(`Aug 11, 2020`),
        projectGallery: `/assets/img/portfolio/weather_app.png`,
        githubRepo: `https://github.com/lwairore/angular-weather-app`,
        objective: `<ol>
        <li>Project should make use of the <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> front-end library grid system to divide the page.</li>
        <li>Project must consume a global weather data API, preverably <a href="https://www.apixu.com/" target="_blank">APIXU</a>, to retrieve the latest weather as well as future weather forecasts for any location in the world.</li>
        <li>Project must either use <i>reactive</i> or <i>template-driven</i> forms to create forms for user input.</li>
        </ol>`,
        collaborators: [
            {
                fullName: `Karangu Lucas Wairore`,
                githubProfile: `https://github.com/lwairore`,
                githubUsername: `lwairore`,
                avatarURL: `/assets/img/me.png`
            }
        ],
        description: `Angular Weather app is an Angular application that uses <a href="https://angular.io/" target="_blank">Angular</a>, <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>, and the <a href="https://www.apixu.com/" target="_blank">APIXU</a> API. This application allows a user to be able to type a location into a search form and on submission of that form, they're able to see the current weather details for that location they searched for.`,
        userStories: [
            `As a user, I would like to be presented with a form to be able to search for my desired location.`,
            `As a user, I would to get weather details for a specific location after submitting my location.`,
            `As a user, I would like to know the following current weather conditions, temparature in degrees celcius, feels like in degrees celcius, and location searched after I submit a location.`,
        ]
    },
    {
        heading: `Django Explore Africa`,
        slug: `django-explore-africa`,
        tags: [
            {
                title: `Django`,
                slug: `django`,
                resourceURL: `https://www.djangoproject.com/`,
                description: `Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It's free and open source.`
            },
        ],
        portfolioThumb: `/assets/img/portfolio/explore_kenya.png`,
        liveLink: `https://explorekenya.herokuapp.com/`,
        createdAt: new Date(`Jun 14, 2019`),
        projectGallery: `/assets/img/portfolio/explore_kenya.png`,
        githubRepo: `https://github.com/lwairore/django-explore-africa`,
        objective: `<ol>
        <li>Project must contain an <b>Image</b> model with the following properties: <b>image</b>, <b>image name</b>, <b>image description</b>, <b>image location foreign key</b>, and <b>image category foreign key</b></li>
        <li>Project must contain location that link to the image model.</li>
        <li>A user should be able to click a button and have the link to the image copied to the machine's clipboard.</li>
        <li>Project should be deployed to </li>
        <li>Project should follow the proper folder structure.</li>
        <li>Application should be deployed to <a href="https://www.heroku.com/">Heroku</a>.</li>
        <li>Application should be accessible to users on both <b>desktop</b> and <b>mobile</b> formats. Ensure that the application is responsive to different screen sizes.</li>
        <li>Application should have a clean, simple, well-organized user interface.</li>
        </ol>`,
        collaborators: [
            {
                fullName: `Karangu Lucas Wairore`,
                githubProfile: `https://github.com/lwairore`,
                githubUsername: `lwairore`,
                avatarURL: `/assets/img/me.png`
            }
        ],
        description: `Django Explore Africa is my personal gallery application that displays high quality and completely free stock photos showcasing the beauty of Africa.`,
        userStories: [
            `As a user, I would like to view different photos that interest me.`,
            `As a user, I would to be able to copy a link to the photo to share with my friends.`,
            `As a user, I would want to view photos based on the location they were taken.`,
        ]
    },
   
    {
        heading: `Django Simple Blog`,
        slug: `django-simple-blog`,
        tags: [
            {
                title: `Django`,
                slug: `django`,
                resourceURL: `https://www.djangoproject.com/`,
                description: `Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It's free and open source.`
            },
        ],
        portfolioThumb: `/assets/img/portfolio/django-simple-blog-homepage.png`,
        liveLink: `http://django-simple-blog-app.herokuapp.com/`,
        createdAt: new Date(`Aug 12, 2020`),
        projectGallery: `/assets/img/portfolio/django-simple-blog-homepage.png`,
        githubRepo: `https://github.com/lwairore/django-simple-blog`,
        objective: `<ol>
        <li>Project uses Django framework.</li>
        <li>Project must customize the way models are displayed in the administration site.</li>
        <li>Project must define a custom model manager to retrieve all posts with the <i>published</i> status.</li>
        <li>Project must split the list of post across several pages by using the Django built-in pagination class.</li>
        <li>Project must implement a comment system.</li>
        <li>Project should have a tagging functionality.</li>
        <li>Project must use custom template tags and filters to display total number of posts, show latest posts, display the most commented posts, and be able to format markdown.</li>
        <li>Project must have a sitemap</li>
        <li>Project must have a feeds</li>
        </ol>`,
        collaborators: [
            {
                fullName: `Karangu Lucas Wairore`,
                githubProfile: `https://github.com/lwairore`,
                githubUsername: `lwairore`,
                avatarURL: `/assets/img/me.png`
            }
        ],
        description: `Django Simple Blog is a personal blogging website where you can create and share you opinions and other users can reead and comment on them`,
        userStories: [
            `As a user, I would like to view blog posts on the site.`,
            `As a user, I would like to comment on blog posts.`,
            `As a user, I would like to view the most recent posts.`,
            `As a user, I would like to view the most commented post.`,
            `As a user, I would like to share a blog post with a friend.`,
            `As a user, I would like to see the tags for a particular blog post.`,
            `As a user, I would like to see similar posts related to a particular blog post.`,
        ]
    },
]