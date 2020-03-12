import React from 'react';
import { Button, Form, } from 'react-bootstrap';

class FlashcardForm extends React.Component {
  
  state = { front: '', back: '', showBack: false }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state)
    this.setState({front: '', back: '',})
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Question: </Form.Label>
          <Form.Control 
          placeholder='Enter your question'
          value={this.state.front}
          onChange={this.handleChange}
          name='front'
          />
          <Form.Label>Answer: </Form.Label>
          <Form.Control 
          placeholder='Enter your answer'
          value={this.state.back}
          onChange={this.handleChange}
          name='back'
          />
         {/* <Button onSubmit={this.handleSubmit}>Submit</Button> */}
         <button onSubmit={this.handleSubmit}>Submit</button>
        </Form.Group>
      </Form>
    )
  }
}

export default FlashcardForm;