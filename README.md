# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Installation of project launch tools

The project uses `Node.js v16.15.0`
Сheck which node version you are currently using with the command:

`node -v`

If this is `16.15.0`, then you can directly proceed to the installation of the project, else we will use nvm.
Сheck if you have nvm with the command:

`nvm --version`

If there were no problems and it displayed the version, then the next step can be skipped

Otherwise, you need to install it, this can be done by downloading the distribution kit from the link:
[nvm-releases](https://github.com/coreybutler/nvm-windows/releases)

After installation, we check its presence again by calling the command:

`nvm --version`

If everything is OK, then we run the command

`nvm list`

and check if we have the required version installed, if `16.15.0` is in the list, then we execute this command

`nvm use 16.15.0`

otherwise we download it using the command

`nvm install 16.15.0`

and then we execute the previous command

### Project installation

Тake the project by calling the command:

`npm install`

## Available Scripts

In the project directory, you can run:
npm

`npm run dev`

Runs the app in the development mode.

### Fake APi

Resources
`[localhost:8000/user](http://localhost:8000/user),
[localhost:8000/contacts](http://localhost:8000/contacts)`
Home
`[localhost:8000](http://localhost:8000)`

The page will reload if you make edits.\
You will also see any lint errors in the console.

If you already use port 8000, you can quickly replace it with any free one here [params.js](https://github.com/kotorima/takeoff-staff/blob/main/src/api/params.js)

## Login details

You can use a predefined user using the login details below, or create your own.

`email: "useremail@gmail.com"`
`password: "bestPassw0rd"`
