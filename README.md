# SurgiTrack
Keeping families connected during surgical procedures with real-time updates and peace of mind.

## Requirements

The SurgiTrack Surgery Status Board requires [**Node.JS**](https://nodejs.org/) version `20.19.0` or higher, or version `22.12.0` or higher to run this project. Use of Node 21 or earlier versions of Node is not supported and will cause engine warnings or errors.

We further recommend [**Node Package Manager (NPM)**](https://www.npmjs.com/package/npm/) version `9.0.0` or higher to match Node and avoid engine warnings.

## Quick start
This is only if you are trying to run the website yourself in VScode or similar IDE. If that is not the case, please just access the website using this link:

https://v56-tier3-team-36.vercel.app

### Demo Accounts: ###
- Admin: admin / admin123
- Surgical Team: surgeon / surgeon123

### Frontend ###
1a. **If you are not in the `client` folder, move there:**

```bash
cd client
```

1b. **Once in the `client` folder, install dependencies:**

```bash
npm install
```

2. **Start the development server:**

```bash
npm run dev
```

3. **Build for production:**

```bash
npm run build
```
### Backend ###
    Follow similar steps:
    - cd server
    - npm install
    - nodemon server.js

For the frontend, you will need to initialize these values in your .env file: VITE_BACKEND_URL,VITE_GEMINI_API_KEY. For the backend: PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGSSLMODE, PGCHANNELBINDING, PGPORT, PORT

## Features

- **Built with React, Tailwind, and NodeJS** for a modern, fast UI
- **Role-based login system** (Admin & Surgical Team members)
- **Secure authentication** with login/logout functionality
- **Patient information management** (Admin only)
- **Real-time status updates** on surgical progress
- **Dedicated status board** for families and staff to track updates
- **Responsive design** for desktop, tablet, and mobile
- **AI-powered help chatbot** (Google Gemini) for answering any question you have about the website

## Tech Stack/Key Dependencies

The SurgiTrack Surgery Status Board is currently built using the following technologies:

### Frontend ###
Developed using React and TailwindCSS.
    
    Dependencies:
    "@google/genai": "^1.14.0",
    "@headlessui/react": "^2.2.6",
    "@heroicons/react": "^2.2.0",
    "@tailwindcss/vite": "^4.1.11",
    "axios": "^1.11.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-icons": "^5.5.0",
    "react-markdown": "^10.1.0",
    "react-router-dom": "^7.6.3",
    "tailwindcss": "^4.1.11"

### Backend ###
Developed using NodeJS and PostgreSQL.

    Dependencies:
    "react-icons": "^5.5.0"

### Deployment ###
Deployed using Vercel for frontend and backend.
Database was deployed on Neon.

Please use this link to access the website. You will see the default login username and password once you get to the website as well:

https://v56-tier3-team-36.vercel.app
## Folder Structure

```
V56-tier3-team-36/
├── client/                # Frontend (React, Vite, Tailwind)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── server/                # Backend (Node.js, Express)
│   ├── server.js
│   ├── package.json
│   └── .env
├── README.md
├── .gitignore
└── ...
```

## Our Team

**Scrum Master**
- Adelola Abioye: [GitHub](https://github.com/Adel-abio) / [LinkedIn](https://linkedin.com/in/adelola-abioye/)

**Developers**
- Angi Boiciuc: [GitHub](https://github.com/codebyangi) / [LinkedIn](https://www.linkedin.com/in/angi-boiciuc)
- Pablo de la Garza: [GitHub](https://github.com/pdv88) / [LinkedIn](https://www.linkedin.com/in/pablo-de-la-garza/)
- Nick Haynes: [GitHub](https://github.com/nickhaynes) / [LinkedIn](https://www.linkedin.com/in/nickhaynes/)
- Marissa Lamothe: [GitHub](https://github.com/msrissaxox) / [LinkedIn](https://www.linkedin.com/in/marissalamothe/)
- Spandan Mahat: [GitHub](https://github.com/spandanmahat00) / [LinkedIn](https://www.linkedin.com/in/spandan-mahat-078662266)

**Voyage Guide**
- Voyage Guide - Lindsay Allen: [GitHub](https://github.com/lkallen) / [LinkedIn](https://www.linkedin.com/in/lindsay-allen-54b46937/)


## About Chingu

This project is part of the [Chingu Voyage](https://www.chingu.io/) program, a global community that connects developers of all skill levels to collaborate on real-world projects. Chingu provides a supportive environment for learning, teamwork, and professional growth through hands-on experience building software in remote teams.

## License

MIT License
