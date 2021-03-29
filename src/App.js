import './App.css';
import {useState ,useEffect} from 'react'
import Display from './components/Display'

function App() {

  useEffect(() => {
    const lastNews = async () => {
      const news = await getNews()
      setNewsList(news.articles)
    } 

    lastNews()
  }, [])

  const [newsList,setNewsList] = useState([])

  return (
    <div className="App">
      <div className="newsGrid">
      {
      newsList.map(article => {
        return <Display title={article.title} url={article.url} img={article.urlToImage}/>
      })
      }
      </div>
    </div>
  );
}

async function getNews(){
  const baseURL = "https://newsapi.org/v2/top-headlines?"
  const apiKey = "c2ffd064a9454688a94812d4a0825eef"
  const api = "&apiKey=" + apiKey
  let news = await fetch(baseURL+"category=technology"+api)
          .then((res) => res.json())
          .then((data) => {
              return data
          })
  console.log(news)
  return news
}

export default App;
