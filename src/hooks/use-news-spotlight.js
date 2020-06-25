import { useNews } from './use-news'

export const useNewsSpotlight = () => {
    const spotlightArticles = useNews().filter(article => article.frontmatter.spotlight === true)
    return spotlightArticles
}
