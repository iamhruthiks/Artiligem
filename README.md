# Artiligem

Artiligem is a full-stack (MERN) AI web application designed to empower creativity and enhance productivity through the integration of advanced AI technology. Leveraging Google’s Gemini API, Artiligem delivers a powerful suite of tools specifically tailored for writers, developers, and anyone in need of intelligent content generation.

## Features

- **Authentication:** The application includes user authentication functionality, allowing users to register and log in securely.

- **Authorization:** Access to the tools requires users to be logged in, and certain actions are restricted to ensure that only authorized users can access the tools.

- **Responsive Design:** The application is designed to be responsive, ensuring a seamless and enjoyable user experience across various devices and screen sizes.

- **Summary Generator:** Quickly generate concise summaries from lengthy texts, making it easier to grasp essential information.

- **Paragraph Generator:** Produce high-quality, coherent paragraphs from prompts, ideal for content creation and brainstorming.

- **Chatbot:** Engage with our advanced AI chatbot that assists with inquiries, provides inspiration, and supports a variety of tasks.

- **JavaScript Code Generator:** Generate efficient, functional JavaScript code snippets to streamline your development workflow.

## Technologies Used

- **HTML5:** Fundamental for structuring web content, providing the backbone for the application.

- **CSS3:** Important for styling and layout, significantly affecting user experience but dependent on HTML structures.

- **JavaScript:** Essential for both front-end and back-end development, powering interactivity and server-side logic.

- **React:** A JavaScript library for building efficient user interfaces with reusable components.

- **Node.js:** Enables server-side scripting with JavaScript, crucial for building scalable applications.

- **Express.js:** Key framework for handling server-side routes, middleware, and APIs effectively.

- **MongoDB:** A NoSQL database that stores data in flexible JSON-like documents.

- **MVC (Model-View-Controller):** A design pattern that separates the application into three interconnected components, improving organization and scalability. The model handles data, the view is responsible for the UI, and the controller manages user input and interaction.

- **REST APIs:** Standards for enabling communication between web services over HTTP.

- **Gemini API:** The Gemini API key is a unique identifier used to access the Gemini API.

- **Google Analytics 4:** Useful for tracking and analyzing website traffic and user behavior.

- **Git:** Essential for version control and collaboration in software development.
- **Render** To host the application.

## Screenshots

<kbd><img width="945" alt="home1" src="https://github.com/user-attachments/assets/0028cb69-d964-475b-b7a6-90ac2bea98cb"></kbd><hr>
<kbd><img width="947" alt="home2" src="https://github.com/user-attachments/assets/d4191588-6339-45c0-8537-98f8fd36e63c"></kbd><hr>
<kbd><img width="947" alt="home3" src="https://github.com/user-attachments/assets/f9e14350-da87-4834-a046-622609e9ac14"></kbd><hr>
<kbd><img width="947" alt="home4" src="https://github.com/user-attachments/assets/46444979-7614-4f79-929b-71bb155c01b8"></kbd><hr>
<kbd><img width="947" alt="signup" src="https://github.com/user-attachments/assets/0a66fc49-0df5-4f26-9f19-706e771e2a9a"></kbd><hr>
<kbd><img width="945" alt="signin" src="https://github.com/user-attachments/assets/3251f3d1-596e-43c9-847c-a5b214b59bd7"></kbd><hr>
<kbd><img width="945" alt="tools" src="https://github.com/user-attachments/assets/c0889152-2969-4d42-9a77-e11786e9ddd0"></kbd><hr>
<kbd><img width="947" alt="tools1" src="https://github.com/user-attachments/assets/23f5d954-8bf0-4b1c-8d03-f8afc8d93182"></kbd><hr>
<kbd><img width="943" alt="summary" src="https://github.com/user-attachments/assets/d277e846-ea20-4b6c-b1f8-a05e209fb3b1"></kbd><hr>
<kbd><img width="947" alt="paragraph" src="https://github.com/user-attachments/assets/46ab8b09-d483-47cc-b62e-97a421139c38"></kbd><hr>
<kbd><img width="946" alt="chatbot" src="https://github.com/user-attachments/assets/f6fee681-cbc9-4b9b-8458-10308a5dae85"></kbd><hr>
<kbd><img width="946" alt="js" src="https://github.com/user-attachments/assets/c0d04f4b-d878-4844-8c0a-6c64fc5872f8"></kbd><hr>
<kbd><img width="946" alt="mob1" src="https://github.com/user-attachments/assets/88321553-3e29-442a-88c8-6ee0efc0280b"></kbd><hr>
<kbd><img width="948" alt="mob2" src="https://github.com/user-attachments/assets/d7a40a39-d8c8-42c7-904b-291fce7d0177"></kbd><hr>

## Installation<br>

To run the application locally, follow these steps:

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: [Download and install](https://nodejs.org/)
- **MongoDB**: [Download and install](https://www.mongodb.com/try/download/community)

1. **Clone the Repository:** <br>
   Open your terminal or command prompt and run:

   ```bash
   git clone https://github.com/iamhruthiks/Artiligem.git

   ```

2. **Install dependencies:** <br>
   Navigate into the project directory and install the dependencies:

   ```bash
   cd Artiligem
   npm install
   cd client
   npm install

   ```

3. **Set up environment variables:** <br>
   Make sure to replace these placeholders with your actual values when setting up the environment variables:

- Create a `.env` file in the root directory of the project and add the following environment variables:

  ```bash
  MODE = development
  DB_URL= <Your local MongoDB URL>
  JWT_ACCESS_SECRET = <Your secret>
  JWT_ACCESS_EXPIREIN = 15min
  JWT_REFRESH_TOKEN = <Your secret>
  JWT_REFRESH_EXPIREIN = 15days
  API_KEY=<Your gemini api key>

  ```

- Create a `.env` file inside the client folder and add the following environment variables:
  ```bash
  REACT_APP_GA4=<Your google analytics 4 measurement ID>
  ```

4. **Run the application:** <br>
   Ensure you are inside the Artiligem folder, then run:
   ```bash
   npm run dev
   ```

## Contributing Guidelines

I welcome contributions! To get started, please fork the repository and submit a pull request. Ensure that your code adheres to the coding standards of this project.

### Coding Standards

To maintain consistency and quality in the Artiligem project, please adhere to the following coding standards.

- **Technology Stack:** Contributions should primarily utilize the MERN stack (MongoDB, Express.js, React, Node.js) or JavaScript. This ensures consistency and effectively leverages the project's architecture.
- **Code Clarity:** Write clear and descriptive names for variables, functions, and classes.
- **Commenting:** Use comments to explain complex logic and decisions in your code.
- **Consistent Style:** Follow consistent indentation and formatting throughout your codebase.
- **Commit Messages:** Write clear and concise commit messages that describe the changes made.

## Author

[Hruthik S](https://github.com/iamhruthiks)

## Contact

For questions or support, please connect with me on [LinkedIn](https://www.linkedin.com/in/hruthiks).
