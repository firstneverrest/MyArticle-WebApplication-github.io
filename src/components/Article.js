import React from 'react'

const parser = require('xml2json-light');

const Article = ({id, article, removeArticle}) => {
    // parse xml to json and extract html tag for thumbnail and content
    let xml = article['content:encoded'];

    let searchEndIndex= xml.indexOf("</p>");
    xml = xml.slice(0, searchEndIndex + 4)

    let json = parser.xml2json(xml);
    let thumbnail, content
    
    thumbnail = json['figure']['img']['src'];
    content = json['p'];
    
    let title = article['title']

    let link = article['link']
    
    let pubDate = article['pubDate']
    pubDate = pubDate.split(" ")
    pubDate = `${pubDate[1]} ${pubDate[2]} ${pubDate[3]}`
    
    let categories = article['categories']

    // handle when article paragraph is unable to get date
    if (content[0] === undefined) {
        content = `Click to read more about ${title}`;
    }
    
    return (
        <div className="Article">
            <a href={link} className="Article__container">
                <img className="Article__image" src={thumbnail} alt="thumbnail"></img>
                <h4 className="Article__title">{title}</h4>
                <p className="Article__publicDate">{pubDate}</p>
                <p className="Article__content">{content} ...</p>
                <div className="Article__categories">
                    {categories.map((category, index) => {
                        return <span key={index} className="Article__categories-item">{categories[index]}</span>
                    })}
                </div>
            </a>
        </div>
    )
}

export default Article
