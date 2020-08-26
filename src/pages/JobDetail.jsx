import React, { Component } from "react";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJsSquare,
  faPhp,
  faNodeJs,
  faPython,
  faCss3Alt,
  faSketch,
  faHtml5,
  faFigma,
  faUikit,
} from "@fortawesome/free-brands-svg-icons";
import { MDBBtn } from "mdbreact";


const tags = [
  "frontend",
  "css",
  "react",
  "javascript",
  "php",
  "node.js",
  "python",
  "sketch",
  "ui",
  "html",
  "figma",
];

export class JobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: this.props.location.job,
    };
  };

  saveJob = (job) => {
    const userId = this.props.user._id
    
    axios
      .post(`${process.env.REACT_APP_API_URL}/job/job-detail`, {job, userId})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  dynamicImage = (tag) => {
   
    var returnvalue
    switch (tag) {
      case "react":
        returnvalue= <FontAwesomeIcon icon={faReact} />;
        break;
      case "javascript":
        returnvalue = <FontAwesomeIcon icon={faJsSquare} />;
        break;
      case "php":
        returnvalue = <FontAwesomeIcon icon={faPhp} />;
        break;
      case "node.js":
        returnvalue = <FontAwesomeIcon icon={faNodeJs} />;
        break;
      case "css":
        returnvalue = <FontAwesomeIcon icon={faCss3Alt} />;
        break;
      case "python":
        returnvalue = <FontAwesomeIcon icon={faPython} />;
        break;
      case "frontend":
        returnvalue = <FontAwesomeIcon icon={faDesktop} />;
        break;
      case "sketch":
        returnvalue = <FontAwesomeIcon icon={faSketch} />;
        break;
      case "html":
        returnvalue = <FontAwesomeIcon icon={faHtml5} />;
        break;
        case "figma":
        returnvalue =<FontAwesomeIcon icon={faFigma} />;
        break;
        case "ui":
          returnvalue = <FontAwesomeIcon icon={faUikit} />;
          break;
      default:
        break;
    }
    return returnvalue
  };

  render() {
   
    return (
      <div className="js-content section cover">


<Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
 
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
        <h3>{this.state.job.title}</h3>
        <section>
          <div>
            <h5>Company name</h5>
            <p>{this.state.job.company_name}</p>
          </div>
          <div>
            <h5>Job type</h5>
            <p>{this.state.job.title}</p>
          </div>
          <div>
            <h5>Offer location</h5>
            <p>{this.state.job.candidate_required_location}</p>
          </div>
          <div>
            <h5>Publication date</h5>
            <p>{this.state.job.publication_date}</p>
          </div>
          <div>
            <h5>Publication date</h5>
            <p>{this.state.job.salary}</p>
          </div>
          <div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={this.state.job.url}
            >
              Check out more
            </a>
          </div>
        </section>

        <section>
          <h2>TECHNOLOGIES</h2>

          {this.state.job.tags.map((tag, i) => {
            return tags.includes(tag.toLowerCase()) ? (
              <div key={i}>
                {this.dynamicImage(tag.toLowerCase())}
                <h4>{tag.toUpperCase()}</h4>
              
              </div>
            ) : (
              <br style={{display:'none'}} key={i} />
            );
          })}
        </section>
        <Link to={"/pending"}>
          <MDBBtn onClick={this.saveJob(this.state.job)} color="light-grey" size="sm">
          Save job as draft
          </MDBBtn>
        </Link>
      </div>
    );
  }
}

export default withAuth(JobDetail);
