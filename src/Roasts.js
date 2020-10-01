import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Roasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/homepage/Roasts/")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }
  handleUpvote = (post_id) => (event) => {
    let post_url = "http://127.0.0.1:8000/api/homepage/" + post_id + "/upvote/";
    fetch(post_url, { method: "POST" });
    window.location.href = "/roasts";
  };

  handleDownvote = (post_id) => (event) => {
    let post_url =
      "http://127.0.0.1:8000/api/homepage/" + post_id + "/downvote/";
    fetch(post_url, { method: "POST" });
    window.location.href = "/roasts";
  };

  render() {
    return (
      <div>
        <br />
        <div className="menu-links">
          <Link to="/">
            <Button>All Posts</Button>
          </Link>
          <Link to="/boasts">
            <Button>All Boasts</Button>
          </Link>
          <Link to="/roasts">
            <Button>All Roasts</Button>
          </Link>
          <Link to="/popular">
            <Button>Most Popular</Button>
          </Link>
          <Link to="/create">
            <Button>Create Post</Button>
          </Link>
        </div>
        <div className="main">
          <h1>Ghost Post</h1>
          <h2>- All Roasts</h2>
          <br />
          {this.state.posts.map((p) => (
            <div key={p.id}>
              <Card style={{ width: "30rem" }}>
                <Card.Body>
                  <div>
                    <h3>{p.post_type.toUpperCase()}</h3>
                    <h4>{p.post_text}</h4>
                    <ul>
                      <li>Id: {p.id}</li>
                      <li>Vote Score: {p.total_votes}</li>
                      <li>Submission Time: {p.submission_time}</li>
                      <li>Last Updated: {p.last_updated}</li>
                      <br />
                      <Button onClick={this.handleUpvote(p.id)}>
                        UP-{p.up_votes}
                      </Button>
                      &nbsp;
                      <Button onClick={this.handleDownvote(p.id)}>
                        DOWN-{p.down_votes}
                      </Button>
                      <br />
                    </ul>
                  </div>
                </Card.Body>
              </Card>
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Roasts;
