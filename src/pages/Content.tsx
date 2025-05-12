import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import sample from '../resources/sample.pdf';
import LoadingLogo from '../assets/LoadingLogo';

const Content: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Layout>
            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow">
                {isLoading ? (
                    <div className="w-full h-[calc(100vh-3rem)] flex items-center justify-center">
                        <LoadingLogo className="w-32 h-32" />
                    </div>
                ) : (
                    <iframe
                        src={sample}
                        className="w-full h-[calc(100vh-3rem)] rounded-lg"
                    />
                )}
            </div>
        </Layout>
    );
};

export default Content;
