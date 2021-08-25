import { Component } from 'react';

class PDFViewer extends Component {
  componentDidMount() {
    const { filepath } = this.props;
    window.location = filepath;
  }

  render() {
    return null;
  }
}

export default PDFViewer;
