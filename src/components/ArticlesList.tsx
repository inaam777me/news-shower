import React from 'react';
import { useState, useEffect } from 'react';
import { fetchArticles } from '../api/articles';
import Card from './Card';

const ArticlesList: React.FC = () => {
    const [articles, setArticles] = useState<any[]>([]);

    useEffect(() => {
        fetchArticles().then(setArticles);
    }, []);

    return (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {articles.map((article) => (
                <Card
                    key={article.id}
                    title={article.title}
                    description={article.summary}
                    imageUrl={article.image_url}
                    url={article.url}
                />
            ))}
        </div>
    );
};

export default ArticlesList;

