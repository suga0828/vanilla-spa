# Vanilla SPA

https://dev.to/rishavs/making-a-single-page-app-in-ye-good-olde-js-es6-3eng

- Post for specific id : containing details of that post. Shows the dynamic url parsing.
- About: Containing just some text. This is to showoff the router
- Secret : This page is not in my composed routes and will be used to show the 404 handling.
- Register: Contains a form and on clicking a button, shows the form data.

Each page in my app itself will have the following structure:

- Navbar
- Content section
- Footer

Each route in my app has the following structure:

- Resource
- Identifier
- verb

The article will focus on the following main aspects of the spa;

- The Router (using url hash) and
- Templating (using ES6 template literals) and
- The project architecture (using ES6 modules)

## Development

```
  yarn start
```
