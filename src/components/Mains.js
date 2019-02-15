import React from "reactn";
import firebase from "../firestore";

class Mains extends React.Component {
  componentDidMount() {
    const db = firebase.firestore();
    db.collection("recipes")
      .where("category", "==", "mains")
      .get()
      .then(res => {
        console.log(res);
        let mains = [];
        res.forEach(doc => {
          let recipe = doc.data();
          recipe.id = doc.id;
          mains.push(recipe);
        });
        this.setGlobal({ mains });
      });
  }
  render() {
    return (
      <div className="Mains">
        <h1>Mains</h1>
        {this.global.mains.map(recipe => (
          <h1>{recipe.title}</h1>
        ))}
      </div>
    );
  }
}

export default Mains;
