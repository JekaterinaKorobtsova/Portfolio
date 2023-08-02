import React from "react";
import pizzaWeb from "../image/pizza-web.png";
import shipment from "../image/shipment.png";
import furniture from '../image/furniture-web.png';
import { RxOpenInNewWindow } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="project-content">
      <div className="project">
        <div className="screenshot-container">
        <img src={pizzaWeb} alt="pizza-shop screenshot" />
        </div>
        <div className="discription">
          <h2>Pizza Shop Project</h2>
          <p>
            This is a sample project for a pizza shop that allows customers to choose the pizza they
            prefer, customize it, and place an order. The project includes features such as menu
            display, order customization and order processing.
          </p>
          <div className="sources">
            <div className="source-code">
              <span>Code</span>
              <a
                href="https://github.com/JekaterinaKorobtsova/pizza-shop"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="icon" />
              </a>
            </div>
            <div className="source-demo">
              <span>Demo</span>
              <a href="https://pizzalicious-shop.netlify.app/" target="_blank" rel="noreferrer">
                <RxOpenInNewWindow className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project">
      <div className="screenshot-container">
      <img src={shipment} alt="shipment table screenshot" />
      </div>
        <div className="discription">
          <h2>Shipments CRUD page</h2>
          <p>
            This project is a web application that displays a list of shipments that are retrieved
            from an API and provides CRUD functionality for these shipments. The web application is
            implemented using React and Redux, and it uses Material-UI for the UI components.
          </p>
          <div className="sources">
            <div className="source-code">
              <span>Code</span>
              <a
                href="https://github.com/JekaterinaKorobtsova/CRUD-shipment-table"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="icon" />
              </a>
            </div>
            <div className="source-demo">
              <span>Demo</span>
              <a href="https://shipment-table.netlify.app/" target="_blank" rel="noreferrer">
                <RxOpenInNewWindow className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project">
      <div className="screenshot-container">
      <img src={furniture} alt="furnirure store screenshot" />
      </div>
        <div className="discription">
          <h2>Furniture Store Project</h2>
          <p>
            This is a web application where customers can explore our furniture store, browse
            through the catalog, view detailed product information, and add items to their shopping
            cart. Additionally, registered users can access their personal account page after
            logging in.
          </p>
          <div className="sources">
            <div className="source-code">
              <span>Code</span>
              <a
                href="https://github.com/JekaterinaKorobtsova/furniture-store"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="icon" />
              </a>
            </div>
            <div className="source-demo">
              <span>Demo</span>
              <a href="https://the-furniture-co-store.netlify.app/" target="_blank" rel="noreferrer">
                <RxOpenInNewWindow className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;
