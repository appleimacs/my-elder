import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Search = (props) => {
  return (
    <Row>
      <Col lg={{span:4,offset:4}} >
        <InputGroup className="mt-3 mb-3">
          <FormControl
            placeholder="Search for a card name"
            aria-label="Search"
            id="search"
          />
          <InputGroup.Append>
            <Button onClick={props.onClicked} >Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default Search;
