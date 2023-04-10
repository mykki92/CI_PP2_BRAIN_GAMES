# Brain Games
(Developer: Michael Roberts)

![Mockup image](docs/am-i-responsive.png)

[Live webpage] (https://mykki92.github.io/CI_PP2_BRAIN_GAMES/)
## Table of Contents
#
0. [Introduction](#introduction)
1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requrements and Expectations](#user-requrements-and-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Device testing](#device-testing)
    6. [Browser compatibility](#browser-compatability)
    7. [Testing user stories](#testing-user-stories)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)

## Introduction
Brain Games is a website that features logic, memory and knowledge based JavaScript games, targeted to users that want quick and fun games to play that will keep their mind active during a break at work for example. It is designed to be an interactive platform on which more and more games will be added over time to keep users interested and engaged.

## Project Goals 

The goal of this project is to create an interactive game platform featuring JavaScript games that are clearly presented, user friendly, engaging and challenging.

### User Goals

- To play games that are engaging and challenging
- Be able to learn something while playing 

### Site Owner Goals

- Develop an expandable Javascript game platform
- Provide fast and engaging content to users
- Make design simple and user-friendly
- Make games responsive and accessible
- Gain feedback from users

## User Experience

### Target Audience

- Users that want to be entertained and challenged
- Users with an interest in general knowledge
- Users with an interest in logic/memory based games

 
### User Requirements and Expectations

- Simple and attractive design
- Clear and simple instructions where necessary
- User friendly navigation and accessible features
- Responsiveness on range of devices and screen sizes
- Feedback from page to be clear and brief
- Means of contacting the developer
- Having an option to leave feedback

### User Stories

#### First-time User
0. As a first time user, I want to understand what the game is about
1. As a first time user, I want the game rules and controls to be easily understandable
2. As a first time user, I want the game to be engaging and interactive
3. As a first time user, I want the game to be challenging
4. As a first time user, I want to be able to see my progress through the game 
5. As a first time user, I want the game to be responsive across different devices and screen sizes 

#### Returning User
6. As a returning user, I want to learn something playing the game
7. As a returning user, I want to be able to restart the game when I finish
8. As a returning user, I want to be able to leave feedback with the developer
9. As a returning user, I want to know that my feedback has been sent

#### Site Owner
10. As the site owner, I want users to be able to interact with the site content with ease
11. As the site owner, I want users to be engaged and want to return to the site
12. As the site owner, I want users to feedback their experience with the site and any ideas for further development

## Design

The site is designed to be an engaging and interactive game platform, with simple and accessible features

### Design Choices

### Colour

Colour was kept to a minimum so as not to overload the screen when the user is playing the games. Using black text with a white background, contrast is kept to a minimum when the user is flipping the picture cards in the memory game. Color schemes for game buttons invert on hover so the user knows it is an interactive button.

### Fonts

The chosen font for this site is Righteous from Google Fonts, chosen for its easy readability and playful tone. Cursive was selected as the fallback font.

### Structure

The page is designed with a simple header featuring the logo icon, site name and navigation menu which is consistent across all pages. Below the header is a short section with an introduction to the game followed by a large game area that is the focus of the page, making both navigation of the pages and interaction with the games easily understandable and accessible.

### Wireframes

<details><summary>Memory Game</summary>
<img src="docs/wireframes/wireframes-memory-game.png">
</details>
<details><summary>Quiz</summary>
<img src="docs/wireframes/wireframes-quiz.png">
</details>
<details><summary>Contact</summary>
<img src="docs/wireframes/wireframes-contact.png">
</details>

## Technologies Used

### Languages
- HTML
- CSS
- JavaScript

### Frameworks & Tools
- Git
- GitHub
- Gitpod
- TinyPNG
- Balsamiq
- Google Fonts
- Font Awsome
- Favicon
- EmailJS
- AmIResponsive

## Features

## Validation

### HTML Validation

### CSS Validation

### JavaScript Validation

### Accessibility

### Performance

### Device testing
The website was tested on the following devices:
- Google Pixel 7
- Samsung Galaxy A7 Lite Tab
- HP Laptop 14
- Apple iMac

### Browser compatability
The website was tested on the following browsers:
- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

### Testing user stories

## Bugs

| **Bug** | **Fix** |
| ----------- | ----------- |
| Memory game cards cannot be flipped again after game has been won and restarted | Enclose game variables and functions inside a function called startGame() and call that function when restart button is pressed |

## Deployment
The website was deployed using GitHub Pages by following these steps:
1. In the GitHub repository navigate to the Settings tab
2. On the left hand menu select Pages
3. For the source select Branch: master
4. After the webpage refreshes automaticaly you will see a ribbon on the top saying: "Your site is published at https://mykki92.github.io/CI_PP2_BRAIN_GAMES/"

You can fork the repository by following these steps:
1. Go to the GitHub repository
2. Click on Fork button in upper right hand corner

You can clone the repository by following these steps:
1. Go to the GitHub repository 
2. Locate the Code button above the list of files and click it 
3. Select if you prefere to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
7. Press Enter to create your local clone.

## Credits

### Media
Images courtesy of Shutterstock.com:
- [bear](assets/images/bear.jpg)
- [card-back](assets/images/card-back.jpg)
- [dolphin](assets/images/dolphin.jpg)
- [elephant](assets/images/elephant.jpg)
- [gorilla](assets/images/gorilla.jpg)
- [kitten](assets/images/kitten.jpg)
- [red-panda](assets/images/red-panda.jpg)
- [tiger](assets/images/tiger.jpg)
- [wolf](assets/images/wolf.jpg)

Images courtesy of Pexels.com:
- [penguins](assets/images/penguins.jpg)

## Acknowledgements
- My Code Institute Mentor Mo Shami for his guidance and advice.
- Code Institute learning modules and tutor support.
- W3 Schools
- GitHub tutorials