import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <div>
    <h1>Bookkeeper</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/">Home</Link> | <Link to="/simple">Simpel</Link>
    </nav>
  </div>
);

export default Home;
