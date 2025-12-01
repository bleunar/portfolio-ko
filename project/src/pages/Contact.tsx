import { useConfig } from '@/config/configContext';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const { config } = useConfig();

    if (!config) return null;

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">{config.contact.title}</h2>
                <p className="text-muted-foreground">
                    {config.contact.description}
                </p>
            </div>

            <div className="grid gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="p-2 bg-primary/10 rounded-full text-primary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Email</p>
                                <a href={`mailto:${config.profile.email}`} className="text-lg font-semibold hover:text-primary transition-colors">
                                    {config.profile.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="p-2 bg-primary/10 rounded-full text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Location</p>
                                <p className="text-lg font-semibold">
                                    {config.profile.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                    <div className="flex justify-center gap-6">
                        {config.socials.github && (
                            <a
                                href={config.socials.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                            >
                                <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                                    <Github className="h-6 w-6" />
                                </div>
                                <span className="text-sm font-medium">GitHub</span>
                            </a>
                        )}
                        {config.socials.linkedin && (
                            <a
                                href={config.socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                            >
                                <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                                    <Linkedin className="h-6 w-6" />
                                </div>
                                <span className="text-sm font-medium">LinkedIn</span>
                            </a>
                        )}
                        {config.socials.twitter && (
                            <a
                                href={config.socials.twitter}
                                target="_blank"
                                rel="noreferrer"
                                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                            >
                                <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                                    <Twitter className="h-6 w-6" />
                                </div>
                                <span className="text-sm font-medium">Twitter</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
