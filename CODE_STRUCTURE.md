# Project Code Structure - Suckit.io Chat

This document provides an overview of the code structure of the Suckit.io Chat project, which is a real-time chat application built with a Node.js backend and a React frontend.

---

## Project Overview

- **Backend:** Node.js with Express and Socket.IO for real-time communication.
- **Frontend:** React application with vanilla JavaScript, HTML, and CSS.
- **No database:** All data is stored in memory (RAM).

---

## Directory Structure

```
/Users/farkhodov/Desktop/Suckit.io-chat
│
├── client/                     # Frontend React application
│   ├── public/                 # Static assets (HTML, icons, audio, manifest)
│   ├── src/                    # React source code
│   │   ├── App.js              # Main React component
│   │   ├── App.css             # Styles for App component
│   │   ├── index.js            # React app entry point
│   │   ├── index.css           # Global styles
│   │   ├── logo.svg            # Logo image
│   │   ├── reportWebVitals.js  # Performance measuring utility
│   │   ├── setupTests.js       # Test setup file
│   │   └── ...                 # Other React related files
│   ├── package.json            # Frontend dependencies and scripts
│   └── .gitignore              # Git ignore for client
│
├── server/                     # Backend Node.js application
│   ├── config/                 # Configuration files
│   │   └── config.js           # Server configuration (e.g., port, CORS origin)
│   ├── routes/                 # Express route handlers
│   │   └── index.js            # Main router
│   ├── server.js               # Main server entry point
│   ├── package.json            # Backend dependencies and scripts
│   └── package-lock.json       # Backend dependency lock file
│
├── README.md                   # Project overview and instructions (English and Russian)
├── .gitignore                  # Git ignore for root
└── CODE_STRUCTURE.md           # This file - project code structure description
```

---

## Key Files Description

### Frontend (client)

- **client/src/App.js**  
  The main React component rendering the app UI. It includes a logo and an audio player.

- **client/public/**  
  Contains static assets such as the HTML template, favicon, audio files, and manifest.

- **client/src/index.js**  
  Entry point for the React application, rendering the App component into the DOM.

- **client/package.json**  
  Manages frontend dependencies and scripts.

### Backend (server)

- **server/server.js**  
  Main entry point for the backend server. Sets up Express app, applies middleware (CORS, JSON parsing), registers routes, and initializes Socket.IO for real-time communication.

- **server/config/config.js**  
  Contains configuration variables such as server port and CORS origin.

- **server/routes/index.js**  
  Defines the Express routes used by the server.

- **server/package.json**  
  Manages backend dependencies and scripts.

---

This structure supports a real-time chat application with a clear separation between frontend and backend code, using Socket.IO for WebSocket communication.
