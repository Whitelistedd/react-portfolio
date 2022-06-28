import BaseEcommerce from './images/Base.webp';
import SpaceTourism from './images/SpaceTourism.webp';
import VolxenTracker from './images/VolxenTracker.webp';
import ReactBookLibrary from "./images/React-book-library.webp"

import CSS from "./images/css3-alt-brands.svg";
import GIT from "./images/git-alt-brands.svg";
import HTML5 from "./images/html5-brands.svg";
import JS from "./images/js-brands.svg";
import MongoDB from "./images/mongoDB.svg";
import NODE from "./images/node-js-brands.svg";
import REACT from "./images/react-brands.svg";
import TS from "./images/typescript.svg";

export const Cards = [
    {
        images: BaseEcommerce,
        title: "Base Ecommerce",
        desc: "В этом проекте я сделал сайт MERN React для компании Base, добавилплатежную систему, систему корзины, Yandex Metrica и фильтрацию. Для этого проекта я использовал ReactJS , Redux, Styled-Components и бэкэнд REST API, созданный с помощью Node, ExpressJS и MongoDB.",
        live: "https://base-shop.vercel.app/",
        code: "https://github.com/Whitelistedd/base",
    },
    {
        images: SpaceTourism,
        title: "Space tourism",
        desc: "В этом проекте я сделал сайт React, который рассказывает о космосе и некоторых планетах Солнечной системы. Я сделал этот проект, потому что интересовался космосом и был рад показать людям космический мир на сайте. для этого проекта я использовал ReactJS, Typescript,  React-router, StyledComponents и Figma для дизайн.",
        live: "https://spaceworld.vercel.app/",
        code: "https://github.com/Whitelistedd/Space-tourism",
    },
    {
        images: VolxenTracker,
        title: "Трекер посылок",
        desc: "Я сделал этот сайт, потому что использовал множество сайтов для отслеживания посылок, и некоторые из них не работали должным образом, поэтому я сделал свой собственный, который использует современные технологии дляобновления информации.Для этого проекта я использовал NextJS, Typescript, Styled-Components, MaterialUI, SSR и небольшой бэкенд API,чтобы я мог скрыть свой ключ API.",
        live: "https://volxenjs.vercel.app/",
        code: "https://github.com/Whitelistedd/parcel-remastered",
    },
    {
        images: ReactBookLibrary,
        title: "React Book Library",
        desc: "В этом проекте я создал библиотеку книг, которая может искать книги в API книг Google и фильтровать их с помощью сортировки и категорий, а также имеет кнопку «Загрузить больше», чтобы загружать больше книг. Я сделал это с помощью ReactJS, Styled-components и Typescript.",
        live: "https://react-book-library.vercel.app/",
        code: "https://github.com/Whitelistedd/book-library",
    },
]

export const languages = [HTML5, CSS, JS, GIT, TS, MongoDB, NODE, REACT];