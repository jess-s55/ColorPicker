import { useState } from 'react';

// Write your Color component here



const Color = ({color, setSelectedColor, selected}) => {
  let classes = color;
  if (selected === color) {
    classes += " selected"
  }
  return (
    <div
      className={classes}
      onClick={() => setSelectedColor(color)}
     ></div>
  )
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor} </div>
      </div>
      <div id="colors-list">
        <Color selected={selectedColor} color="blue" setSelectedColor={setSelectedColor}/>
        <Color selected={selectedColor} color="red" setSelectedColor={setSelectedColor}/>
        <Color selected={selectedColor} color="green" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};


export default App;
