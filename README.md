# "Critical Index" - Front End - v1

## Description
"Critical Index" is a SaaS Whose Main Purpose is to Serve as an Assistive Compendium in Both Running and Participating in RPG/Tabletop Gaming. This is the Front End Development/Production Version of Project 2 for General Assembly's Software Engineering Immersive Program

## Relevant Links
Full-Stack:   | Link To:    | URL:
--------------|-------------|---------------------------------------------------
Front-End     | Website     | https://rscottlundgren.github.io/index-client/
--------------|-------------|---------------------------------------------------
Front-End     | GitHub Repo | https://github.com/rscottlundgren/index-client
--------------|-------------|---------------------------------------------------
Back-End      | Website     | https://critical-index.herokuapp.com/
--------------|-------------|---------------------------------------------------
Back-End      | GitHub Repo | https://github.com/rscottlundgren/index-api

## List of Technologies Used
- Browser template
- Custom-Built API
- Ruby
- Rails
- JavaScript
- HTML
- CSS/SASS
- Ajax/jQuery
- Curl
- Bootstrap
- Flexbox
- Handlebars

## Planning
Project 2 was considerably more open ended in scope than the prior project ("Tic-Tac-Toe"). Ultimately I struggled and weighed the options between three apps that I had designs for (all tumbling around in my brain space) and landed on "Critical Index". After spending some time writing out some ideas of what I, as a developer, wanted out of this site, I began the process of designing the site. The first version would rely heavily on the development of a character generator. This feature would help to inform the following features that I had in mind for the site. With that in mind, I wireframed out the site until I had a good direction to head in. These wireframes were also heavily informed by the Dungeons & Dragons 3.5e character sheet (linked below).

Once wireframed, I began the process of building out the backend API (those experiences can be found documented in that specific repo). Once the back-end API was "finished" I began working on the client-side application. In the initial testing phase I borrowed heavily from my first project, specifically from the code that I had originally built that would allow me to test authentication. With that successfully tested, I built out the remaining functions required in this project (specifically, create a character, update a character, show all characters, show one character, delete a character). Once those forms were "built" and tested, I had MVP in the best sense (black lines on a white page, ya'll!).

I reached out for guidance on how to move forward with building out the API and while I waited for a response, I began making all of the aesthetic changes that I wanted so the app would come off as more professional and presentation ready. This meant reformatting/rebuilding the forms, redesigning the buttons, creating inline forms, and a host of other changes. At this stage, what helped the most was the documentation provided by Bootstrap. In the first project I wanted to do what I wanted to do and spent a good amount of time fighting with Bootstrap and ignoring the documentation. This time, I read what seemed relevant in the documentation and it made all the difference - this time it was much less of a fight and more of a coaxing experience.

Post-presentation during resubmission there were no major hiccups. Considerations for UI improvement include the use of modals (which seem to be extremely popular) and expanding my repertoire of jQuery click events. This probably speaks to who I am as a person when the pressure's on: I'd rather trust what I know than experiment with what I don't (understandable when you only have four days to complete a project).

Overall, I hope that everyone enjoys this project and I look forward on further developing it into a version 2 and beyond.

## Challenges
The biggest challenge for me at this stage was probably scoping coupled with concern over making sure that my API was utilizing tables in a manner that made sense. I'll cover the latter more in the README for that repo. With the former, as in the first project, I dreamed rather big. This became a concept that will take me far beyond the three-month attendance in this course and it's a project that, while it could be done alone, would also make more sense to do in collaboration with others. With that in mind, I had to figure out what part of this project would be the smallest, most useful piece to code as a submission. It ultimately came down to the smallest piece I could think of, which is the character generator, but even that was a mountain of a task, so breaking that down into bite-sized bits was a challenge. Ultimately, as a result of this exercise, I realized the importance of scoping to the smallest milestones that you can come up with and planning those out in a way that makes the most sense from a timeline perspective (with only the information that I have at the time).

## Unsolved Problems
* [ ] HTML still displays linter errors and there are a couple other in other locations which need to be addressed.
* [ ] There are 3 warning linter errors that are bugging me (harharhar) which I would like to resolve.
* [ ] Generally, the next step/unsolved problem would be planning out the next table that would join the present ones in a way that makes sense for both present and future use.

## Future Goals [LIST OF FUTURE GOALS HERE]
* [ ] __Map Feature:__ Ability for DMs to map out their adventures for easier combat and adventure visualization.
* [ ] __DM/PC Campaign Link:__ Ability for DMs to link players to a campaign.
* [ ] __Campaign Library:__ Ability for DMs to post and PCs to access a library of materials relevant to the world/campaign they are playing within.
* [ ] __PC Journal:__ Ability for players to journal about each adventure experience in their PCs profile for better adventure/campaign cohesion.
* [ ] __DM/PC Read-Only Access:__ PCs should have read-only access to the Library and to select DM notes for better world building/imagination of the world. DMs should have edit access to the players character sheets for updating throughout each adventure and read-only access to the PCs journal (dependent upon player's choice).
* [ ] __TBD:__ TBD
    * [ ] TBD

* [ ] __Easter Eggs:__ Build in 'Easter Egg' features like the following:
    * [ ] TBD

## Wireframes
- [Project 2 - ERD Synopsis](https://i.imgur.com/OrPCRGM.jpg)
- [Project 2 - Character Sheet (Front)](https://i.imgur.com/1BIHkxO.jpg)
- [Project 2 - Character Sheet (Back)](https://i.imgur.com/lHVQwAn.jpg)
- [Project 2 - CI - Homescreen](https://i.imgur.com/dSXoy49.jpg)
- [Project 2 - CI - Step 1](https://i.imgur.com/gP5lAPM.jpg)
- [Project 2 - CI - Step 2](https://i.imgur.com/ENzszmJ.jpg)
- [Project 2 - CI - Step 3](https://i.imgur.com/lYgrNXn.jpg)
- [Project 2 - CI - Step 4](https://i.imgur.com/R2YMr2i.jpg)

## User Stories
- As an unregistered user, I would like to be able to sign-up with email, password, and password confirmation.
- As a registered user, I would like to be able to sign-in with email and password.
- As a registered user, I would like to be able to create a character with stats that I provide.
- As a registered user, I would like to see the character I have created after I have submitted my input.
- As a registered user, I would like to be able to update my character with stats that I provide.
- As a registered user, I would like to see the updates that I have made to my character after I have submitted my input.
- As a registered user, I would like to be able to see all of my characters by pushing a button.
- As a registered user, I would like to be able to see only one of my characters by entering that character ID and pushing a button.
- As a registered user, I would like to be able to delete a character by pushing a button on that character sheet/card.
- As a registered user, I would like to be able to sign out and return to the home page.

## Special Thanks
A special thank you goes out to the following people (in no particular, yet alphabetical by first name, order):

- Alex Beers
- Angelique Marquina
- Ben Jenkins
- Brandon DePalmaFarr
- Brian Dorgan
- Chris Kennelly
- Dan Powers
- Eron Salling
- Esat Ozen
- Frank Luis-Ravelo
- Hannah See
- Jeffrey Springwater
- Jennifer Payano
- John Lucker
- Kane Two Feathers
- Ladybug Dorgan-Lundgren
- Liz Cramer Fox
- Matt Siperko
- Megan Tsai
- Mike Finneran
- Mike Tripp
- Murat Alayurt
- Naida Rosenberger
- Nick Solie
- Randy Dorgan-Lundgren
- Rick Wilcoxen
- Ross Northrop
- Ryry Tillman-French
- Tal Aharon
- Thanh "T" Nguyen
- Trey Hilson
- Youri Francois
