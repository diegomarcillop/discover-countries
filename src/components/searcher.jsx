import React from "react";
import bulma from "bulma";
function Searcher({ onChange }) {
  return (
    <>
    <br/>
      <figure className="image is-3by1">
        <img src="/mundo.svg" alt="app" />
      </figure>
      <br />

      <div className="field">
        <p className="control has-icons  has-icons-right">
          <input
            className="input is-rounded"
            type="text"
            placeholder="Search for..."
            onChange={onChange}
          />
          <span className="icon is-right">
            <i className="fas fa-search"></i>
          </span>
        </p>
      </div>
 
    </>
  );
}

export default Searcher;
