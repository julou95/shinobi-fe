import { remark } from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'

export const getImageUrl = (picData) => {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${picData?.data?.[0]?.attributes?.url || ''}`
}

export const getGalImgUrl = (data) => {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.attributes.url}`
}

export const markdownDesc = async (text) => {
  const matterResult = matter(text);
  const parsed = await remark().use(html).process(matterResult.content);
  const parsedHtml = parsed.toString()

  return parsedHtml;
}