import React, { useState, useEffect } from "react";


function MealsDetail({ match }) {
  const [showDetails, setShowDetails] = useState({});
  useEffect(() => {
    setShowDetails((prev) => ({ ...prev, loading: true }));
    fetchDetails;
    console.log(match);
  }, showDetails[0]);

  const fetchDetails = async () => {
    const fetchDetails = await fetch(
      `https://hyf-meal-sharing-apps.herokuapp.com/api/meals/${match.params.id}`
    );
    const showDetails = await fetchDetails.json();
    setShowDetails(showDetails);
    console.log(showDetails);
  };
  return (
    <div>
      <h1>{showDetails.title}</h1>
      <img src={showDetails.images_urls} />
    </div>
  );
}

export default MealsDetail;
