import React from "react";
import Button from "../components/Button";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Frontend Challenge</h1>
      <Button text="Go to Dashboard" onClick={() => window.location.href = "/dashboard"} />
    </div>
  );
};

export default Home;
