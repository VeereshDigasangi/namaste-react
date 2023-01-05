import React from "react"
import ReactDOM from "react-dom/client"
const heading = React.createElement("h1", { id:"heading1",key: "heading1",hello:"world" }, "Rendering from parcel bundler");
const heading2 = React.createElement("h2", { id:"heading2", key: "heading2" }, "Heading2");
const container = React.createElement(
  "div",
  {
    className: "container",
  },
  [heading, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

/**
 *  PARCEL FEATURES
HMR (Hot Module Replacement)
FWA (File Watcher Algorithm)
Bundling
Minify
Cleaning code
Dev and Production Build
Super fast Build Algorithm
Image Optimization
Caching while development
Compression
Compatible with older version of browser
HTTPS on dev
Dynamic Port mapping
Consistent Hashing Algorithms (To do all bundling)
Zero Config (Other bundlers have much configuration)
Tree Shaking - Remove unwanted
 * 
 */