import React from "react"
import ReactDOM  from "react-dom";

//Logic

// Display
/*class InformationDisplay extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <>
        <h3>Updates</h3>
      </>
    )
  }
}*/
/*class LogicBtn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Btn: <button className="btn btn-success">Find similar hashtags</button>
    }
    this.firstMethod = this.firstMethod.bind(this)
    this.secondMethod = this.secondMethod.bind(this)
  }
  firstMethod() {
    this.findDuplicates(this.setState({
      Btn: <button className="btn btn-primary">Replace similar hashtags</button>
    }))
  }
  secondMethod() {
    this.unknownMethod(this.setState({
      Btn: <button className="btn btn-primary">Copy changes</button>
    }))
  }
  render() {
    return(
      <>
        
        <div onClick={(this.firstMethod, this.secondMethod)}>{this.state.Btn}</div>
      </>
    )
  }
}*/


class FindDuplicates extends React.Component{
  constructor(props) {
    super(props);
    this.state = {inputValue: "", duplicateLength: 0, deleteDuplicate: null, copyDuplicate: null}
    this.findDuplicates = this.findDuplicates.bind(this)
    this.duplicateLengthMethod = this.duplicateLengthMethod.bind(this)
    this.deleteDuplicateMethod = this.deleteDuplicateMethod.bind(this)
    this.copyDuplicateMethod = this.copyDuplicateMethod.bind(this)
    
  }
    findDuplicates(event) {
      this.setState((state) => 
      {const firstResult = event.target.value.split(" ")
       const secondResult = firstResult.filter((value, index) => firstResult.indexOf(value) !== index)
       return {inputValue: <h3>{secondResult}</h3>}
      }
      )
    }

    duplicateLengthMethod(event) {
      this.setState((state) => {
        const firstResult = event.target.value.split(" ")
        const secondResult = firstResult.filter((value, index) => firstResult.indexOf(value) !== index)
        const thirdResult = secondResult.length
        return {duplicateLength: <h3>{thirdResult}</h3>}
      })
    }
    
    deleteDuplicateMethod(event) {
      this.setState((state) => {
        const firstResult = event.target.value.split(" ")
        
        const fourthResult = firstResult
        let uniqueChars = [...new Set(fourthResult)].join(" ");
        return {deleteDuplicate: <h3>{uniqueChars}</h3>}
      })
    }
    copyDuplicateMethod(event) {
      this.setState((state) => {
        const firstResult = event.target.value.split(" ")
        
        const fourthResult = firstResult
        let uniqueChars = [...new Set(fourthResult)].join(" ");
        return {copyDuplicate: <h3>{uniqueChars}</h3>}
      })
    }
  render() {
    return(
      <>
        <textarea inputValue = {this.state.inputValue} duplicateLength = {this.state.duplicateLength} onChange = {e =>((this.findDuplicates(e), this.duplicateLengthMethod(e), this.deleteDuplicateMethod(e), this.copyDuplicateMethod(e)))}></textarea>
        
        <DuplicatesContent inputValue = {this.state.inputValue} />
        {/*<DuplicatesLength duplicateLength = {this.state.duplicateLength} />*/}
        {/*<h3  >{this.state.duplicateLength}</h3> This shows length functionality*/}
        <DeleteDuplicate deleteDuplicateMethod = {this.state.deleteDuplicate} />
        <CopyDuplicate copyDuplicateMethod = {this.state.copyDuplicate} />
      </>
    )
  }
}

class DuplicatesContent extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <>
        {this.props.inputValue}
      </>
    )
  }
}

class DuplicatesLength extends React.Component{
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div>
        <h4>issues found</h4>
        <p>{this.props.duplicateLength}</p>
        
      </div>
    )
  }
}

class DeleteDuplicate extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.deleteDuplicateMethod}
      </>
    )
  }
}

class CopyDuplicate extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.copyDuplicateMethod}
      </>
    )
  }
}

/*class SectionOne extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <h2>Hashtag Updates</h2>
        
        <DuplicatesLength />
      </div>
    )
  }
}

class SectionTwo extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <h2>Type in Hashtags here</h2>
        <FindDuplicates />
      </div>
    )
  }
}*/

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {duplicateLength: 0}
    this.duplicateLengthMethod = this.duplicateLengthMethod.bind(this)
  }
  duplicateLengthMethod(event) {
    this.setState((state) => {
      const firstResult = event.target.value.split(" ")
      const secondResult = firstResult.filter((value, index) => firstResult.indexOf(value) !== index)
      const thirdResult = secondResult.length
      return {duplicateLength: <h3>{thirdResult}</h3>}
    })
  }
  render() {
    return (
      <div className="d-flex justify-content-between">
        <FindDuplicates />
        <DuplicatesLength duplicateLength = {this.state.duplicateLength} />
      </div>
    )
  }
}

export default App;
