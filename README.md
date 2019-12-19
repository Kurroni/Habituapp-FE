# Habituapp


## Description
"I never could have done what I have done without the habits of punctuality, order and diligence, without the determination to concentrate myself on the subject at a time." - Charles Dickens

It's easy to get motivated but it's hard to stay disciplined.

Habituapp is a perfect tool that helps you to build habits that stick. To create behavior chain that is harder to break and will lead you to achieve your personal long-term goals.
Micro gains, small wins. That's the idea.

I built it by myself with React, Node.js and MongoDB as a final project for the Ironhack’s bootcamp.

You create your small daily habits to learn consistent routines. Then you track them and got your every day to-do-list. All you have to do is maintaine the Streak - the longer one, the better.

The next features to add to the tool will be some interaction between users and option to motivate each other.

Habituapp is a great way to stay disciplined and commited when you start a new habit.


[Link Deploy](https://habituapp.herokuapp.com/)



## User Stories

-  **Signup:** As an anon I can sign up in the platform so that I can start creating or joining team
-  **Login:** As a user I can login to the platform so that I can see my profileś features
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Create New Habit** As a user I want to create new habit
-  **See my habits** As a user I can see my habits as a daily to-do list, habits can be marked as DONE
-  **Edit my habits** As a user I can edit my habits to update them due to my learnings
-  **See a habit with its total 'DONE' number of days** As a user I want to see a specific habit and my how many days I've done it, to mesure my progress and to keep motivated



## Backlog
- Add calendar to see marked 'DONE' days.
- Make habits option: weekly, monthly.
- Add categories: e.i. mind, health, family, sport, diet, self-development etc.
- Other users as a supporters with comment option


# Client

## Routes
| Path | Component | Permissions | Behavior | 
|------|--------|--| -------|
 `/signup` | HomePageComponent | public | Sign up form (navigates to Today page - create new habit) and link to login |
| `/login` | LoginPageComponent | anon only | login form, link to signup navigating to HomePage, navigate to TodayPage after login |
| `/today` | TodayPageComponent | user only | homepage |
| `/add-habit` | AddHabitPageComponent | user only | CreateHabitPage - form to add the new habit by title and navigate to TodayPage after creation |
| `/habits/edit/:id` | EditHabitPageComponent | user only | EditForm for the habit by title and navigate to TodayPage after save |
| `/habits/:id` | TodayPageComponent | user only | view of the single habit, link to EditForm |


## Components


- Signup component
  - Input: user: any
  - Output: user object
  
- Login component
  - Input: user: any
  - Output: user object
  
-Navbar component
  - Input: user object
  - Output: user object
  
- NoHabit component
  - Input: empty
  - Output: empty
  
- CreateNewHabit component
  - Input: habit: any
  - Output: habit object
  
- EditHabit component
  - Input: habit: any
  - Output: habit object

- Today component
  - Input: user object
  - Output: user object
  
- CardHabits component
  - Input: user object
  - Output: habit object
  
- DetailHabit component
  - Input: habit id
  - Output: habit object


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()

- User Service
  - user.getOne(id)
  - user.updateTheHabits (id, habitsId)
  - user.showHabits (id)
  
- Habit Service
  - habit.createOne(habitObj)
  - habit.getOne(id)
  - habit.updateOne (id, habitObj) 
  - updateDaysOfOne (id, days)
  - habit.deleteOne(id, habitObj)
  
- Cloudinary Service
  - cloudinary.imageUpload(imageFile)


# Server

## Models
```
user={
  password: String,
  username: {
    type:String,
    required: true,
    unique: true
  },
  email: {
    type:String,
    required: true,
    unique: true
  },
  habits: [{type: Schema.Types.ObjectId, ref: 'Habit'}],
  }
  
habit={
  img: String,
  title: String,
  description: String,
  days: [String]
}

```

## Data structure

### Front-end routes

- ('/signup') : signup page
- ('/login') : login page
- ('/today') : home page if loged in
- ('/add-habit') : form page to create new habit
- ('single-habit/:id') : Single habit page with statistics
- ('/edit-habit/:id') : Edit single habit page

## API Endpoints (backend routes)

## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| POST        | `/auth/signup`                | {username, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/habits`                |                              |                | 400          | Show all user's habits                                         |
| GET         | `/habits/:id`            | {id}                         |                |              | Show specific habit                                     |
| POST        | `/habits` | {}                           | 201            | 400          | Create and save a new habit                             |
| PUT         | `/habits/edit/:id`       | {image, title, description}           | 200            | 400          | edit habit                                              |
| DELETE      | `/habits/:id`     | {id}                         | 201            | 400          | delete habit                                            |

<br>


## Links


### Trello
https://trello.com/b/Z14IYCXN/habituapp

### Git
URls for the project repo and deploy
[Link Repo Server]
[Link Repo Client]
[Link Deploy]


### Slides
URls for the project presentation (slides)
