import {strapi} from "@/lib/config/strapi.config";

export async function getArticles() {
    try {
        const response = await strapi.find('articles', {
            populate: {
                Hero: {
                    populate: {
                        background: true,
                    },
                },
                seo: true,
                tags: true,
                preview: true,
            },
        });

        return {
            props: {
                articles: response,
            },
        };
    } catch (error) {
        console.error('Ошибка получения данных:', error);
        return { props: { articles: null } };
    }
}