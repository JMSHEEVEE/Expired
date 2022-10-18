import * as React from "react";
import "../scss/styles.scss";
import FridgeCreator from "./FridgeCreator";
import FridgeDisplay from "./FridgeDisplay";

const FridgePage = () => (
  <div>
    <FridgeCreator />
    <FridgeDisplay />
  </div>
);

export default FridgePage;
