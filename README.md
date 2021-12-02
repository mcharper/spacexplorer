# SpaceXplorer

![image](https://user-images.githubusercontent.com/7680389/144451182-5d281f3d-7f9d-42ce-946e-4a6c6f3ffa29.png)

This mini-project is something I created for a technical test recently.

The brief was to build an application using the free open SpaceX API https://docs.spacexdata.com to:
- list the most recent 50 launches
- for each launch show the launch name, date and details (I'm interpreting launch name to be the name of the mission)
- sort by launch name and date
- search by launch name (I'm interpreting this to mean search using a filter within the results returned in the original 50)
- view the details of the rocket used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses:
- React
- TypeScript
- Jest
- React Testing Library
- Material-UI
- AG Grid

The API requires no authentication and is open (from a CORS point of view).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

