import React from "reactn";
import firebase from "../firestore";

class Sides extends React.Component {
  componentDidMount() {
    const db = firebase.firestore();
    db.collection("recipes")
      .where("category", "==", "sides")
      .get()
      .then(res => {
        console.log(res);
        let sides = [];
        res.forEach(doc => {
          let recipe = doc.data();
          recipe.id = doc.id;
          sides.push(recipe);
        });
        this.setGlobal({ sides });
      });
  }
  render() {
    return (
      <div
        className="Sides"
        style={{
          maxWidth: "595px",
          background: "#ffffff",
          borderRadius: "15px",
          margin: "0 auto"
        }}
      >
        <h1>Sides</h1>
        {this.global.sides.map(recipe => (
          <div>
            <br />
            <h1>{recipe.title}</h1>
            <p style={{ fontStyle: "italic" }}>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Sides;
