# Front-end recruitment challenge: Activity

## Implementation details

### Environment
* Used bower for managing front end packages.
* Used npm for installing the several dev components needed.
* Used gulp as a task manager.
* Choosen requireJS for javascript module management.
* Javascript used is ES5, although features like promisses are used, assuming it would be used on recent browsers. A polyfill could be implemented, although I did not do it.

### Theme
The application uses a free to use bootstrap theme. This is chosen because it would fill the need, but also for ease of implementation.
The original theme can be found here: https://blackrockdigital.github.io/startbootstrap-freelancer/

## To Set Up application 

Run the following commands
```
npm install
bower install
```

### For dev mode
```
gulp dev
uncomment the correct code in index.html
```
### For dev in watch mode
```
gulp dev:watch
```
### For prod mode
I am having a config error while running this, and did not had time to finish. So please avoid running prod mode
```
gulp prod
uncomment the correct code in index.html
```

## Improvements 

Generate different index.html files for each enviroment

Add a chart for displaying the amount of hours done in a visual manner (did not had time)

Add the recommendation view