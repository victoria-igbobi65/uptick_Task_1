# TASK MANAGEMENT API

A simple backend API that allows users create, read, update and delete their tasks.



### Technologies

<div align="center">

  <a href="">![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)</a>
  <a href="">![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)</a>
  <a href="">![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)</a>
  
  
</div>
<div align="center">

  <a href="">![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)</a>
  <a href="">![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)</a>

</div>


### Installation
 
Firstly, you need to clone the repository into your local machine
```javascript
$ git clone https://github.com/victoria-igbobi65/beerkathon.git
```
Secondly, change directory into the project file
```
$ cd chatbot 
```
Thirdly, you need to install the dependencies.
```javascript
$ npm i 
``` 
Fourthly, you need to create a `.env` file and copy the `.env.example` file to it.
```javascript
$ cp .env.example .env 
```
Finally, you need to run the server.
```java
$ npm run start
```

### Testing
To run the test
```

```

### Base URL

https://zipper-capybara.cyclic.cloud

### Usage


#### Registration

* Route: /api/v1/auth/signup
* Method: POST
* Body:
```java
{
  email: Myemail@gmail.com,
  password: mypassword
}
```

```java
* Response:
  * 201: success || Created
  * 409: error || Conflict Error
  * 400: error || Bad Request
  * 500: error || Server Error
```

#### Login
* Route: /api/v1/auth/login
* Method: POST
* Body: 
```java
{
  email: Myemail@gmail.com,
  password: mypassword
}

```
* Response
```java
  200: success
  400: error || Bad Request
  500: error || Server Error
```

#### Create New Task
* Route: /api/v1/task
* Method: POST
* Body: 
```java
{
  title: task title,
  description: task description
  status: enum["completed", "undone", "in_progress"] // string of either
  priority: enum["high", "low", "mid"] // string of either
}

```
* Response status Codes: 
```java
  201: success || Created
  401: error || Unauthorized
  400: error || Bad Request
  500: error || Server Error
```

#### Get a Task
* Route: /api/v1/task/:id
* Method: GET
* Response
```java
  200: success 
  401: error || Unauthorized
  404: error || Not Found Error
  500: error || Server Error
```

#### Get all my tasks
* Route: /api/v1/tasks
* Method: GET
* Response

```java
  200: success
  401: error || Unauthorized
  500: error || Server Error
```

#### Update a Task
* Route: /api/v1/task/:id
* Method: PATCH
* Body: 
```java
  {
    status: enum["completed", "undone", "in_progress"] // string of either
    priority: enum["high", "low", "mid"] // string of either
  }
```
* Response
```java
  200: success 
  401: error || Unauthorized
  404: error || Not Found Error
  500: error || Server Error
```

#### Delete a Task
* Route: /api/v1/task/:id
* Method: DELETE
* Response
```java
  200: success 
  401: error || Unauthorized
  404: error || Not Found Error
  500: error || Server Error
```