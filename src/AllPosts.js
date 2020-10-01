import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

class AllPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/homepage/")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }

  handleUpvote = (post_id) => (event) => {
    let post_url = "http://127.0.0.1:8000/api/homepage/" + post_id + "/upvote/";
    fetch(post_url, { method: "POST" });
    window.location.href = "/";
  };

  handleDownvote = (post_id) => (event) => {
    let post_url =
      "http://127.0.0.1:8000/api/homepage/" + post_id + "/downvote/";
    fetch(post_url, { method: "POST" });
    window.location.href = "/";
  };

  render(props) {
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
          <h1>Ghost Post</h1>
          <h2>- All Posts</h2>
          {this.state.posts.map((p) => (
            <div key={p.id}>
              <h3>{p.post_type.toUpperCase()}</h3>
              <ul>
                <li>Id: {p.id}</li>
                <li>Post: {p.post_text}</li>
                <li>Vote Score: {p.total_votes}</li>
                <li>Submission Time: {p.submission_time}</li>
                <li>Last Updated: {p.last_updated}</li>
                <br />
                <button onClick={this.handleUpvote(p.id)}>
                  UP-{p.up_votes}
                </button>
                &nbsp;
                <button onClick={this.handleDownvote(p.id)}>
                  DOWN-{p.down_votes}
                </button>
                <br />
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllPosts;
