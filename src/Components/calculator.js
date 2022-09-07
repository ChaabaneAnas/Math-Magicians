class Display extends React.Component{
 render(){
  return <div className ="display"></div>
 }
}

class Operations extends React.Component {
  render(){
    return <div className="operations">
      <div>/</div>
      <div>x</div>
      <div>-</div>
      <div>+</div>
      <div>=</div>
    </div>
  }
}

class Keyboard extends React.Component {
  render(){
    return <div className="keyboard">
      <div>AC</div>
      <div>+/-</div>
      <div>%</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div className="Zero">0</div>
      <div>.</div>
    </div>
  }
}

export {Keyboard, Operations, Display}