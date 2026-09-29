# Playwright Automation Suite

E2E and API test automation project built with **Playwright, TypeScript, and Page Object Model (POM)**.

## About the Project

This repository contains automated tests created to practice and demonstrate software testing and test automation using Playwright.

The project covers both **End-to-End (E2E) testing** and **API testing**, with a focus on reusable test structure, assertions, debugging, and maintainable automation.

## Tech Stack

* **Playwright**
* **TypeScript**
* **Node.js**
* **Page Object Model (POM)**
* **Git / GitHub**

## Testing Areas

### E2E Testing

The project includes automated web tests covering areas such as:

* Navigation
* Form interactions
* Input validation
* Element interaction
* Locators
* Assertions
* Test hooks
* Page-specific workflows

### API Testing

API tests are automated using Playwright's `APIRequestContext`.

Current API automation includes:

* HTTP `POST` requests
* HTTP `DELETE` requests
* Request body validation
* HTTP status code validation
* JSON response validation
* User creation
* Token generation
* Authorization validation
* Bearer token authentication
* API workflow validation

Example API workflow:

```text
Create User
    ↓
Generate Authentication Token
    ↓
Validate Authorization
    ↓
Delete User
```

## Page Object Model

The project uses the **Page Object Model (POM)** to separate page-specific elements and actions from test logic.

This approach helps make the test suite:

* Easier to read
* Reusable
* Easier to maintain
* More scalable

Example:

```typescript
class LoginPage {
    constructor(private page: Page) {}

    async login(username: string, password: string) {
        // Page interaction logic
    }
}
```

Tests can then focus on the scenario while page-specific interaction logic remains inside the Page Object.

## Project Structure

```text
playwright-automation-suite/
│
├── playwright-practica/
│   └── pages/
│       └── Page Object classes
│
├── tests/
│   └── Automated test cases
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── .gitignore
```

## Test Automation Features

The project currently uses:

* Locators
* Assertions with `expect`
* `beforeEach` hooks
* Page Object Model
* API requests
* Authentication tokens
* HTML reports
* Screenshots
* Trace Viewer
* Playwright debugging tools

## Running the Project

Clone the repository:

```bash
git clone https://github.com/totwx23/playwright-automation-suite.git
```

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run tests with the Playwright UI:

```bash
npx playwright test --ui
```

Open the HTML report:

```bash
npx playwright show-report
```

## Debugging

Playwright debugging tools are used to analyze test execution and failures, including:

* Trace Viewer
* Screenshots
* HTML Reports
* Playwright debugging tools

## Current Learning Goals

This project is part of my transition into **QA Automation Engineering** and is continuously being expanded.

Current areas of development include:

* Advanced Playwright automation
* Page Object Model
* API test automation
* Object-Oriented Programming with JavaScript/TypeScript
* Test architecture
* Git and version control
* SQL for database validation

## Author

**Luis Fernando Molina Medina**

QA Automation Junior · Software Tester

GitHub: https://github.com/totwx23
