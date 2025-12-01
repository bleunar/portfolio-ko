import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Config } from '@/types';

interface ConfigContextType {
    config: Config | null;
    loading: boolean;
    error: string | null;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [config, setConfig] = useState<Config | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/config.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to load configuration');
                }
                return res.json();
            })
            .then((data) => {
                setConfig(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <ConfigContext.Provider value={{ config, loading, error }}>
            {children}
        </ConfigContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useConfig = () => {
    const context = useContext(ConfigContext);
    if (context === undefined) {
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context;
};
