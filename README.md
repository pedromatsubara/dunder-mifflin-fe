![Logo](./logo.jpg)


# Dunder Mifflin Management App

This React project is inspired by the TV series "The Office". It is designed to manage employee data and department history while communicating with a RESTful API using CRUD operations. The application leverages design patterns to ensure maintainability and scalability.

It is built with React and includes the following features:

**Component-Based Architecture:** The application uses a modular structure, separating logic and presentation for easier readability and reuse, with clean separation of concerns.

**Skeleton Loading States:** Placeholder skeletons are used for improved user experience during data loading and avoid layout-shift.

**Responsive Design with MUI:** Material-UI is used for consistent and responsive styling across devices.

**Error Handling:** Errors from the backend or unexpected issues in components are caught and displayed with user-friendly messages.

**Custom Hooks:** Hooks like useThemeToggle simplify shared state management, improving code readability and consistency.


## Run Locally

Clone the project

```bash
  git clone https://git.number8.com/pedro.pereira/fullstack-assessment-fe.git
```

Go to the project directory

```bash
  cd fullstack-assessment-fe
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Design Patterns

#### Container/Presentational Pattern:

- Container components managing state and business logic (e.g., EmployeeDetailPage).
- Presentational components focusing on rendering UI (e.g., EmployeeDetail, DepartmentHistoryTable).

#### Facade Pattern:

- API functions (getDepartments, getEmployeeById, etc.) abstract away the complexity of HTTP requests and error handling, simplifying interactions across the app.


#### Factory-like Pattern:

- If api.js expands to include more complex configurations to create Axios instances based on different parameters, this would become a more classic Factory Pattern.
