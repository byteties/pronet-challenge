# 🚀🚀 Pronet Gaming - Book's Universe of Ice and Fire 🚀🚀

An Angular application with NgRx state management, Cypress e2e testing, and authentication via a NestJS backend.  
You can search, favorite, and view books from the "A Song of Ice and Fire" universe.

## 📦 Features

- Angular Appication
- State management with NgRx (favorites)
- JWT authentication (NestJS backend)
- Search and filter book list
- Add/remove favorites, view favorites
- Responsive UI, modern minimal design
- Cypress e2e tests

## ⚙️ Technologies

- **Frontend:** Angular, NgRx, RxJS, Angular Material, SCSS
- **Backend:** NestJS, JWT, In-memory users (no database)
- **Testing:** Cypress (e2e)

---

## 📝 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/byteties/pronet-gaming.git
cd pronet-gaming
```

## 2. Install dependencies
### Frontend
```bash
cd frontend
npm install
```
### Backend
```bash
cd ../backend
npm install
```

##  3. Run the applications
### Start Backend (NestJS)
```bash
cd backend
npm run start:dev
# The server runs on http://localhost:3000
```
## Start Frontend (Angular)
```bash
# open new terminal
cd frontend
npm run start
# The app runs on http://localhost:4200
```

## 🌐 Usage

- Visit http://localhost:4200
- Login with a test user (see below)
- Browse and search books
- Add or remove favorites
- View your favorites page

#### Example Test User
- Username: `admin`
- Password: `123456`

## 🧪 Testing
### Run Cypress E2E Tests
```bash
# setup test
## should run backend and frontend first
## follow step `3. Run the applications`
# new terminal
cd frontend
npm run cypress:run
```
### Run Unit Test for Backend
```bash
cd backend
npm run test
```


### 📁 Project Structure
#### Frontend (/frontend)
```bash
frontend/
│
├── cypress/
│   └── e2e/
│       ├── book-list.cy.ts        # Cypress tests: List page
│       ├── detail.cy.ts           # Cypress tests: Detail page
│       ├── favorites.cy.ts        # Cypress tests: Favorites page
│       └── landing.cy.ts          # Cypress tests: Landing/Login page
│
├── src/
│   └── app/
│       ├── core/
│       │   ├── guards/            # Angular route guards (e.g., auth)
│       │   ├── interceptors/      # HTTP interceptors (e.g., JWT)
│       │   ├── services/          # Shared services (e.g., BookService)
│       │   └── store/             # NgRx state management
│       └── features/
│           ├── books/
│           │   ├── detail/        # Book detail page
│           │   ├── favorite/      # Favorite page
│           │   └── list/          # Book list page
│           └── landing/           # Landing/login page
│   └── app.component.ts           # Main app component
│   └── app.config.ts              # App-wide config
│   └── app.routes.ts              # Route definitions
│
│   └──assets/                     # Static assets (images, etc.)
└── ...                            # Config & package files

```
#### Backend (/backend)
```bash
backend/
│
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts     # Auth endpoints (e.g., login)
│   │   ├── auth.module.ts         # Auth Nest module
│   │   └── auth.service.ts        # Auth logic (JWT, user check)
│   ├── users/
│   │   ├── users.module.ts        # Users Nest module
│   │   └── users.service.ts       # User logic (in-memory user store)
│   ├── app.controller.ts          # Root controller
│   ├── app.module.ts              # App Nest module
│   ├── app.service.ts             # Root service
│   └── main.ts                    # App entry point
│
└── ...                            # Config files

```