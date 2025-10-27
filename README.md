# Flight Tracker

_A sleek real-time **Flight Tracking Web App** built using **React.js (frontend)** and **Node.js + Express.js (backend)**, integrated with the **AviationStack API** to fetch and display live flight information such as departure, arrival, airline, and current flight status._


## 🚀 Features

✅ _Track any flight in real time using its **IATA flight number** (e.g., AI202, 6E200)._</br>
✅ _Displays key details — **Airline**, **Origin** & **Destination**, **Status**, .**Departure/Arrival time**._</br>
✅ _Elegant and responsive UI with **Light / Dark Mode toggle.**_</br>
✅ _Error handling for invalid flight numbers or missing data._</br>
✅ _Built with clean, modular architecture — easy to extend and maintain._</br>

## 🧰 Tech Stack

### **_Frontend:_**
  i) _React.js (Vite)_</br>
  ii) _CSS3 (for styling)_</br>
  iii) _React Hooks for state management_</br>

### **_Backend:_**
  i) _Node.js + Express.js_</br>
  ii) _'dotenv' for environment configuration_</br>
  iii) _'cors' and 'node-fetch' for API handling._</br>

### **_API:_**
  _**AviationStack API** - for live flight data_

## 🧑‍💻 Project Structure
```bash
flight-tracker/
│
├── backend/
│   ├── index.js             # Express server setup
│   ├── .env                 # Contains AviationStack API key
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # Main React component
│   │   ├── index.css        # Global styles
│   │   └── main.jsx
│   └── package.json
│
├── README.md
└── .gitignore
```

## ⚙️ Installation & Setup

i) _Clone the Repository_
```bash
git clone https://github.com/Bikram2473/flight-tracker.git
cd flight-tracker
```

ii) _Setup Backend_
```bash
cd backend
npm install

# Create.env file inside "backend/" and add:
AVIATIONSTACK_API_KEY=your_api_key_here

# Start the backend server:
node index.js                    # Server will start on "http://localhost:4000"
```

iii) _Setup Frontend_
```bash
cd frontend
npm install
npm run dev                      # Frontend runs at "http://localhost:5173"
```

