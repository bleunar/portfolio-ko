import { useConfig } from '@/config/configContext';

const Skills = () => {
    const { config } = useConfig();

    if (!config) return null;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Skills & Technologies</h2>
                <p className="text-muted-foreground">
                    A comprehensive list of technologies and tools I work with.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {config.skills.map((category, index) => (
                    <div
                        key={index}
                        className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4"
                    >
                        <h3 className="text-xl font-semibold tracking-tight border-b pb-2">
                            {category.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
