import axios from 'axios'

export const strapiUrl = () => process.env.NEXT_PUBLIC_STRAPI_URL

export const fetchContent = (path) => {
  return axios.get(`${strapiUrl()}/api/${path}?populate=*`, {
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      'Content-Type': 'application/json',
    },
  }).then(res => {
    return res.data.data
  }).catch(error => {
    
  })
}

export const sendEmail = (data) => {
  return axios.post(`${strapiUrl()}/api/messages`, { data }, {
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      'Content-Type': 'application/json',
    },
  }).then(res => {
    return res;
  }).catch(error => {
    if (error.response.status === 400) {
      return error.response.data.error
    }
  })
}