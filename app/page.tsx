import React from 'react';
import styles from './page.module.css';
import Button from "@/components/Button/Button";
import clsx from "clsx";
import {getServerSideProps} from "@/lib/api/articles";
import {Card} from "@/components/Card/Card";
import NavFilter from "@/components/NavFilter/NavFilter";

const ArticleMocks = [
    {
        id: 1,
        name: "Article 1",
        description: "This is a description for Article 1",
    },
    {
        id: 2,
        name: "Article 2",
        description: "This is a description for Article 1",
    },
    {
        id: 3,
        name: "Article 3",
        description: "This is a description for Article 1",
    },
    {
        id: 4,
        name: "Article 4",
        description: "This is a description for Article 1",
    }
]

async function Page() {
    return (
        <main className={styles.main}>
            <div className="container">
                <img src="/architecture.svg" alt="" className={styles.architecture}/>
                <img src="/house.png" alt="" className={styles.houseImg}/>
            </div>
            <div className={clsx(styles.wrapper, "text-black")}>
               <div className="container">
                   <div className={styles.inner}>
                       <p className='text-white'>
                           We, as a brand, turn your dreams into fantastique interiors and architectural designs. Our projects inspire the pursuit of your great aspirations. We create the alchemy of luxury and the enjoyment of our clientèle
                       </p>
                       <Button>All projects</Button>
                   </div>
               </div>
            </div>
            <section className={styles.articles}>
                <div className="container">
                    <NavFilter/>
                    {ArticleMocks.map((article) => (
                        <Card
                            key={article.id}
                            title={article.name}
                            description={article.description}
                        />
                    ))}
                </div>
            </section>
        </main>

    );
}

export default Page;