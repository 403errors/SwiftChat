# SwiftChat: A Full-Stack Communication Application

SwiftChat is a modern, full-stack communication application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a real-time messaging experience with a responsive user interface and a focus on key communication features.

## Key Features

*   **Responsive UI:** Ensures a seamless user experience across various devices.
*   **Loading Skeletons:** Provides visual feedback during data loading, enhancing perceived performance.

## Technology Stack

*   **Frontend:**
    *   React
    *   Tailwind CSS
    *   Zustand for state management
    *   DaisyUI component library
*   **Backend:**
    *   Node.js
    *   Express.js
    *   MongoDB
    *   Socket.io for real-time communication
*   **Tools:**
    *   Cloudinary for image storage and delivery

## Dependencies

**Frontend:**

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hot-toast": "^2.5.1",
    "react-router-dom": "^7.1.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.19.0",
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.19.0",
    "eslint-plugin-react": "^7.37.4",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.18",
    "globals": "^15.14.0",
    "postcss": "^8.5.2",
    "tailwindcss": "^4.0.6",
    "vite": "^6.1.0"
  }
}
```

**Backend:**

```json
{
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cloudinary": "^2.5.1",
    "cookie-parser": "^1.4.7",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.10.0",
    "socket.io": "^4.8.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}
```

## License

This project is licensed under the ISC License.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to suggest improvements or report bugs.

## Development Roadmap

SwiftChat's development is structured in phases, with a focus on delivering core functionality and a polished user experience.

### Phase 1: Backend and API Development (Completed)

*   Backend setup and configuration.
*   Database schema design and implementation.
*   RESTful APIs for:
    *   User signup
    *   User login
    *   User logout
    *   Profile updates
*   Message route APIs

### Phase 2: Frontend Authentication and Profile (Upcoming)

*   Signup and login frontend pages.
*   User profile page.
*   Settings page.

### Phase 3: Home Page and Chat Interface (Upcoming)

*   Home page sidebar.
*   Chat container implementation.

### Phase 4: Real-time Communication and Deployment (Upcoming)

*   Implementation of Socket.io for real-time messaging.
*   Application deployment.
