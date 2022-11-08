import { fetchContent } from "src/api/strapi";

export const NewsFeed = ({ article }) => {

  return (
    <div>
      Hola from article {article.id}
    </div>
  )
}

export async function getStaticProps({ params }) {
  
  const article = await fetchContent(`articles/${params.newsId}`)
  return {
    props: {
      article,
    }
  }
}

// pages/blog/[slug].js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { newsId: '1' } },
    ],
    fallback: true,
  }
}

export default NewsFeed