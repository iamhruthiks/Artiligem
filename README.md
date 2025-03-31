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

## Screenshots
<kbd><img width="945" alt="home1" src="https://github.com/user-attachments/assets/4d27a809-d706-44c1-b90d-f24c4543b640"></kbd><hr>
<kbd><img width="947" alt="home2" src="https://github.com/user-attachments/assets/0ffedb46-836c-46f2-abff-d31fb1b33d3b"></kbd><hr>
<kbd><img width="947" alt="home3" src="https://github.com/user-attachments/assets/48d9934e-7f0b-4856-bf86-72d3e798ff2c"></kbd><hr>
<kbd><img width="947" alt="home4" src="https://github.com/user-attachments/assets/719a82de-7a0a-49aa-8e05-73294d9b0c50"></kbd><hr>
<kbd><img width="947" alt="signup" src="https://github.com/user-attachments/assets/2fe3ac2f-78ba-436b-9065-4f0d836e675b"></kbd><hr>
<kbd><img width="945" alt="signin" src="https://github.com/user-attachments/assets/3db03dca-df94-427e-81dd-3617ffe99f4c"></kbd><hr>
<kbd><img width="945" alt="tools" src="https://github.com/user-attachments/assets/4c031497-8ceb-429c-b23e-335cdb34d485"></kbd><hr>
<kbd><img width="947" alt="paragraph" src="https://github.com/user-attachments/assets/51a9d08b-4e18-455d-b75c-b630c35f48a3"></kbd><hr>
<kbd><img width="946" alt="chatbot" src="https://github.com/user-attachments/assets/aaf7a047-9be7-4058-ba6f-4f3454358228"></kbd><hr>
<kbd><img width="946" alt="mob1" src="https://github.com/user-attachments/assets/d8b745d4-2427-49d1-a2ae-d35a691e062e"></kbd><hr>
<kbd><img width="948" alt="mob2" src="https://github.com/user-attachments/assets/e9bc646f-7e5e-4bda-9d55-6bddf32f1553"></kbd><hr>

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
