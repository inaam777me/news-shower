import React from 'react';
import { useState, useEffect } from 'react';
import { fetchArticles } from '../api/articles';
import Card from './Card';
import { Search } from './search';

const ArticlesList: React.FC = () => {
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setLoading(true);
        fetchArticles()
            .then(setArticles)
            .finally(() => setLoading(false));
    }, []);
    
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="m-4">
                <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <h1 className="text-4xl font-bold mb-4">Latest Articles</h1>
            </div>
            <div className="ml-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {loading && <p>Loading...</p>}
                {filteredArticles.map(article => (
                    <Card
                        key={article.id}
                        title={article.title}
                        description={article.summary}
                        imageUrl={article.image_url}
                        url={article.url}
                        id={article.id}
                        bool={false}
                    />
                ))}
            </div>
        </>
    );
};

export default ArticlesList;

