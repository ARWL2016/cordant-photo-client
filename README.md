## Cordant Photo Client

This is a photo app prototype built with Angular, Angular Material and using the JSON placeholder API


### To run locally 
- clone repo
- `npm install`
- `ng serve`


## deploy 
 `npx angular-cli-ghpages --dir=dist/cordant-photo-client`

## Notes 
- To make the code more realistic, I've created a folder structure as if this is one feature in a larger app. The `_core` folder contains global services, types, permanent features of the layout. The `_shared` module would contain reusuable resources such as components, pipes, directives and modules that are declared and imported in Angular modules.
- I've used lazy loading for the main feature module. As above, this is not needed in an app this size but makes the code more realistic. 
- In the Angular docs, the standard approach to Http responses is to return an observable from the service and subscribe in the client. In this app, I'm returning a promise and using async / await in the component. In my opinion, this approach is cleaner, more flexible and more readable. 
- The design is responsive and should work on all screen sizes.
- The photos module uses the smart and dumb component approach. Data requests and logic are handled in a smart parent component `photos.component.ts`; the child components are dumb - they simply display data and return user generated events


