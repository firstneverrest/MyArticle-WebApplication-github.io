import React, { useState, useEffect} from 'react'
import Loading from './components/Loading';
import Error from './components/Error'
import Articles from './components/Articles';
import Footer from './components/Footer'
import './sass/main.scss'

// medium api - 
const url = 'https://v1.nocodeapi.com/neverrest/medium/tbUXiyQhVDDssczC';

function App() {
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])
  
  // fetch api
  useEffect(() => {
    fetchArticles()
  }, [])

  // fetch articles from Medium using nocodeapi
  const fetchArticles = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const articles = await response.json()
      setLoading(false)
      setArticles(articles)
    } catch (error) {
      setLoading(false)
      return (
        <Error />
      );
    }
  }

  const removeArticle = (id) => {
    const newArticles = articles.filter((article) => article.id != id)
    setArticles(newArticles)
  }

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <main className="container">
      <Articles articles={articles} removeArticle={removeArticle} />
      <Footer />
    </main>
  );
}

export default App;
