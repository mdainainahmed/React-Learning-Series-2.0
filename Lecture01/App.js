/*
const heading = React.createElement(
  "h1",                         // type
  {                             // props
    id: "heading",
    xyz: "attributeXyz",
  },
  "Hello World from React!"     // children 
);
console.log(heading);           // return an object
*/

/* 
    ------------------ NESTED Object (only 1 child) --------------

const parent = React.createElement(
  "div",                        // type
  { id: "parent" },             // props
  React.createElement(          // children
    "div",                                          
    { id: "child" },
    React.createElement("h1", {}, "I am h1 tag")
  )
);
*/


    // ----------------- SIBLING ( >1 child ) ----------------------
    
const parent = React.createElement(
  "div",                        
  { id: "parent" },             
  React.createElement(          
    "div",                      // type                    
    { id: "child" },            // props
    // childrens: array of childrens : *** Always pass unique KEY for each array element ***
    [ React.createElement("h1", {key: 1}, "I am h1 tag"), React.createElement("h2", {key: 2}, "I am h2 tag") ]
  )
);


const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root, typeof root); // return an object

root.render(parent);
// render takes jsObject and bts it creates html-element(that browser understands) from passed object type(here: "div") & render inside #root
// render will replace everything inside #root and will render parent inside it.
