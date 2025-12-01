import { useConfig } from '@/config/configContext';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { config } = useConfig();

    if (!config) return null;

    const featuredSkills = config.skills.slice(0, 3);
    const featuredProjects = config.projects.slice(0, 2);

    return (
        <div className="flex flex-col space-y-24 animate-in fade-in duration-500">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center space-y-8">
                <div className="space-y-4 max-w-3xl">
                    <div className="relative w-32 h-32 mx-auto mb-8">
                        <img
                            src={config.profile.avatar}
                            alt={config.profile.name}
                            className="rounded-full object-cover w-full h-full border-4 border-primary/10 shadow-xl"
                        />
                        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent pb-2">
                        Hi, I'm {config.profile.name}
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                        {config.profile.role}
                    </p>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {config.profile.bio}
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center pt-4">
                    <Link
                        to="/projects"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                    >
                        View Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
                    >
                        Contact Me
                    </Link>
                </div>
            </section>

            {/* Skills Highlight */}
            <section className="space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Core Technologies</h2>
                    <p className="text-muted-foreground">Some of the tools I use to build amazing things.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuredSkills.map((category, index) => (
                        <div key={index} className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                            <h3 className="font-semibold mb-4">{category.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span key={skill} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Link to="/skills" className="text-primary hover:underline inline-flex items-center">
                        View all skills <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                    <p className="text-muted-foreground">A glimpse into my recent work.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredProjects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl">
                            <div className="aspect-video w-full overflow-hidden bg-muted">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a href={project.link} target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80">
                                        <Github className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Link to="/projects" className="text-primary hover:underline inline-flex items-center">
                        View all projects <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl font-bold">{config.contact.title}</h2>
                <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                    {config.contact.description}
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href={`mailto:${config.profile.email}`}
                        className="inline-flex items-center justify-center rounded-md bg-background text-foreground px-8 py-3 text-sm font-medium hover:bg-background/90 transition-colors"
                    >
                        <Mail className="mr-2 h-4 w-4" />
                        {config.contact.cta}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
