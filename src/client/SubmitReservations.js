import React from 'react';
import "./styles/Submit.css";

function SubmitReservations() {
     
    return (
      <>
        <div>
          <h2 className="form-success">  Thanks for Reservation </h2>
          <img
            className="submit-img"
            style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1600647629982-01f2cddf9af2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")`
            }}
          />
        </div>
        
      </>
    );
};

export default SubmitReservations;