# Product feedback app

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Getting Started](#Getting-Started)
- [Project Structure](#Project-Structure)
- [Deployment](#Deployment)
- [Resources](#Resources)

#

### Prerequisites

- <img src="readme/nodejs.png" width="25" style="top: 8px" /> Node JS @16.X and up
- <img src="readme/npm.png" width="25" style="top: 8px" /> npm @8 and up

#

### Tech Stack

- <img src="readme/react.png" width="25" style="top: 8px" /> React @18.2.0 - front-end framework
- <img src="readme/tailwind.png" width="25" style="top: 8px" /> Tailwind @3.1.8 - CSS framework
- <img src="readme/react-hook-form.png" width="25" style="top: 8px" /> Tailwind @7.37.0 - flexible and extensible forms with easy-to-use validation.
- <img src="readme/redux.png" width="25" style="top: 8px" /> Redux @8.0.4 - A Predictable State Container for JS Apps
- <img src="readme/redux.png" width="25" style="top: 8px" /> reduxjs/toolkit @1.8.6 - The official, opinionated, batteries-included toolset for efficient Redux development
- <img src="readme/react-router.png" width="25" style="top: 8px" /> React-router @6.4.2 - Declarative routing for React apps at any scale
- <img src="readme/react.png" width="25" style="top: 8px" /> React-select @5.4.0 - A flexible and beautiful Select Input control for ReactJS
- <img src="readme/axios.png" width="25" style="top: 8px" /> Axios @1.1.2 - Promise based HTTP client for the browser and node.js

#

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone https://github.com/nikanoza/product-feedback-front.git
```

2. Next step requires install all the dependencies.

```
npm install
```

3. To see project in action

```
npm start
```

#

### Project Structure

```
|--- src
|   |--- components # reusable components
|   |---|--- index.ts # export all components
|   |--- hooks # custom helper hooks
|   |--- pages # page components folder
|   |--- services # axios request functions
|   |--- store # redux state management folder
|   |--- svg # svg components folder
- package.json     # dependency manager configurations
```

#

### Deployment

Before every deployment you need to create build file.

```
npm run build
```

after this you can use this file to deploy project on server.

#

### Resources

- [figma](https://www.figma.com/file/fB8LPhi0hrbZVbdt81G5K1/product-feedback-app?t=jmOL7pQMM9lmLKGs-0).
- [challenge](https://www.frontendmentor.io/challenges/product-feedback-app-wbvUYqjR6).
