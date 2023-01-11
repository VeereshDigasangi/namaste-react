import React from "react";
import { createRoot } from "react-dom/client";
import restaurantList from "../resources/restaurant_list.json";
// const heading = React.createElement("h1", { id:"heading1",key: "heading1",hello:"world" }, "Rendering from parcel bundler");
// const heading2 = React.createElement("h2", { id:"heading2", key: "heading2" }, "Heading2");
/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)[Home,About, Contact, Cart]
     Body 
        - Search bar TODO later
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
    */
const Title = () => (
  <a href="/">
    <img
      alt="logo"
      className="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rjkx2ghnwagcnqjtmd5jbc"
    ></img>
  </a>
);

//Composing components
const Header = () => {
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const RestrauntCard = (props) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          props.cloudinaryImageId
        }
      />
      <h2>{props.name}</h2>
      <h3>{props.cuisines.join()}</h3>
      <h4>{props.rating}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.data.map((rest) => {
        return <RestrauntCard {...rest.data} key={rest.data.id} />;
      })}
    </div>
  );
};

const Footer = () => <h4 id="heading1">Footer</h4>;

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
