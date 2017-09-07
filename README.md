# Flashcard-Generator
----------
## Table of Contents 
1. [Overview](#overview)
2. [Technologies](#technologies)
3. [Local Installation](#installation)
4. [App Display](#display)

<a name="overview"></a>
## Overview 
Flashcard-Generator is a Node CLI application that utilizes the inquirer npm package to prompt user a series of flashcard questions & answers. User also has the option to add custom questions after the first round of the game. The application has two versions: basic-card-game.js and cloze-card-game.js. The basic version has questions in this format: "Who is the first president of United States ?" The cloze version has questions in this format: "...is the first president of United States."


<a name="technologies"></a>
## Technologies

 - Node
 - Constructor function 
 - Inquirer (npm pacakge)

<a name="installation"></a>
## Local Installation

### Step 1: Git Clone

Clone Flashcard-Generator to your local git repo like the following:

> git clone https://github.com/lawrencel13110123/Flashcard-Generator

The Flashcard-Generator project and its files should now be in your project folder.

### Step 2: Install Dependencies

Install the following dependencies listed in the `package.json` file: 

> npm install

Once completed, you will see a `node_modules` folder in your local repo.

The dependencies should now be in the local `node_modules` folder.

### Step 3: Launch app 
Via terminal type in these bash command once you are in the Flashcard-Generator root directory 

To launch the basic version 

> node basic-card-game.js

To launch the cloze version, type in the following command instead

> node cloze-card-game.js 

<a name="display"></a>
## App Display

### Basic Card Game

![Basic Card Game](/basic_demo.gif)


### Cloze Card Game

![Cloze Card Game](/cloze_demo.gif)
