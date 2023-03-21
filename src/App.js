import React from "react";
import ReactDOM from "react-dom";

class TextareaLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", duplicates: [], mode: "Find Similar Hashtags" };
    this.getTextareaInputMethod = this.getTextareaInputMethod.bind(this);
    this.convertToArrAndFindDuplicate = this.convertToArrAndFindDuplicate.bind(this);
    this.deleteDuplicate = this.deleteDuplicate.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.copyContent = this.copyContent.bind(this);
  }

  getTextareaInputMethod(event) {
    this.setState({ inputValue: event.target.value, duplicates: [], mode: "Find Similar Hashtags" });
  }

  convertToArrAndFindDuplicate() {
    const { inputValue } = this.state;
    const firstResult = inputValue.split(" ");
    const duplicates = firstResult.filter((value, index) => firstResult.indexOf(value) !== index);
    this.setState({ duplicates, mode: "Remove Duplicates" });
  }

  deleteDuplicate() {
    const { inputValue } = this.state;
    const firstResult = inputValue.split(" ");
    const uniqueChars = [...new Set(firstResult)].join(" ");
    this.setState({ inputValue: uniqueChars, mode: "Copy" });
  }

  copyContent() {
    const textarea = document.getElementById("textarea");
    textarea.select();
    document.execCommand("copy");
    this.setState({ mode: "Copied!" });
  }

  handleButtonClick() {
    const { mode } = this.state;
    if (mode === "Find Similar Hashtags") {
      this.convertToArrAndFindDuplicate();
    } else if (mode === "Remove Duplicates") {
      this.deleteDuplicate();
    } else if (mode === "Copy") {
      this.copyContent();
    }
  }

  render() {
    const { inputValue, duplicates, mode } = this.state;
    return (
      <>
        <TextareaBox inputValue={inputValue} getTextareaInputMethod={this.getTextareaInputMethod} />
        {duplicates.length > 0 && <DuplicateLength count={duplicates.length} />}
        <button onClick={this.handleButtonClick}>{mode}</button>
      </>
    );
  }
}

class TextareaBox extends React.Component {
  render() {
    const { inputValue, getTextareaInputMethod } = this.props;
    return <textarea id="textarea" value={inputValue} onChange={getTextareaInputMethod}></textarea>;
  }
}

class DuplicateLength extends React.Component {
  render() {
    const { count } = this.props;
    return <div>{count} duplicates found.</div>;
  }
}

class SectionOne extends React.Component{
  render() {
    return(
      <>
        <h3>Hashtag Updates</h3>
        <DuplicateLength />
      </>
    )
  }
}

class SectionTwo extends React.Component{
  render() {
    return(
      <>
        <h3>Type in hashtags here</h3>
        <TextareaBox />
      </>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="">
        <SectionOne />
        <TextareaLogic />
      </div>
    );
  }
}

export default App;
