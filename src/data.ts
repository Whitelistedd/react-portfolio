import BaseEcommerce from './images/Base.webp';
import BaseDashboard from './images/baseDashboard.webp';
import SpaceTourism from './images/SpaceTourism.webp';
import VolxenTracker from './images/VolxenTracker.webp';
import ReactBookLibrary from "./images/React-book-library.webp"
import TodoApp from "./images/TodoApp.webp"
import AsterNews from "./images/aster-news.webp"

import Redux from "./images/redux.svg";
import GIT from "./images/git-alt-brands.svg";
import Next from "./images/next-js.svg";
import Tailwind from "./images/tailwind-css.svg";
import MongoDB from "./images/mongoDB.svg";
import NODE from "./images/node-js-brands.svg";
import REACT from "./images/react-brands.svg";
import TS from "./images/typescript.svg";

export const Cards = [
    {
        images: BaseEcommerce,
        title: "Base Ecommerce",
        desc: "В этом проекте я сделал приложение для покупки одежды MERN React, добавил платежную систему, систему корзины покупок, Яндекс Метрику и фильтрацию, а также сделал RestAPI для выполнения CRUD-операций и MongoDB для хранения всех данных о товарах и заказах. Для этого проекта я использовал ReactJS, Redux, Styled-Components, Yandex Metrika и бэкэнд REST API, созданный с помощью Node, ExpressJS и MongoDB.",
        live: "https://base-shop.vercel.app/",
        code: "https://github.com/Whitelistedd/base",
    },
    {
        images: BaseDashboard,
        title: "Base Admin Dashboard (в разработке)",
        desc: "В этом проекте я создал панель администратора для своего проекта электронной коммерции, чтобы управлять всеми продуктами, пользователями и сведениями о доходах. Для этого проекта я использовал React, Typescript, MUI, React-Router, Styled-Components и Recharts для графиков.",
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
    {
        images: AsterNews,
        title: "Aster News",
        desc: "В этом проекте я создал новостное приложение с последними новостями и различными категориями новостей. Я сделал это с помощью ReactJS, Styled-Components, Typescript, Redux Toolkit и NewsAPI.",
        live: "https://asternews.vercel.app/",
        code: "https://github.com/Whitelistedd/aster-news",
    },
    {
        images: TodoApp,
        title: "Todo App",
        desc: "В этом проекте я создал приложение для управления вашими задачами, сохранения статуса их выполнения и добавления/удаления задач. Я использовал его с помощью ReactJS, Typescript, Redux-Toolkit и Styled-Components.",
        live: "https://todolist-pp.vercel.app/",
        code: "https://github.com/Whitelistedd/todo-app",
    },
]

export const languages = [Next, Redux, Tailwind, GIT, TS, MongoDB, NODE, REACT];