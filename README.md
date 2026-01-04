# Employee Management System (EMS)

This is a comprehensive Employee Management System built with **React JS**, **Vite**, and **Tailwind CSS**. It features role-based access control (Admin vs. Employee), local storage for data persistence, and a responsive dashboard interface.

## 🚀 Tech Stack

- **Framework**: React JS (Vite)
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Data Persistence**: Local Storage

---

## 🛠️ Step-by-Step Build Procedure

Follow these steps to understand how this application was built from scratch.

### Phase 1: Project Setup & Configuration

1.  **Initialize Project**:
    ```bash
    npm create vite@latest ems -- --template react
    cd ems
    npm install
    ```

2.  **Install Tailwind CSS**:
    Install Tailwind CSS via npm, and then run the init command to generate `tailwind.config.js` and `postcss.config.js`.
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

3.  **Configure Tailwind**:
    Update `tailwind.config.js` to look for all source files:
    ```javascript
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

4.  **Add Tailwind Directives**:
    Add the Tailwind directives to your `src/index.css` file:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

### Phase 2: Folder Structure & Organization
Organize the `src` folder for scalability and maintainability:

*   **`components/`**: Contains all UI components.
    *   **`Auth/`**: Contains `Login.jsx` for user authentication.
    *   **`Dashboard/`**: Contains the main views: `AdminDashboard.jsx` and `EmployeeDashboard.jsx`.
    *   **`others/`**: Reusable utility components like `Header.jsx`, `CreateTask.jsx` (for admins), `AllTask.jsx` (admin view), and `TaskListNumbers.jsx` (stats).
    *   **`TaskList/`**: Individual task card components rendered in the employee view:
        *   `AcceptedTask.jsx`
        *   `CompletedTask.jsx`
        *   `FailedTask.jsx`
        *   `NewTask.jsx`
*   **`context/`**: Manages global state using React Context API (`AuthProvider.jsx`).
*   **`utils/`**: Contains helper functions and mock data generation (`LocalStorage.jsx`).
*   **`assets/`**: Images and static files.

### Phase 3: Core Logic Implementation

#### 1. Data Handling (`utils/LocalStorage.jsx`)
This file serves as the database for the application, initializing `localStorage` with mock data.
*   **Structure**:
    *   `employees`: Array of objects, each containing `id`, `email`, `password`, `taskCounts` (summary of status), and a `tasks` array.
    *   `admin`: Array containing admin credentials.
*   **Functions**:
    *   `setLocalStorage()`: Checks if data exists; if not, seeds the browser's `localStorage` with the default JSON data.
    *   `getLocalStorage()`: Retrieves and parses the `employees` and `admin` strings from `localStorage` into usable JavaScript objects.

#### 2. Context Management (`context/AuthProvider.jsx`)
Centralizes the application state to avoid prop drilling.
*   **Logic**:
    *   Uses `useEffect` hook to invoke `setLocalStorage()` on initial render, ensuring data exists.
    *   Retrieves the data using `getLocalStorage()` and stores it in the `userData` state variable `{ employees, admin }`.
    *   Wraps the application in `<AuthContext.Provider value={{userData, setUserData}}>` to expose this data globally.

#### 3. Authentication UI (`components/Auth/Login.jsx`)
A controlled form component for user input.
*   **Features**: Two-way binding for `email` and `password` inputs.
*   **Interaction**: Prevents default form submission and calls the `handleLogin(email, password)` function passed down via props from `App.jsx`.
*   **Styling**: Uses Tailwind for a glassmorphism effect and responsive layout.

#### 4. Admin Dashboard Logic (`components/Dashboard/AdminDashboard.jsx`)
The command center for the admin user.
*   **Components**:
    *   `<Header />`: Displays welcome message and Logout button.
    *   `<CreateTask />`: A form interacting with `AuthContext` to push new task objects into a specific employee's `tasks` array and update the global state.
    *   `<AllTask />`: Iterates through the `employees` array to display a list of all employees and their current task statistics.

#### 5. Employee Dashboard Logic (`components/Dashboard/EmployeeDashboard.jsx`)
The view for logged-in employees.
*   **Components**:
    *   `<Header />`: Welcomes the specific user.
    *   `<TaskListNumbers />`: Displays a grid of 4 cards showing counts for New, Completed, Accepted, and Failed tasks.
    *   `<TaskList />`: The core list container. It iterates through the employee's `tasks` array and uses conditional rendering to display the correct card component (`NewTask`, `AcceptedTask`, etc.) based on the task's status flags (`active`, `newTask`, `completed`, `failed`).

### Phase 4: Main Application Logic (`App.jsx`)
`App.jsx` acts as the controller, managing authentication state and routing.

1.  **State Initialization**:
    *   `user`: Stores the current role ('admin' or 'employee').
    *   `loggedInUserData`: Stores the full object of the currently logged-in employee (null for admins).
    *   `userData`: Consumed from `AuthContext`.

2.  **Session Persistence**:
    *   A `useEffect` hook checks for a `loggedInUser` key in `localStorage` on page load.
    *   If found, it hydrates the `user` and `loggedInUserData` states, keeping the user logged in across refreshes.

3.  **Login Handler (`handleLogin`)**:
    *   **Admin Check**: Compares input against hardcoded admin credentials (`admin@example.com`, `123`). If match, sets role to 'admin' and saves to `localStorage`.
    *   **Employee Check**: If not admin, searches the `userData.employees` array for a matching email and password. If found, sets role to 'employee', saves specific employee data to state, and persists to `localStorage`.
    *   **Error Handling**: Logs "Invalid Credentials" if neither match.

4.  **Conditional Rendering**:
    *   **Login View**: Renders `<Login />` if `!user` (no user logged in).
    *   **Admin View**: Renders `<AdminDashboard />` if `user === 'admin'`.
    *   **Employee View**: Renders `<EmployeeDashboard />` if `user === 'employee'`, passing `loggedInUserData` as a prop so the dashboard knows *which* employee's data to show.

### Phase 5: Styling

Applied **Tailwind CSS** classes throughout the components for a responsive and modern dark-themed UI.

---

## 🏃‍♂️ How to Run

1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Login Credentials**:
    - **Admin**: `admin@example.com` / `123`
    - **Employee**: `employee1@example.com` / `123` (or check `utils/LocalStorage.jsx` for more)
