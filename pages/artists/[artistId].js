import { fetchContent } from "src/api/strapi";

export const ArtistDetails = ({ artist }) => {
  return (
    <div>
      Hola from artist {artist.attributes.name}
    </div>
  )
}

export async function getStaticProps({ params }) {
  const artist = await fetchContent(`artists/${params.artistId}`)
  return {
    props: {
      artist,
    }
  }
}

// pages/blog/[slug].js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { artistId: '1' } },
    ],
    fallback: true,
  }
}

export default ArtistDetails