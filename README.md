# Burgle!
Created by Madison Tolentino and Alex Wedding

## 🚀 Mission statement
Burgle! was inspired by the regulation/time management strategy for people who suffer from executive dysfunction presented by a youtube channel called "[The Thought Spot](https://www.youtube.com/watch?v=5FHE8AWMKxQ)." In the linked video, a mental health professional discusses how visualizing your day and tasks as components of a sandwich not only simplify your routine, but help people with neurodivergent-structured brains tackle executive dysfunction by focusing on one general task for the day.

---
This includes making space for: 

* A morning routine (*the top bun*) 

* Focusing on one or two aspects of your responsibilities, ex. house chores, work, etc. (the *meat* of the sandwich) 

* One "cheese" or way to wind down/reward yourself in the day (*preferably before the bottom bun*).

* A bedtime routine (*the bottom bun*)

---
**Burgle!** takes this one step further and visualizes this into an app that allows users to build their own routines and plan out their tasks with their own custom burger. 

Users will be able to create a mandatory morning and night routine, along with including one way to wind down (*the "cheese"*) and one way to reflect (*A new component, the "sauce"*) to prevent burn out and to maintain emotional well-being. By creating new tasks that reflect on the aim of the user's routine, users who find it difficult to accomplish everything they have to get done **will** be able to both manage their obligations and recharge their energy as to not hurt themselves in attempting to meet neurotypical productivity "quotas". 

Burgle! aims to empower neurodivergent users by showing there are ways to structure your life, and regulate yourself in order to tend to your obligations without having to burn yourself out in order to survive or make ends meet. 

## API & React Router 
This application will use the ZenQuotes API. ZenQuotes' mission within Burgle! is to encourage users using quotes that generate above their burger visual. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

Link to API documentation: [ZenQuotes API](https://docs.zenquotes.io/zenquotes-documentation/#api-structure)

Here's what the fetch link to the API would look like:
https://zenquotes.io/api/[mode]

mode can fetch: the author, the quote of the day, or any random quote

* To get the database of quotes from a distinct author: "https://zenquotes.io/api/quotes/author/abraham-lincoln/"

* To get random quotes from the API: "https://zenquotes.io/api/random"

* To get a daily feature quote from the API: "https://zenquotes.io/api/today/[api-key]"


## 👩‍💻 MVP User Stories & Frontend Routes
**Burgle!** will feature the following frontend routes and core features:

1. In the home page, users have the option to use a previous burger template or create a new burger routine. Users can also toggle on/off an inspirational quote floating above their burger. 

2. In the new burger creation page, which users can access by tapping a plus by an existing burger template with the label "add burger", users will be able to add ingredients to their burger and create task lists represented by a specific ingredient (ex. the top bun of the burger is meant to hold tasks that only concern what you need to do to get yourself ready in the morning).

3. By tapping or clicking on an ingredient, users can enlarge the selected ingredient to see what tasks they have set out before them. To check off a task, users simply click the box at the left side of the listed task. 


## 🤔 Stretch User Stories
If time permits, the following stretch features will be implemented in order of priority:

1. Users will be able to see a bite mark on the ingredient in which they've completed all their tasks.

2. Users will be able to hear (optional/toggleable) satisfying sound effects of the burger being built and being bitten into.

3. Users will be able to toggle dark mode.

4. Users will be able to change the text size/text color for visibility/the text font itself for accessibility.


## 📆 Timeline for reaching MVP in 1 week
To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

Day 1

 Ticket description and due date
 Ticket description and due date
 Ticket description and due date
Day 2

 Ticket description and due date
 Ticket description and due date
 Ticket description and due date
Day 3 (MVP due by the end of the day)

 Ticket description and due date
 Ticket description and due date
 Ticket description and due date
Day 4

 Ticket description and due date
 Ticket description and due date
 Ticket description and due date
Day 5

 Ticket description and due date
 Ticket description and due date
 Ticket description and due date
Wireframes of each page in your application
Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

[Wireframe for page 1]

![Burgle WireFrame](./conceptcontent/Screenshot%202024-08-21%20at%2015.14.07.png)

