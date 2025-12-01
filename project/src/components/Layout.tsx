import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useConfig } from '@/config/configContext';
import { Moon, Sun, Github, Linkedin, Twitter } from 'lucide-react';

const Layout = () => {
    const { config, loading } = useConfig();
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    if (loading || !config) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="font-bold text-xl tracking-tight hover:text-primary transition-colors">
                        {config.profile.name}
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
                        <Link to="/skills" className="hover:text-primary transition-colors">Skills</Link>
                        <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-full hover:bg-accent transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8">
                <Outlet />
            </main>

            <footer className="border-t py-8 mt-auto">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} {config.profile.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {config.socials.github && (
                            <a href={config.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                        )}
                        {config.socials.linkedin && (
                            <a href={config.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        )}
                        {config.socials.twitter && (
                            <a href={config.socials.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        )}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
