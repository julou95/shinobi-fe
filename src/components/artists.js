import Artist from './artist'

export default function Artists({ data }) {
  return (
    <div>
      <h1 uk-parallax="opacity: 0,1;  end: 85vh + 50%"><span>Unser Team</span></h1>
      {data.map((artist, index) => <Artist data={artist} index={index} />)}
    </div>
  )
}