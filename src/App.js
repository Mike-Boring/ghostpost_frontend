import React from "react";
import "./App.css";

class App extends React.Component {
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

  render() {
    return (
      <div>
        <h1>Ghost Post</h1>
        {this.state.posts.map((p) => (
          <div key={p.id}>
            <ul>
              <li>Post Type: {p.post_type}</li>
              <li>Post: {p.post_text}</li>
              <li>Up Votes: {p.up_votes}</li>
              <li>Down Votes: {p.down_votes}</li>
              <li>Submission Time: {p.submission_time}</li>
              <li>Last Updated: {p.last_updated}</li>
              <li>Total Votes: {p.total_votes}</li>
              <br />
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
