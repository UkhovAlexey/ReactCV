import project001 from "./../img/projects/001.jpg";
import project002 from "./../img/projects/002.jpg";
import project004 from "./../img/projects/004.jpg";
import project005 from "./../img/projects/005.jpg";
import project006 from "./../img/projects/006.jpg";
import project007 from "./../img/projects/007.jpg";

import project001big from "./../img/projects/001big.jpg";
import project002big from "./../img/projects/002big.jpg";
import project004big from "./../img/projects/004big.jpg";
import project005big from "./../img/projects/005big.jpg";
import project006big from "./../img/projects/006big.jpg";
import project007big from "./../img/projects/007big.jpg";

const projects = [
  {
    id: "project001",
    title: "Interior design website",
    type: "Commercial project",
    stack: "HTML • CSS  • Sass • JavaScript • Bootstrap",
    discription: "The site is made using HTML, Sass, JavaScript, Bootstrap. Landscape and portrait versions for mobile are made using media-queries. Carousel is implemented using bootstrap.",
    gitHubLink: "https://github.com/UkhovAlexey/InteriorDesign",
    link: "https://ollyin.com/",
    img: project001,
    imgBig: project001big,
  },
  {
    id: "project002",
    title: "Alex Ukhov CV",
    type: "Pet-project",
    stack: "HTML • CSS • JavaScript • ReactJS",
    discription: "The site is made with ReactJS. Various hooks and components are used.",
    gitHubLink: "https://github.com/UkhovAlexey/ReactCV",
    link: "https://ukhovalexd.com/",
    img: project002,
    imgBig: project002big,
  },
  {
    id: "project004",
    title: "Human design website",
    type: "Commercial project",
    stack: "Vanilla Javascript",
    discription:
      "Human design website. The customer, who had a website on Tilda, set the task to add a feature that was not in the CMS. The problem was solved by adding Javascript code to the page.",
    link: "https://arinalazareva.com/gift",
    img: project004,
    imgBig: project004big,
  },
  {
    id: "project005",
    title: "Landscape design website",
    type: "Commercial project",
    stack: "CMS Wordpress",
    discription:
      "A small website created on the Wordpress platform. Created using standard functions and plug-ins. The decision to create on Wordpress was due to the Customer's plan to subsequently add the functionality of the online store.",
    link: "https://ollyla.com/",

    img: project005,
    imgBig: project005big,
  },
  {
    id: "project006",
    title: "Cowboy academy",
    type: "Commercial project",
    stack: "CMS Tilda • Zero-block • Animation",
    discription:
      "A website created on CMS Tilda using Zero-block and animations. Adapted for mobile devices.",
    link: "https://www.tudorcowboyacademy.ru/",
    img: project006,
    imgBig: project006big,
  },
  {
    id: "project007",
    title: "Sales improvement course",
    type: "Commercial project",
    stack: "CMS Tilda • Zero-block",
    discription:
      "The website advertises a program of sales improvement course. Created on CMS Tilda using Zero-block. Adapted for mobile devices.",
    link: "http://na-proriv.tilda.ws",
    img: project007,
    imgBig: project007big,
  },
];

export { projects };
