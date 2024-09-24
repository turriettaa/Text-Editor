# JATE - Just Another Text Editor

## Description

JATE is a Progressive Web Application (PWA) that functions as a text editor. It allows users to create notes or code snippets with or without an internet connection, ensuring reliable retrieval for later use. The application uses IndexedDB for local storage and can be installed as a desktop application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
  
## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:

git clone https://github.com/turriettaa/text-editor.git

2. Navigate to the project directory:

cd text-editor

3. Install dependencies:

npm install

4. Build the application:

npm run build

5. Start the application:

npm run start


The application should now be running on `http://localhost:3000` (or whatever port you've configured).

Alternatively, visit the live link at:

https://text-editor-p8er.onrender.com

## Usage

1. Open the application in your web browser.
2. Start typing your notes or code snippets in the text editor.
3. Your content will be automatically saved to IndexedDB when you click off the DOM window.
4. To install the application on your desktop, click the "Install" button in the application's header.

## Features

- Create and edit text content
- Automatic saving to IndexedDB
- Offline functionality
- Installable as a desktop application
- Syntax highlighting for JavaScript (optional, if implemented)

## Technologies Used

- HTML/CSS/JavaScript
- IndexedDB for local storage
- Webpack for bundling
- Workbox for service worker and PWA functionality
- Babel for backwards compatibility
- Express.js for server-side operations

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## Acknowledgments

This project was completed as part of the [UC Berkeley Coding Bootcamp] curriculum.

Starter code was provided by the bootcamp, with key functionalities implemented by [Alejandro Turrietta].

Assisted by Amazon Q



