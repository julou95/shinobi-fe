import Article from './article'

export default function News({ data }) {
  return (
    <div>
      <h1 uk-parallax="opacity: 0,1; y: 50,0; end: 75vh + 50%"><span>News</span></h1>
      {data.map(article => <Article data={article} key={article.id} />)}
    </div>
  )
}