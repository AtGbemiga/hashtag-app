import React from "react"
import ReactDOM  from "react-dom";

class TextareaLogic extends React.Component{
  constructor(props) {
    super(props);
    this.state = {inputValue: ""} 
    this.getTextareaInputMethod = this.getTextareaInputMethod.bind(this)
  }
    getTextareaInputMethod(event) {
      this.setState({inputValue: event.target.value})
    }
  render() {
    return(
      <>
          <TextareaBox inputValue = {this.state.inputValue} getTextareaInputMethod = {this.getTextareaInputMethod}/>
          <ConvertToArrAndFindDuplicate inputValue = {this.state.inputValue} getTextareaInputMethod = {this.getTextareaInputMethod} />
          <DeleteDuplicate inputValue = {this.state.inputValue} getTextareaInputMethod = {this.getTextareaInputMethod} />
      </>
    )
  }
}

class TextareaBox extends React.Component{
  render() {
    return(
      <textarea inputValue = {this.props.inputValue} ></textarea>
    )
  }
}

class ConvertToArrAndFindDuplicate extends React.Component{
  constructor(props) {
    super(props)
    this.state = {data: this.props.inputValue}
    this.convertToArrMethod = this.convertToArrMethod.bind(this)
  }
  convertToArrMethod(data) {
    this.firstBtnMethod(
      this.setState((state) => 
      {const firstResult = data.split(" ")
       const secondResult = firstResult.filter((value, index) => firstResult.indexOf(value) !== index)
       return {data: {secondResult}}
      }
      )
    )
  }
  render() {
    return(
      <>
        <DuplicateLength data = {this.state.data} convertToArrMethod = {this.convertToArrMethod} />
        <BtnEvent convertToArrMethod = {this.convertToArrMethod} />
      </>
    )
  }
}

class DeleteDuplicate extends React.Component{
  constructor(props) {
    super(props)
    this.state = {deleteVar: this.props.inputValue}
    this.deleteDuplicateMethod = this.deleteDuplicateMethod.bind(this)
  }
  deleteDuplicateMethod(deleteVar) {
    this.secondBtnMethod(
      this.setState((state) => {      
        const fourthResult = deleteVar
        let uniqueChars = [...new Set(fourthResult)].join(" ");
        return {deleteVar: {uniqueChars}}
      })
    )
  }
  render() {
    return(
      <>
        {this.state.deleteVar}
      </>
    )
  }
}

class DuplicateLength extends React.Component{
  constructor(props) {
    super(props)
    this.state = {lengthVar: this.props.data}
    this.duplicateLengthMethod = this.duplicateLengthMethod.bind(this)
  }
  duplicateLengthMethod(lengthVar) {
    this.firstBtnMethod(
      this.setState((state) => {
        const thirdResult = lengthVar.length
        return {lengthVar: {thirdResult}}
      })
    )
  }
  render() {
    return(
      <>
        {this.state.lengthVar}
      </>
    )
  }
}



class BtnEvent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {mode: "Find Similar Hashtags"}
    this.firstBtnMethod = this.firstBtnMethod.bind(this)
    this.secondBtnMethod = this.secondBtnMethod.bind(this)
  }
  firstBtnMethod(event) {
      this.setState(
        {mode: "Replace Similar Hashtags"}
      )
      this.props.updateMethod("Replace Similar Hashtags");
  }
  secondBtnMethod(event) {
    this.setState({mode: "Copy"})
    this.props.updateMethod("Copy");
  }
  render() {
    return(
      <button onClick={this.state.mode === "Find Similar Hashtags" ? this.firstBtnMethod : this.secondBtnMethod}>{this.state.mode}</button>
    )
  }
}

class SectionOne extends React.Component{
  render() {
    return(
      <>
        <h3>Updates</h3>
        <h4>Issues found</h4>
        <DuplicateLength />
      </>
    )
  }
}

class SectionTwo extends React.Component{
  render() {
    return(
      <>
        <h4>Heading</h4>
        <TextareaBox />
        <BtnEvent />
      </>
    )
  }
}

class App extends React.Component{
  constructor(props) {
    super(props);
 
  }
  render() {
    return (
      <div className="d-flex justify-content-between">
        <SectionOne/>
        <SectionTwo />
      </div>
    )
  }
}

export default App;
