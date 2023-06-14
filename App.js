import React from "react";
import Header from "./Components/Header.js";
import MainSection from "./Components/MainSection.js";
import data from "./data.js";

export default function App() {
  return (
    <div>
      <Header />
      {data.map((item) => (
        <MainSection
            key={item.id}
            title={item.title}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}
