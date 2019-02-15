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
      <div
        className="Mains"
        style={{
          maxWidth: "595px",
          background: "#ffffff",
          borderRadius: "15px",
          margin: "0 auto"
        }}
      >
        <h1>Mains</h1>
        {this.global.mains.map(recipe => (
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

export default Mains;
