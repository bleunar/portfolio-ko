export interface Profile {
    name: string;
    role: string;
    bio: string;
    avatar: string;
    location: string;
    email: string;
}

export interface Socials {
    github: string;
    linkedin: string;
    twitter: string;
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
}

export interface Contact {
    title: string;
    description: string;
    cta: string;
}

export interface Config {
    profile: Profile;
    socials: Socials;
    skills: SkillCategory[];
    projects: Project[];
    contact: Contact;
}
