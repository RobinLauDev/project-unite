import React, { useState, useEffect, useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Text } from '../atoms/Text';
import { TagsWithIcon } from '../molecules/TagsWithIcon';
import { ContentColumn } from '../molecules/ContentColumn';
import { Buttoon } from '../atoms/Button';
const { REACT_APP_API_URL } = process.env;

export const ProjectDetails = () => {
  let params = useParams();
  const [project, setProject] = useState([])

  useEffect(() => {
    fetch(`${REACT_APP_API_URL}/projects/${params._id}`)
    .then(response => response.json())
    .then(data => {
      setProject(data);
    })
  }
  , []);  

return (
    <>    
      <Container className="projectDetails">
      <Link to={"/"}><Buttoon value="←" className="backButton"/></Link>
        <h1 className="mb-4">{project.title}</h1>
        <Row>
            <ContentColumn header={"Project beschrijving"}>
              <Text text={project.projectBeschrijving} type="paragraph" />
            </ContentColumn>
            <ContentColumn header={"Activiteiten beschrijving"}>
              <Text text={project.takenBeschrijving} type="paragraph"/>
            </ContentColumn>
          <Col lg={4}>
            <ContentColumn header={"Project tags"}>
              {project.length !== 0 &&       
                <>
                    <TagsWithIcon items={project["location"]} color="grey" category="location"/>
                    <hr/>
                    <TagsWithIcon items={project["skills"]} color="green" category="skills"/>
                    <hr/>
                    <TagsWithIcon items={project["type"]} color="grey" category="type"/>
                    <hr/>
                    <TagsWithIcon items={project["rewards"]} color="grey" category="rewards"/>
                </>}
            </ContentColumn>
          </Col>
        </Row>
      </Container>
    </>  
);
}



