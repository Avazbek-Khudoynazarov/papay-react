import { Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Advertisements } from "./advertisements";
import { BestDishes } from "./bestDishes";
import { BestRestaurants } from "./bestRestaurants ";
import { Events } from "./events";
import { Recommendations } from "./recommendations";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import "../../../css/home.css";

export function HomePage() {
  return (
    <div className="homepage">
      <Statistics />
      <TopRestaurants />
      <BestRestaurants />
      <BestDishes />
      <Advertisements />
      <Events />
      <Recommendations />
    </div>
  );
}
