import {strapi} from "@/lib/config/strapi.config";

export async function getServerSideProps() {
    try {
        const response = await strapi.find('articles', {
            populate: '*',
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