export interface Project {
    heading: string;
    tags: {
        title: string,
        slug: string,
        resourceURL: string,
        description: string
    }[];
    slug: string;
    portfolioThumb: string;
    liveLink: string;
    createdAt: Date;
    projectGallery: string;
    githubRepo: string;
    objective: string;
    collaborators: {
        fullName: string;
        githubUsername: string;
        githubProfile: string;
        avatarURL: string;
    }[];
}
