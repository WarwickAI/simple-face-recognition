// Import some useful react things
import React, { useState } from 'react';
// Import some CSS to make everything look a bit nicer
import './App.css';

// Import Amplify and Predictions so that we can configure a new predictions provider
import Amplify, { Predictions } from 'aws-amplify';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import awsconfig from './aws-exports';

// Set up the predictions plugin using our default config
Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

function App() {
  // Declare some variables to save some values that we'll need later
  const [name, setName] = useState("")
  const [imageURL, setImageURL] = useState("");
  const [links, setLinks] = useState([]);

  // A function that takes an image and tells us who is in it
  function identifyFromFile(event) {
    // While the result is loading, say "Searching..."
    setName('Searching...');
    setLinks([]);
    
    // Get the file that the user uploaded
    const file = event.target.files[0];

    // If we can't find a file, cancel. 
    if (!file) {
      return;
    }

    // Create a URL that we can use to display the photo
    setImageURL(URL.createObjectURL(file));

    // Do the magic! 
    Predictions.identify({
      entities: {
        source: {
          file,
        },
        celebrityDetection: true
      }
    }).then(result => {
      // From the result, get first entity detected. Get the metadata of that entity
      const celebrityData = result.entities[0].metadata;
      // Set the name and any links we find
      setName(celebrityData.name);

      if (celebrityData.urls) {
        setLinks(celebrityData.urls)
      }
    })
  }

  return (
    <div className="App">
      <div>
        <h3>Whose face is that?</h3>
        <input type="file" onChange={identifyFromFile}></input>
        <p>Upload an image</p>
        { imageURL && <img className="image" src={imageURL} alt="uploaded" ></img>}
        <h3>{name}</h3>
        <ul>
        { links.map((link) => <p>{link}</p>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
