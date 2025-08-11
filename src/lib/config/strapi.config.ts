import Strapi from "strapi-sdk-js";

export const STRAPI_BASE_URL = "https://r810983k-1337.euw.devtunnels.ms";

export const strapi = new Strapi({
    url: STRAPI_BASE_URL,
});