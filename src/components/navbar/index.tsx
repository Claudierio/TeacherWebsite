import React from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
