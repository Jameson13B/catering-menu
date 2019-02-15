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
      <div className="Sides">
        <h1>Sides</h1>
        {this.global.sides.map(recipe => (
          <h1>{recipe.title}</h1>
        ))}
      </div>
    );
  }
}

export default Sides;
