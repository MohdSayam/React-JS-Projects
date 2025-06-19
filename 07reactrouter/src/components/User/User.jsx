import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-green-500 text-center font-bold py-8">
      User : {userid ? userid : "No User ID provided"}
    </div>
  );
}

export default User;
