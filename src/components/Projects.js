import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1img from "../assets/img/project1img.png";
import project2img from "../assets/img/project2img.png";
import project3img from "../assets/img/project3img .png";
import project4img from "../assets/img/project4img.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Grocery-list maker",
      link: "https://mylist01.netlify.app/",
      description:
        " App streamlines shopping by enabling users to effortlessly create and manage lists. With intuitive organization and tracking features, it ensures efficient shopping trips while saving time and preventing forgetfulness.",
      imgUrl: project1img,
    },
    {
      title: "Weather-app",
      link: "https://weatherkyahai.netlify.app/",
      description:
        "Provides users with accurate and up-to-date weather forecasts. With detailed information on current conditions, hourly and daily forecasts, and interactive maps, users can plan their activities with confidence and stay prepared for changing weather conditions.",
      imgUrl: project2img,
    },
    {
      title: "Movie-app",
      link: "https://your-movie-rating.netlify.app/",
      description:
        "Offers a comprehensive platform for movie enthusiasts to explore, discover, and organize their favorite films. With a vast database, personalized recommendations, and easy-to-use features, users can find the perfect movie for any occasion effortlessly.",
      imgUrl: project3img,
    },
    {
      title: "Edusity",
      link: "https://educityorg.netlify.app/",
      description:
        "Serves as a versatile educational hub, offering a range of courses and resources for learners of all levels. With interactive content, expert instructors, and a user-friendly interface, it empowers individuals to pursue lifelong learning and skill development.",
      imgUrl: project4img,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    "In my projects, I leverage cutting-edge front-end
                    technologies to create intuitive and visually appealing user
                    interfaces. From responsive web designs to interactive
                    prototypes, each project showcases my proficiency in HTML,
                    CSS, and JavaScript. With a keen eye for detail and a
                    passion for user experience, I strive to craft engaging
                    digital experiences that leave a lasting impression."
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                link={project.link}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Coming Soon</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Coming Soon</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
