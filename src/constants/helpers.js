export const getImageUrl = (picData) => {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${picData?.data?.[0]?.attributes?.url || ''}`
}

export const getGalImgUrl = (data) => {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.attributes.url}`
}