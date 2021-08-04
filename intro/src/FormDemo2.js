import React, { Component } from 'react'
import { Button,Form,FormGroup,Label,Input } from 'reactstrap'
import alertifyjs from "alertifyjs"
export default class Form2 extends Component {
    state={email:'',password:'',description:'',city:''};
    handleChange=event=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({[name]:value});
    }
    handleSubmit=event=>{
        event.preventDefault();
        alertifyjs.success(this.state.email + " added to db !", 2)
        alertifyjs.success(this.state.password + " added to db !", 2)
        alertifyjs.success(this.state.description + " added to db !", 2)
        alertifyjs.success(this.state.city + " added to db !", 2)

    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter Email" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter Password" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" placeholder="Enter Description" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city" name="city">City</Label>
                        <Input type="select" name="city" id="city" onChange={this.handleChange}>
                            <option>İstanbul</option>
                            <option>Ankara</option>
                            <option>İzmir</option>
                            <option>Adana</option>
                            <option>Diyarbakır</option>
                            <option>Şanlıurfa</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" >Save</Button>
                </Form>
                
            </div>
        )
    }
}
