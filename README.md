# Component Creation and Props
Context API Implementation

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
Scenario
You are tasked with building a functional Todo application. Instead of relying on prop drilling or a complex third-party state management library for this scale, you will leverage React’s Context API to manage various aspects of the application’s state. This includes managing the list of todos, current visibility filters, and a simple theme.

This lab will provide practical experience in designing multiple contexts, implementing providers, consuming context values in components, and handling more involved state updates. You will also explore basic persistence and optimization considerations with Context.


### The challenge

- Design and implement multiple, independent contexts for different pieces of global state.
- Create and use Context Providers to make state and dispatch functions available throughout the component tree.
- Consume context values and functions in components using the useContext hook.
- Manage complex state (e.g., an array of objects, filter states) using useState or useReducer within context providers.
- Implement features requiring interaction between different contexts (e.g., filtering todos).
- dd a persistence layer to a Context-based application (e.g., using localStorage).
- Understand basic performance considerations when working with Context API.

### Links

- Assignment URL: https://ps-lms.vercel.app/curriculum/se/416/lab-3
- Github URL: https://github.com/traceynicole71-cloud/Lab-10.3-Context-API-Implementation


## My process
 My process was to develop code by following the activity tasks step-by-step. I then took it a step further to ask AI to help me make corrections that I could not identify at the end of coding. 


### Built with
- React
- CSS
- Typescript
- Tailwind


### What I learned

I learned how to use a plethora of React methods to produce a clean App

### Continued development

Continued development for me is to still pay attention to importing and exporting that links each code file to the appropriate others. I also want to continue to develop in my usage of Tailwind.

### Useful resources

- [Fullstack Advanced Youtube] https://www.youtube.com/watch?v=AA8RP0z_CYY
- [Dave Gray Youtube Context API react + Typescript Tutorial] https://www.youtube.com/watch?v=05ZM4ymK9Nc
- [DAve GRay Memoization and to Memoize Youtube Tutorial] https://www.youtube.com/watch?v=TWUV_LRVX24
- Jeffrey Leak, Computer Scientist and Senior Software Engineer V


### AI Collaboration

I the Github co-pilot to make sure my Typescript files were configured correctly, and to help me insert athe sun and moon emoji in the app. I also used it to help find error at the end of coding when  I couldn't find the error that was preventing the theme colors from populating. I used Google Gemini to provide the code to create the pink, green, and gray heme for the card.  

## Acknowledgments

Thank you to Jeffrey Leak for helping me to make senses of React concepts and methods.

