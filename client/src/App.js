import React from "react";

function Food({ name, photo }) {
  return (
    <div>
      <h1>i like {name}</h1>
      <img src={photo} alt={name} />
    </div>
  );
}

const foodLike = [
  {
    name: "kimchi",
    image:
      "https://img.etoday.co.kr/pto_db/2019/05/600/20190520155753_1330258_1200_1802.jpg",
  },
  {
    name: "ramen",
    image: "https://i.ytimg.com/vi/Hfob_-hVBS4/maxresdefault.jpg",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/hello")
      .then((res) => res.json())
      .then((data) => this.setState({ title: data.id }));
  }

  render() {
    return (
      <div className="App">
        {foodLike.map((dish) => (
          <Food name={dish.name} />
        ))}
      </div>
    );
  }
}

export default App;
