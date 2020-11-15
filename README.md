## Cordant Photo Client

This is a photo app prototype built with Angular v.9, Angular Material and using the JSON placeholder API

### Live site: 
Available on Heroku (this is on free dynos so can take 10-15 secs to load)
https://cordant-photo-app.herokuapp.com/

On GitHub Pages  
This is deployed as a static web app with requests to JSON placeholder from the client. However, due to CORS errors, this needs a browser plugin to work, such as CORS Unblock (https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en) 
https://arwl2016.github.io/cordant-photo-client/ 

### To run locally from /dist
- clone repo
- `npm install`
- `npm start`
- open `localhost:3001` in browser

### To run in dev 
- clone repo
- `npm install`
- `npm install -g nodemon`
- `npm run dev` OR
- `npm run server` in one terminal and `npm run build:watch` in a second terminal
- open `localhost:3001` in browser

### Notes 
- To make the code more realistic, I've created a folder structure as though the photo module is one feature in a larger app. The `_core` folder contains global services, types and the app layout. The `_shared` module would contain reusuable resources such as components, pipes, directives and modules that are declared and imported in Angular modules.
- I've used lazy loading for the main feature module. As above, this is not needed in an app this size but makes the code more realistic. 
- In the Angular docs, the standard approach to Http responses is to return an observable from the service and subscribe in the client. In this app, I'm returning a promise and using async / await in the component. In my opinion, this approach is cleaner, more flexible and more readable. 
- The design is responsive and should work on all screen sizes.
- The photos module uses the smart and dumb component approach. Data requests and logic are handled in a smart parent component `photos.component.ts`; the child components are dumb - they simply display data and return user generated events
- Paths have been added to `tsconfig.json` to clean up TypeScript imports, and to `angular.json` to clean up scss imports


