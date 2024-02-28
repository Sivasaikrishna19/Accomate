// App.jsx
import React, { useEffect } from "react";
import "./App.css"; // Keep existing CSS
import Header from "./components/Header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import PostingBoard from "./pages/PostingBoard/PostingBoard";
import PostingDetails from "./pages/PostingDetails/PostingDetails";
import { useAppSelector } from "./state/hooks";
import Login from "./pages/Login/Login";
import { useDispatch } from "react-redux";
import { logIn, logOut } from "./state/reducers/authReducer/authReducer";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useAppSelector((state: any) => state.auth.isLoggedIn);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (storedIsLoggedIn) {
      dispatch(logIn({}));
    } else {
      dispatch(logOut({}));
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="w-[75%] mx-auto p-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/postings" />} />
          <Route path="/postings" element={<PostingBoard />} />
          <Route path="/postings/:id" element={<PostingDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
