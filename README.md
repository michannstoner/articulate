## ARTICULATE.
A solo final project by [Michann Stoner](https://github.com/michannstoner). Original project spec can be found [here](https://frontend.turing.edu/projects/module-3/niche-audience.html).

### Table of Contents
* [Description](#description)
* [Setup](#setup)
* [Running Tests](#running)
* [Technologies](#technologies)
* [Planning](#planning)
* [Reflections](#reflections)
* [Future Project Plans](#future)


### Description
Maybe you aren't feeling confident in your lexicon, maybe you're trying to tighten up that resume to sound ✨extra✨ professional, or maybe you just love words! ARTICULATE. is a word search application, where users can search for a word to see its definition, pronunciation, synonyms, or see it used in an example. Users can also add a word to their favorites, and view the favorites section to be able to come back to a word. 


### Main Page
![](https://media.giphy.com/media/dhrOjLyEpHT0X0HYqn/giphy.gif)

### Favorites
![](https://media.giphy.com/media/I7kqAuv2jlFrg0INjb/giphy.gif)

### Mobile / Responsive
![](https://media.giphy.com/media/2cI5cvSoPUtdCazeOp/giphy.gif)

### Accessibility Audit
<img width="371" alt="Screen Shot 2021-06-14 at 9 38 15 AM" src="https://user-images.githubusercontent.com/76269802/121919504-4e23fd00-ccf4-11eb-8087-20ae992eb7b3.png">

### Setup
* From your terminal, `git clone` this repository  
* `cd` into the project directory
* Run `$npm install` to install dependencies
* Run `$npm start`
* Your default browser should automatically open ARTICULATE.

OR

* View deployed application [here]

### Running Tests
* Once in project directory, run `npx cypress open` 
* In the `integration` directory, click on the file you'd like to see the testing for 
* A Cypress window should open
* Tests should run automatically 

### Technologies
<p>
  <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>

  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>

  <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

  <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>

  <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>

  <img alt="Cypress.io" src="https://camo.githubusercontent.com/bd9c528263673db09f67bcf3445ba8e5512cfb6829e966a31ef7a378933b231a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d437970726573732e696f2d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d637970726573732e696f266c6f676f436f6c6f723d7768697465"/>
</p>

### Planning 
* [Wireframe](https://github.com/michannstoner/articulate/files/6649534/articulate-wireframe.pdf) made using Figma

* Project planning via [GitHub Projects](https://github.com/michannstoner/articulate/projects/1)



### Reflections

#### Project Evolution
I was so excited to get started on this project. Initially, I struggled coming up with a "niche" enough topic, where I could get pretty specific about my users. But once I found the words API, I knew I was going to have fun with it! I built out my wireframe after finding some inspiration, and completed my project board on day one. I worked through the basics of the component structure fairly quickly, but hit a few snags with how information was coming in from the API with certain words. I spent some time analyzing the data, forming some plans, and then continued to work. I used my project board to guage how long my remaining tasks would take, and ended up completing styling and functionality before moving on to Cypress testing. All in all, I feel like I stayed on track and wrapped the project up right in the amount of time I had expected. 

#### Wins 
I'd say some wins for this project would be how quickly the data came through to be displayed on the DOM. It's been fun to observe my own progress with building React applications from scratch. Five weeks ago it was a little fuzzy and pretty slow-moving. I also really enjoyed styling this project a lot. 

#### Challenges
A challenge I encountered on this project was dealing with the data from a public API. I had to fetch my data for each search query, rather than being able to fetch all of it in `componentDidMount` and storing it in state, then iterating through it to find a word match. Because of that, error handling and navigation was a little different than what I've done in previous projects. Also, I found the data to be somewhat inconsistent - where some words have synonyms/examples/pronunciation, etc. and others did not, so I had to get creative with how to take care of those inconsistencies. 

### Future Project Plans 
* Have more information in the favorites section - be able to click a word and view the details again 
* An option to randomize words! 
* Setting up local storage so that favorited words persist on page reload 
* An audio clip of the word pronunciation 
* More definition options 
