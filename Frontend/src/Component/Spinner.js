import React from "react";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
  return (
    <div>
      <div class="d-flex justify-content-center spinner">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
