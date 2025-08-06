import {strapi} from "@/lib/config/strapi.config";



export async function getTags() {
    try {
        const response = await strapi.find('tags', {
            populate: '*',
        });

        console.log(response.data);
        return {
            props: {
                tags: response,
            },
        };
    } catch (error) {
        console.error('Ошибка получения данных:', error);
        return { props: { tags: null } };
    }
}