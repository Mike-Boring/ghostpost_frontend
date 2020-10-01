import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: "", about: "", displayName: "" };
  }

  handleAddPost = (event) => {
    event.preventDefault();
    this.props.edituser(this.state);
    document.getElementById("post_type").value = "";
    document.getElementById("post_text").value = "";

    let post_url = "http://127.0.0.1:8000/api/homepage/";
    fetch(post_url, { method: "POST" });
  };

  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
              <select onChange={this.handleChange} name="post_type">
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
                placeholder="new post here"
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
