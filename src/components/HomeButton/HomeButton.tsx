import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../UIKit";

function HomeButton() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate("/")}>Home</Button>;
}

export default HomeButton;
