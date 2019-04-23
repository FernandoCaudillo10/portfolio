import React, { PureComponent } from 'react';
import resume from './pictures/resume.pdf';
import throttle from "lodash.throttle";
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ResumePage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {width: null}
  }

  componentDidMount () {
    this.setDivSize()
    window.addEventListener("resize", throttle(this.setDivSize, 500))
  }

  componentWillUnmount () {
    window.removeEventListener("resize", throttle(this.setDivSize, 500))
  }

  setDivSize = () => {
    this.setState({width: this.pdfWrapper.getBoundingClientRect().width})
  }

  render() {
    return (
      <div id="row" style={{height: "100%", width: "100%", display: "flex", overflow: "hidden"}}>
        <div id="placeholderWrapper" style={{width: "5%", height: "100%"}}/>
        <div id="pdfWrapper" style={{width: "90%"}} ref={(ref) => this.pdfWrapper = ref}>
          <PdfComponent wrapperDivSize={this.state.width} />
        </div>
      </div>
    )
  }
}

class PdfComponent extends PureComponent {
  render() {
    return (
      <div>
        <Document
          file={resume}
        >
          <Page pageNumber={1} width={this.props.wrapperDivSize} />
        </Document>
      </div>
    )
  }
}

export default ResumePage;
