import React from 'react';
import styles from './page.module.css';
import Button from "@/components/ui/Button/Button";
import clsx from "clsx";
import {Card} from "@/components/ui/Card/Card";
import NavFilter from "@/components/ui/NavFilter/NavFilter";
import { BodyText } from '@/components/ui/Typography';
import { Container } from '@/components/Layout/Container';
import {getArticles} from "@/lib/api/articles";
import { STRAPI_BASE_URL } from '@/lib/config/strapi.config';


export type Article = {
    id: number,
    seo: {
        title: string,
        description: string,
        slug: string,
    },
    Hero: {
        id: number
        title: string,
        description: string,
        background: {
            url?: string
        }
    }
}

async function Page() {

    const data = await getArticles()


    const articles = (data.props.articles?.data ?? []) as any[];

    console.log(data);


    return (
        <main className={styles.main}>
            {/* Desktop Hero Section */}
            <div className={styles.desktopHero}>
                <Container>
                    <div className={styles.heroContent}>
                        <img src="/architecture.svg" alt="" className={styles.architecture}/>
                        <div className={styles.heroImages}>
                            <img src="/house.png" alt="" className={styles.houseImg}/>
                        </div>
                        <div className={styles.heroText}>
                            <BodyText color={"secondary"}>
                                We, as a brand, turn your dreams into fantastique interiors and architectural designs. Our projects inspire the pursuit of your great aspirations. We create the alchemy of luxury and the enjoyment of our clientèle
                            </BodyText>
                            <Button theme="light">
                                <BodyText color={"secondary"}>
                                    All projects
                                </BodyText>
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Mobile Hero Section */}
            <div className={styles.mobileHero}>
                <Container>
                    <div className={styles.mobileImages}>
                        <img src="/architecture.svg" alt="" className={styles.architecture}/>
                        <img src="/house.png" alt="" className={styles.houseImg}/>
                    </div>
                </Container>
            </div>
            <div className={clsx(styles.mobileTextSection, "text-white")}>
               <Container>
                   <div className={styles.inner}>
                       <BodyText>
                           We, as a brand, turn your dreams into fantastique interiors and architectural designs. Our projects inspire the pursuit of your great aspirations. We create the alchemy of luxury and the enjoyment of our clientèle
                       </BodyText>
                       <Button theme="dark">
                           <BodyText>
                               All projects
                           </BodyText>
                       </Button>
                   </div>
               </Container>
            </div>
            <section className={styles.articles}>
                <Container>
                    <NavFilter/>
                    <div className={styles.articlesGrid}>
                        {articles?.map((article: Article) => {
                            const relativeUrl = article?.Hero?.background?.url;
                            const imageUrl = relativeUrl
                                ? `${STRAPI_BASE_URL}${relativeUrl}`
                                : undefined;

                            return (
                                <Card
                                    key={article.id}
                                    id={article.id}
                                    title={article.seo.title}
                                    description={article.seo.description}
                                    src={imageUrl}
                                />
                            );
                        })}
                    </div>
                </Container>
            </section>
        </main>

    );
}

export default Page;