import React from "react";
const About = () => {
    return (
      <div>
        <img
          const
          aboutStyle={{ display: "block", maxWidth: "300%" }}
          className="about-image"
          src="https://images.unsplash.com/photo-1638723227150-8b805891321f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          //src="https://images.freeimages.com/images/large-previews/7e6/mediterranean-food-1311330.jpg"
        />
        <div className="about">
          <p>
            {" "}
            We find the best home cooks around the world so you can immerse
            yourself in meaningful food experiences and cultural traditions
            passed down through generations. Connect with local culture through
            food. Visit a grandmother in her kitchen in India and learn how to
            make crisp dos's or spend time on a farm in Northern Thailand and
            grind curry pastes, and experience how local people live.
          </p>
        </div>
      </div>
    );
}

export default About
