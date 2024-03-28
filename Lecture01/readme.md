
# Lecture 01

Basic important Terminologies & Questions before starting React.



## Terminologies

***1. Emmit***
- Is a set of plug-ins for text editors like vsCode that allow for high-speed coding and editing in HTML, XML, XSL, and other structured code formats via abbreviations and shortcuts.

***2. CDNs : Content Delivery Networks***
- Is a network of servers that are spread out geographically to help improve web content delivery.
- When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If the user is located far from that server, it will take a long time to load a large file, such as a video or website image. CDNs store website content on servers that are geographically closer to the users, so that the content can reach their computers much faster.
- CDNs play a crucial role in optimizing website performance, scalability, security, and user experience, making them an essential component of modern web infrastructure.



## Questions

***1. What is "crossorigin" in script tag?***
- The "crossorigin" attribute is used in HTML to specify how resources (such as images, scripts, stylesheets, fonts, etc.) should be handled when they are loaded from a different origin (domain, protocol, or port) than the current web page.
- **CORS (Cross-Origin Resource Sharing) Policy Compliance:** Browsers have a security feature called the Same-Origin Policy, which restricts web pages from making requests to resources (like scripts or stylesheets) from different origins. The crossorigin attribute helps comply with the CORS policy by allowing resources to be loaded from other origins while specifying how they should be treated.
- **Loading External Resources Securely:** When loading resources like scripts or fonts from a different domain, it's essential to ensure that they haven't been tampered with or compromised. The crossorigin attribute provides options for securely loading such resources, such as specifying that they must be loaded with CORS headers or enforcing strict CORS checks.
- **Preventing Security Vulnerabilities:** Without proper CORS handling, loading resources from other origins can pose security risks, such as allowing malicious scripts to access sensitive data on the web page. The crossorigin attribute helps mitigate these risks by enforcing restrictions on cross-origin requests, ensuring that only trusted resources are loaded and executed.
- **Avoiding Cross-Origin Errors:** When attempting to load resources from different origins without proper CORS handling, browsers may generate errors or block the requests altogether. By using the crossorigin attribute correctly, you can prevent these errors and ensure that resources are loaded successfully across different origins.


***2. What is diference between React and ReactDOM?***

- **React** is core library, primarily concerned with defining react components, managing state, and rendering UI elements. 
- **ReactDOM** is a package that provides the integration between React and the DOM (Document Object Model). It contains methods for performing DOM operations such as rendering React components to the DOM and for interacting with the DOM.


***3. What is difference between react.development.js and react.production.js files via CDN?***

- **react.development.js:** This file is intended for development environments. It includes additional debugging information, such as warnings and error messages with specific line numbers and helpful stack traces. It is larger in size but provides more detailed feedback, making it suitable for debugging and development purposes.
- **react.production.js:**  This file is optimized for production environments. It has been minified and stripped of unnecessary code, including debugging information. It is smaller in size and more efficient for deployment in production. However, it lacks the detailed error messages and debugging capabilities present in the development version.


***4. What is async and defer?***

- ***'async'*** and ***'defer'*** are attributes used in HTML script tags to control when and how scripts are loaded and executed.
- **'async' Attribute:**
  - When you include the async attribute in a script tag (***<script async src="script.js"></script>***), it tells the browser to fetch the script asynchronously while continuing to parse the HTML document. 
  - Scripts with the async attribute are downloaded asynchronously, meaning they do not block the HTML parsing process. They are executed as soon as they are downloaded, which may occur out of order with respect to other scripts or elements on the page.
  - This is useful for scripts that don't depend on other scripts or the DOM being fully loaded and can be executed independently. However, it's essential to ensure that scripts with dependencies are loaded in the correct order when using async.

- **'defer' Attribute:**
  - The defer attribute (***<script defer src="script.js"></script>***) also allows scripts to be downloaded asynchronously, but it defers execution until the HTML parsing is complete. 
  - Scripts with the defer attribute are executed in the order they appear in the document, after the HTML parsing is finished but before the ***'DOMContentLoaded'*** event.
  - Unlike scripts with the async attribute, scripts with defer maintain their order of execution relative to other scripts and DOM elements on the page. This makes it suitable for scripts that rely on the DOM being fully loaded or need to be executed in a specific order.
