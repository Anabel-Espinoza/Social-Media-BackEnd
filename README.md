# Social-Media-BackEnd

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

This project contains the back-end for a social network API. It uses a MongoDB dabase, and mongoose and express packages to create and manage users and thoughts. In addition, it allows users to react to friends’ thoughts, and create a list of friends.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation

To run the code locally:<br>
>Clone the repository.<br>
>Download required packages: npm i.<br>
>Run the server: node index.<br>
>The local application may be accessed on your browser using: http://localhost:3001/


## Usage

The application has the following user and thoughts routes:
- User routes `/api/users`: create new user, get all users, get user by Id, update user by Id, and delete user by Id.
In addition, user routes help to add or remove a  friend id into the user's friends array.
- Thought routes `/api/thoughts`: create new thought, get all thoughts, get thought by Id, update a thought by Id, and delete a thought by Id. 
In the thought routes, there are also options to add and remove a reaction to the thought's reaction array.

The video shows the application funcionality: https://drive.google.com/file/d/1-PrTpEU0w6D6Ga6FDI10IAX0mCsWogXL/view.


## Credits

- Module mini-project used as reference.
- Packages and documentations:
    * Express: https://www.npmjs.com/package/express
    * Mongoose: https://mongoosejs.com/

- Instructor: Saurav Khatiwada

## License

This Project is covered by the MIT License.