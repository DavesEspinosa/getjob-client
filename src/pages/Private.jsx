import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";


class Private extends Component {
  state = {
    job: [],
  };

  getJob() {
    axios
      .get("http://localhost:4000/api/test")
      .then((responseFromApi) => {
        this.setState({
          job: responseFromApi.data.jobs,
        });
        //console.log(responseFromApi.data);
        console.log(this.state.job);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getJob();
  }
  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>

        {this.state.job.map((job) => {
          return (
            <div key={job.id}>
              <a rel="noopener noreferrer" target='_blank' href={job.url}>{job.url}</a>
              <ul>
                <li>{job.tags[0]}</li>
                <li>{job.tags[1]}</li>
                <li>{job.tags[2]}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAuth(Private);
