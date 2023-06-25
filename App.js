import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TagAutoComplete from 'react-tag-autocomplete';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState([{ institute: '', year: '', degree: '' }]);
  const [experience, setExperience] = useState([{ company: '', year: '', designation: '' }]);
  const [skills, setSkills] = useState([]);

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleAddEducation = () => {
    setEducation([...education, { institute: '', year: '', degree: '' }]);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: '', year: '', designation: '' }]);
  };

  const handleSkillAdd = (tag) => {
    setSkills([...skills, tag]);
  };

  const handleSkillDelete = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or other desired actions
    console.log({
      name,
      email,
      address,
      phone,
      education,
      experience,
      skills,
    });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center font-weight-bold">Resume</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>

        <hr />

        <h5>Education</h5>
        {education.map((edu, index) => (
          <Row key={index}>
            <Col>
              <Form.Group controlId={`education-institute-${index}`}>
                <Form.Control
                  type="text"
                  placeholder="Institute"
                  value={edu.institute}
                  onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`education-year-${index}`}>
                <Form.Control
                  type="text"
                  placeholder="Year"
                  value={edu.year}
                  onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`education-degree-${index}`}>
                <Form.Control
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        ))}
        <Button variant="secondary" size="sm" onClick={handleAddEducation}>
          <FontAwesomeIcon icon={faPlus} /> Add Education
        </Button>

        <hr />

        <h5>Experience</h5>
        {experience.map((exp, index) => (
          <Row key={index}>
            <Col>
              <Form.Group controlId={`experience-company-${index}`}>
                <Form.Control
                  type="text"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`experience-year-${index}`}>
                <Form.Control
                  type="text"
                  placeholder="Year"
                  value={exp.year}
                  onChange={(e) => handleExperienceChange(index, 'year', e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`experience-designation-${index}`}>
                <Form.Control
                  type="text"
                  placeholder="Designation"
                  value={exp.designation}
                  onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        ))}
        <Button variant="secondary" size="sm" onClick={handleAddExperience}>
          <FontAwesomeIcon icon={faPlus} /> Add Experience
        </Button>

        <hr />

        <h5>Skills</h5>
        <TagAutoComplete
          tags={skills}
          suggestions={['PHP', 'JavaScript', 'React', 'CSS', 'HTML']}
          handleAddition={handleSkillAdd}
          handleDelete={handleSkillDelete}
        />

        <Button variant="primary" type="submit" className="mt-3">
          Save
        </Button>
      </Form>
    </Container>
  );
}

export default App;
