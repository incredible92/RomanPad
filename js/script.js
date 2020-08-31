const data = [
  { id: "", roman: "I", src: "" },
  { id: "", roman: "II", src: "" },
  { id: "", roman: "III", src: "" },
  { id: "", roman: "IV", src: "" },
  { id: "", roman: "V", src: "" },
  { id: "", roman: "VI", src: "" },
  { id: "", roman: "VII", src: "" },
  { id: "", roman: "VIII", src: "" },
  { id: "", roman: "IX", src: "" },
  { id: "", roman: "X", src: "" },
  { id: "", roman: "XX", src: "" },
  { id: "", roman: "XXX", src: "" },
  { id: "", roman: "XL", src: "" },
  { id: "", roman: "L", src: "" },
  { id: "", roman: "LX", src: "" },
  { id: "", roman: "LXX", src: "" },
  { id: "", roman: "LXXX", src: "" },
  { id: "", roman: "XC", src: "" },
  { id: "", roman: "C", src: "" },
];
class RomanPad extends React.Component {
  render() {
    return;
    <div className="Roman-pad"></div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="roman-device">
        <div id="display"></div>
        {data.map((d) => (
          <romanPad />
        ))}
      </div>
    );
  }
}

// class RomanPad extends React.Component {
//   componenetDidMount() {
//     console.log(this.audio);
//     document.addEventListener("keydown", this.handlekeydown);
//     window.focus();
//   }
//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.handlekeydown);
//   }
//   handleKeydown = (e) => {
//     if (e.keyCode === this.props.roman.chartCodeAt()) {
//       this.audio.play();
//       this.audio.currentTime = 0;
//       this.props.handleDisplay(this.props.id);
//     }
//   };
// handleClick = () => {
//   this.audio.play();
//       this.audio.currentTime = 0;
//       this.props.handleDisplay(this.props.id);
// }
