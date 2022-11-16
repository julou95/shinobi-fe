import axios from 'axios'

export const fetchIG = async (url) => {
  const response = await axios.get(url).then(res => {
    return res.data
  })

  return response
}