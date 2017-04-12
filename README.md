# Front-end recruitment challenge: Activity

## Implementation details

### Environment
* Used bower for managing front end packages.
* Used npm for installing the several dev components needed.
* Used gulp as a task manager.
* Choosen requireJS for javascript module management.
* Javascript version used is ES5, although features like promisses are used, assuming it would be used on recent browsers. A polyfill could be implemented, although I didn't do it.

### Theme
The application uses a free to use bootstrap theme. This is chosen because it would fill the need, but also for ease of implementation.
The original theme can be found here: https://blackrockdigital.github.io/startbootstrap-freelancer/

### Implementation
These are some of the impressions I got while performing the implementation of the application:
* The patients overview sugggestes sorting on the amount of exercise made for a person. That information would ideally come from the API while retrieving the list of patients. That would allow us to prevent multiple requests. However as it was, I had to "prepare" the information before handing it out to the grid. That meant that I had to do a new request for each pacient. On a big list of patients it would be a big strain. One way of preventing it, would be by performing some sort of paging into the results before sending it to the grid. The sorting itself, and because the models are ready for it, is just adding the column definition to the grid. It is however not implemented as only later I realized it was missing and was too late for adding it.
* The display of the information of the patient on the modal is currently just a text only. The intent was to display a stacked bar chart for the day, however there was no time.
* There was an intent to develop the suggestions on which activities to perform, and the placeholder for that has been assigned to the Patients model. However there was no time for it.
* I followed an MVC (Model - View - Controller) approach on the application. The views are the placeholders in the HTML code. Many of those placeholders are hard coded. This could be improved by implementing an empty placeholder and add a ViewModel to prepare the data to display
* The application should allow for development and production ready code, however I run into a configuration problem while running the prod mode and decided not to waste time debugging it. This however would be required to fix to be production ready.
* Also while generating the prod mode, it would be benefitial to create different index.html templates that would be generated differently according to the environment. This would prevent commenting / uncommenting code on that file.
* There are currenlty no tests on the application. It would be another rewquirement to make it production ready.


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
