# Deploying a Simple Facial Recognition App to the Internet

The aim of this guide is to show you how easy it is to use services provided by AWS, to create and deploy AI-based apps to the internet.

For a demonstration of what you're going to build, head over to https://dev.d2m5t2je1ksyn5.amplifyapp.com/ and upload an image of a celebrity (try this one https://imgur.com/a/qyewBJ6). The app should tell you who the celebrity is. 

The following steps will allow you to create a simple Face Recognition app from scratch yourself, and put it on the internet for others to use. The app takes uploaded images and checks if there are any celebrity faces in the photo. 

If you're stuck, feel free to join the Disord and get some help: 
https://discord.gg/XYSxrms


You'll need to download an install a code editor, like Visual Studio Code

- These instructions work best using WSL or Linux - follow this guide up to 11 minutes: https://www.youtube.com/watch?v=_fntjriRe48
- You'll need node JS and NPM, so install those: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

You'll need to run the following commands in your terminal, which you can access via clicking on the small warning icon at the bottom of the VSCode editor - see this guide for more help on using the integrated VSCode terminal https://code.visualstudio.com/docs/editor/integrated-terminal 

### Create your boilerplate React app

We're going to start by creating a default React app. This will have all of the configuration and boilerplate code we need to start working.

`npx create-react-app face-recognition`
`cd face-recognition`
`npm start` and then head to https://localhost:3000 to check the React app is running correctly!

### Install amplify
We need to install a few amplify packages:
- `npm install -g @aws-amplify/cli`
- `npm install aws-amplify`

### Configure amplify
We now need to do some amplify configuration. 
- If the following 2 steps aren't intuitive, you can take a look at this documentation and follow the video guide there: https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli

- `amplify configure`
- `amplify init`

### Add some amplify services 
- `amplify add auth` - accept the default options here
- `amplify add predictions` - again, accept the default options

### Start coding!
Check out src/App.js in this repository to see the code you're going to need to add to get your celebrity face recognition app working. 

### Go live on the internet
- `amplify add hosting` - accept all the default options 
- `amplify publish` - push your work to the internet. Check out the link that gets returned in the terminal to see your app live on the internet.


