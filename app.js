import React from "react"
import ReactDOM, { createRoot } from "react-dom/client";
// const heading = React.createElement("h1", { id:"heading1",key: "heading1",hello:"world" }, "Rendering from parcel bundler");
// const heading2 = React.createElement("h2", { id:"heading2", key: "heading2" }, "Heading2");
const name = "Veeresh";
const Title = () => <h1 id="heading1">Namaste {name}</h1>;

const root = createRoot(document.getElementById("root"));

//Composing components
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2 className="title" id="namaste">
        Namaste React functional component
      </h2>
      <h2>This is heading2</h2>
    </div>
  );
};
function tick() {
  const element = <h1>I'm a clock{new Date().toLocaleTimeString()}</h1>;
  root.render(element);
}

// root.render(<HeaderComponent />);

// setInterval(tick, 1000);