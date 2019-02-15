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
      <div
        className="Sauces"
        style={{
          maxWidth: "595px",
          background: "#ffffff",
          borderRadius: "15px",
          margin: "0 auto"
        }}
      >
        <h1>Sauces</h1>
        {this.global.sauces.map(recipe => (
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

export default Sauces;
