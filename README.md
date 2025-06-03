# Symbol Cipher Tool

A tiny web app that can encode and decode text using special Unicode symbols. Built using **Node.js (Express)** for the backend and **React (Vite)** for the frontend.

---

### How It Works

This tool allows you to:

- **Encode**: Convert each character in a string to a unique symbol.
- **Decode**: Convert the encoded symbol string back to readable text.

### Mapping Rules

- Only letters A–Z and a–z are encoded using a custom `symbolMap`.
- Uppercase characters are supported by using the uppercase of the mapped symbol (when possible).
- All other characters (spaces, punctuation, emoji) are preserved.
- Newline (`\n`) is allowed. All other control characters will cause an error.
- Text longer than 280 characters will cause an error.

###### **Example:**

Input:

```
{ "text": "hello, World!" }
```

Encoded:

```
{ "encoded": "♄ελλ☺, Ω☺яλδ!" }
```

Decoded:

```
{ "text": "hello, World!" }
```

---

## Project Structure

> ```
> symbol-cipher-tool/
> ├── backend/
> │   ├── src/
> │   │   ├── constants/
> │   │   ├── controllers/
> │   │   ├── routes/
> │   │   ├── services/
> │   │   ├── test/
> │   │   ├── validator/
> |   |   ├── .babelrc
> |   |   └── index.js
> |   ├── .env
> │   ├── .babelrc
> |   ├── .gitignore
> │   └── package.json
> ├── frontend/
> │   ├── public/
> │   ├── src/
> │   │   ├── api.js
> │   │   ├── App.jsx
> │   │   └── index.js
> |   ├── .env
> |   ├── .gitignore
> │   ├── vite.config.js
> │   └── package.json
> ├── .gitignore
> ├── README.md
> └── package.json (root)
>
> ```

### Setup Instructions & Prerequisites

* Node.js v18+
* npm

### Install All Dependencies

From the projct root:

##### ` npm install `

This installs:

* Root-level dependencies
* Backend dependencies (`backend/`)
* Frontend dependencies (`frontend/`)

### Running the App

##### ` npm run dev `

This command runs both servers concurrently:

* Backend: `http://localhost:3001`
* Frontend: `http://localhost:5173`

The frontend proxies `/api` requests to the backend.

### Running Test Cases

Run unit tests for the backend:

##### **` npm run test `**

**Coverage Includes:**

* Encode and decode strings
* Unicode symbols
* Preserve punctuation and emoji
* Case sensitivity
* Errors for unsupported characters
* Long input (280+ characters)

---


## API Reference

### POST `/api/encode`

**Request:**

`{ "text": "Hello, World!" } `

**Response:**

`{ "encoded": "♄ελλ☺, Ω☺яλδ!" } `

---

### POST `/api/decode`

**Request:**

`{ "text": "♄ελλ☺, Ω☺яλδ!" } `

**Response:**

`{ "text": "Hello, World!" } `

---

### Available Scripts

From the root:

| Script           | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| `npm install`  | Installs root dependencies and Installs backend + frontend dependencie |
| `npm run dev`  | Runs both frontend and backend concurrently                             |
| `npm run test` | Runs backend test cases                                                 |

---
