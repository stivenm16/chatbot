## Getting Started

### Step 1: Clone the Repository

Clone the project repository from GitHub to your local machine:

SSH:

```bash
git clone git@github.com:stivenm16/chatbot.git

```

HTTPS:

```bash
git clone https://github.com/stivenm16/chatbot.git

```

### Step 2: Install dependencies

```bash
    cd chatbot
    npm install

```

### Step 3: Start development server

```bash
    npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## App Creation Details

### Folder Structure

The app follows a structured folder hierarchy to organize its components, hooks, models, services, and utilities. Here's a breakdown of each directory:

- **components:** This directory contains reusable UI components used throughout the application. Components are organized based on their functionality and can include both presentational and container components.

- **hooks:** Custom hooks used to encapsulate and reuse stateful logic across components are placed in this directory. Hooks can handle complex state management, side effects, and data fetching logic.

- **models:** Data models or schemas used to define the structure of data entities within the application are stored in this directory. Models help maintain consistency and provide a clear representation of data objects.

- **services:** Service modules responsible for interacting with external APIs, databases, or other services are located in this directory. Services abstract away the implementation details of API calls or data fetching operations and provide a clean interface for other parts of the application to interact with.

- **utils:** Utility functions and helper modules that provide common functionality or perform common tasks are placed in this directory. Utilities can include functions for data manipulation, validation, formatting, and more.
