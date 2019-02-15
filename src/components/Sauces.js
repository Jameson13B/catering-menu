import React from "reactn";
import firebase from "../firestore";

class Sauces extends React.Component {
  componentDidMount() {
    const db = firebase.firestore();
    db.collection("recipes")
      .where("category", "==", "sauces")
      .get()
      .then(res => {
        console.log(res);
        let sauces = [];
        res.forEach(doc => {
          let recipe = doc.data();
          recipe.id = doc.id;
          sauces.push(recipe);
        });
        this.setGlobal({ sauces });
      });
  }
  render() {
    return (
      <div className="Sauces">
        <h1>Sauces</h1>
        {this.global.sauces.map(recipe => (
          <h1>{recipe.title}</h1>
        ))}
      </div>
    );
  }
}

export default Sauces;
