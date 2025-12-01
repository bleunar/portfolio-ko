import { useConfig } from '@/config/configContext';
import { Github } from 'lucide-react';

const Projects = () => {
    const { config } = useConfig();

    if (!config) return null;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                <p className="text-muted-foreground">
                    Here are some of the projects I've worked on.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {config.projects.map((project, index) => (
                    <div
                        key={index}
                        className="group rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md overflow-hidden"
                    >
                        <div className="aspect-video w-full overflow-hidden bg-muted">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold leading-none tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-3">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-4 flex items-center gap-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 w-full"
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
