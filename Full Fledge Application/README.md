<h1 align="center">Todo App</h1>

<h2 align="center">

[🗂️&nbsp; Frontend](./client)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Backend &nbsp;📂](./server/README.md)

</h2>
<br>


## <a name="local-development"> 🖥️&nbsp;&nbsp; Local Development</a>

0.  **Prerequisites** <br>
    Make sure you have the following installed on your machine:

    - [Git](https://git-scm.com/)
    - [Node.js](https://nodejs.org/en)
    - [npm](https://www.npmjs.com/) (Node Package Manager)

1.  **Clone the repository:**

    ```bash
    git clone url
    ```


2.  **Setup Backend:**

    - **Navigate to the Backend Codebase:**

      ```bash
      cd server
      ```

    - **Install dependencies:**

      ```bash
      npm install
      ```

    - **Add Environment Variables:**

      Create .env file in the root folder and copy paste the content of .env.sample.

      ```bash
      cp .env.sample .env
      ```

      If required, add necessary credentials.

    - **Start the Server:**

      ```bash
      npm start
      ```

    - **Explore the API:**

      Access the project APIs at the specified endpoints using [API Docs](https://documenter.getpostman.com/view/31850881/2sA3Bt193p).

3.  **Setup Frontend:**

    - **Navigate to the Frontent Codebase:**

      ```bash
      cd client
      ```

    - **Install dependencies:**

      ```bash
      npm install
      ```

    - **Add Environment Variables:**

      Create .env file in the root folder and copy paste the content of .env.sample.

      ```bash
      cp .env.sample .env
      ```

      If required, add necessary credentials.

    - **Start the frontend app:**

      ```bash
      npm run dev
      ```

    - **Start the backend server:**

      ```bash
      cd ../server
      npm start
      ```

    - **Open app in browser:**

      Visit [https://localhost:5173](https://localhost:5173) to access frontent.