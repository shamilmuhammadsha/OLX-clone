import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { AuthContext, FirebaseContext } from "../../store/Context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const history = useHistory();
  const Firebase = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const date = new Date();
  const handleSubmit = () => {
    Firebase.storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
          Firebase.firestore().collection("Products").add({
            name,
            category,
            price,
            url,
            userid: user.uid,
            createdAt: date.toDateString(),
          });
          history.push("/");
        });
      });
  };
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            // defaultValue="Enter Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            // defaultValue="Category"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="fname"
            name="Price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <br />

          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : null}
          ></img>

          <br />
          <input
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
            type="file"
          />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">
            upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
