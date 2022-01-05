import React from 'react';



function SubmitReservations() {
     
    return (
    <>
       <div>
       <div className="success">your reservation has been submitted
       </div>
          <img className='submit-img' 
          style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1600647629982-01f2cddf9af2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")`
        }}
      />
        </div>
        <SubmitReservations />
    </>
  );
};

export default SubmitReservations;