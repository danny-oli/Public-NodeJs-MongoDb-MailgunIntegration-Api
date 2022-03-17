
### Access all the routes by clicking the button below, or at localhost:3000/docs (swagger)!
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=NodeJs-MongoDb-MailgunIntegration-Api&uri=https%3A%2F%2Fgithub.com%2Fdanny-oli%2FNodeJs-MongoDb-MailgunIntegration-Api%2Fblob%2Fmain%2Fsrc%2Finsomnia%2FInsomnia_2022-02-16.json)



# <a target='_blank'><img align="left" width=50px height=50px src='https://user-images.githubusercontent.com/54849358/79355817-8d9a6200-7f14-11ea-9c3c-5ba42c4ce12a.png' /></a> NodeJs - MongoDb - Mailgun - API

<br>

## <a target='_blank'><img align="left" width=40px height=40px src='https://user-images.githubusercontent.com/54849358/79353989-2f6c7f80-7f12-11ea-8f2a-39aaf259ad81.png' /></a> Welcome to my Node.Js API

 In this API you are able to send e-mails to multiple users with a single request 
through external service Mailgun api.
It is also possible to check the successfully and failed emails sent via the /mailgun/getSentMailStatus route.
 
 <br>
 
## <a target='_blank'><img align="left" width=40px height=40px src='https://user-images.githubusercontent.com/54849358/79358887-372f2280-7f18-11ea-9c5f-a1da33e7a719.png' /></a> Features

### API Setup

- Restful API using json;
- Node.Js;
- Express.Js;
- MongoDb;
- Nodemoon;
- Mongoose;
- Jest;
- Swagger;
- Insomnia;
- Dotenv;
- Uuid;

### Functional Requirements
- Locked Routes using user integrationKey (received when creating a new User);
- Complete User CRUD;
- Able to send HTML content through Maingul API;
- Multiple destinatary
- Get all sent e-mails to double check if it worked as intended;

### Not Functional Requirements
- Use [Mailgun](https://www.mailgun.com/) as e-mail provider;
- Use [MongoDB](https://mongodb.com) as a NoSql database;
- Jest testing for atleat 1 service file;
- Restful API;
- Environment variables;

### Documentation

- [Swagger](https://swagger.io/) documentation for easy testing.

<br>


## :rocket: Start the project!

- Start by cloning the repo.
- Install project dependencies:
```
yarn install
```
- With everything setup, duplicate the .env.example file to a new file called .env 
- Run application testes with the command:
```
yarn test
```
- Run application with the command:
```
yarn dev
```
- At the end, you can confirm that first jest test failed because it was sent to a non registered email address, and the second test passed because it was sent to my personal email address which is registered on the platform.

<br> 

## :rocket: Insomnia testing!

Api Routes explained below

  ROUTES                    |     HTTP   |      DESCRIPTION        | 
-------------------------------- | ----------------- | --------------------- | 
/user/createUser             |       POST        | Create User           | 
/user/findUsers              |       GET         | Get Users             | 
/user/findUserById/:id       |       GET         | Get User by Id        | 
/user/updateUser/:id         |       PUT         | Update User           |    
/user/deleteUser/:id         |       DELETE      | Delete User           |
/mailgun/sendMail            |       POST        | Send Mail             |
/mailgun/getSentMails        |       GET         | Get Sent Mails        |

<br>

*Thanks for giving me this chance. I hope you like this API code sample. I am available if you have any questions about the project.*

<br>

https://www.github.com/danny-oli
