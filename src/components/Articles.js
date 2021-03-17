import React from 'react'
import Article from './Article'

const Articles = ({articles, removeArticle}) => {

    return (
        <div className="Articles">
            <div className="Articles__header"><h2 className="Articles__header-message"></h2></div> 
            <p className="Articles__description">These all articles are come from my medium article.
                If you enjoy with my articles, please visit  
                <a className="Articles__link" href="https://medium.com/neverrest"> my medium</a></p> 
            <div className="Articles__container">
            {articles.map((article, index) => {
                return <Article key={index} 
                                article={article}
                                removeArticle={removeArticle} />;
            })}
            </div>
        </div>
    )
}

export default Articles
