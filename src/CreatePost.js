import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post_type: "boast", post_text: "" };
  }

  handleAddPost = (event) => {
    event.preventDefault();
    let data = JSON.stringify({
      post_type: this.state.post_type,
      post_text: this.state.post_text,
    });
    let post_url = "http://127.0.0.1:8000/api/homepage/";
    fetch(post_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(data),
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        document.getElementById("post_type").value = "boast";
        document.getElementById("post_text").value = "";
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <br />
        <div className="menu-links">
          <Link to="/">
            <button>All Posts</button>
          </Link>
          <Link to="/boasts">
            <button>All Boasts</button>
          </Link>
          <Link to="/roasts">
            <button>All Roasts</button>
          </Link>
          <Link to="/popular">
            <button>Most Popular</button>
          </Link>
          <Link to="/create">
            <button>Create Post</button>
          </Link>
        </div>
        <div className="main">
          <h1>Create Post</h1>
          <form id="postmessage-form" onSubmit={this.handleAddPost}>
            <label>
              Boast or Roast:&nbsp;
              <select
                onChange={this.handleChange}
                name="post_type"
                id="post_type"
              >
                <option value="boast">Boast</option>
                <option value="roast">Roast</option>
              </select>
            </label>
            <br />
            <br />
            <label>
              Post Text:&nbsp;
              <textarea
                type="text"
                name="post_text"
                id="post_text"
                placeholder="New post here"
                rows="2"
                columns="28"
                width="100%"
                autoFocus
                required
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePost;
