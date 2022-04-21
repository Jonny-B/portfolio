This express app is for my personal portfolio. 

It is broken into sever independed react apps that can be developed independently and then served up using the express app.
The root route will server up the portfolio site itself.

To add a new app you must first run `yarn build` within the app itself.
Then you must copy the conents of the build folder to `src/backend/builds` and create a new directory with your apps name
Then you must configure express to know how to serve up the new app.
    1. open app.js and let express know to load your apps static files `app.use(express.static(path.join(__dirname,'./builds/galaxySim')))`
    2. Then create a new route file in `src/backend/routes`
    3. Finally configure app.js to route requests to the new route.

    