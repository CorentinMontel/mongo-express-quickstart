# ExpressJS / MongoDB quickstart

## Purpose
Simple ExpressJS/MongoDB quickstart.

## Setup
Clone this repository then go into project folder.

Install dependencies : `npm install`

Start new git repository : `git init`

## MongoDB
If you have Docker installed on your machine, just run `docker compose up`

Otherwise, installation and configuration of MongoDB is at your charge.

## NPM scripts
- `npm run build` : Build source code into `build/index.js` folder
- `npm run start` : Build source and start server application
- `npm run serve` : Build source, start server application and auto restart on file change

## Folder structure
```
- build/  : Built source goes here 
- docker/ : Docker related configurations files
- src/    : Source code goes here
```