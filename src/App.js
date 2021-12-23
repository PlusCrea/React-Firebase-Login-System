import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import User from "./pages/user";
import Logout from "./pages/logout";
import Register from "./pages/register";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZU8VLgrR_VL7x2tz3wzKkwGXgXGMllYw",
  authDomain: "loginwithreact-8c754.firebaseapp.com",
  projectId: "loginwithreact-8c754",
  storageBucket: "loginwithreact-8c754.appspot.com",
  messagingSenderId: "269343560364",
  appId: "1:269343560364:web:37a8fb521d326e82910509",
};

function App() {
  const app = initializeApp(firebaseConfig);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
