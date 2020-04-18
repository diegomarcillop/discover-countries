import React from "react";
import posed from 'react-pose';

function Country({ country }) { 

  const { name, population, flag, capital, callingCodes, topLevelDomain, subregion } = country;

  const style={
      textAlign: 'center'
  }

  const Box = posed.div({
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.8 }
  });



  return (
    <> 
     <Box>
     <div className="box" style={{ padding: "20px", backgroundColor: "white",   }}>
        <div className="columns"  >
          <div className="column is-6">
            <figure className="image is-256x256">
              <img src={flag} alt="new" />
            </figure>
          </div>

          <div className="column is-6">
            <div className="columns">
              <div className="column is-6">
                <div
                  className="media-content"
                 style={style}
                >
                  <h1>Name</h1>
                  <h2>{name}</h2>
                </div>
              </div>

              <div className="column is-6">
                <div
                  className="media-content"
                  style={style}
                >
                  <h1>Capital</h1>
                  <h2>{capital}</h2>
                </div>
              </div>
            </div>
            <div className="columns">
            <div className="column is-6">
                  <div
                    className="media-content"
                    style={style}
                  >
                    <h1>Pupulation</h1>
                    <h2>{population}</h2>
                  </div>
                </div>
 

                <div className="column is-6">
                  <div
                    className="media-content"
                    style={style}
                  >
                    <h1>Calling Code</h1>
                    <h2>+{callingCodes}</h2>
                  </div>
                </div>
            </div>

            <div className="columns">
            <div className="column is-6">
                  <div
                    className="media-content"
                    style={style}
                  >
                    <h1>Domain</h1>
                    <h2>{topLevelDomain}</h2>
                  </div>
                </div>
 

                <div className="column is-6">
                  <div
                    className="media-content"
                    style={style}
                  >
                    <h1>Sub Region</h1>
                    <h2>{subregion}</h2>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
     </Box>
     </>
  );
}

export default Country;
