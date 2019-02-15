import React from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import classNames from 'classnames'
import csv from 'csv'

class DropZone extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      acceptedFiles: [],
      rejectedFiles: [],
      uploadstatus: false,
      fileID: 0
    };
  }


  handleOnDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    const reader = new FileReader();
    reader.onload = function(acceptedFiles) {
    // Use reader.result
      console.log(reader.result);
      csv.parse(reader.result, (err, data) => {
          console.log(data);
      });
    }
          reader.readAsBinaryString(acceptedFiles[0]);
}
  //  onDrop = (e) => {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //         csv.parse(reader.result, (err, data) => {
  //             console.log(data);
  //         });
  //     };
  //
  //     reader.readAsBinaryString(e[0]);
  // }

render() {
    return (
      <Dropzone accept=".csv" onDrop={this.handleOnDrop}>
        {({getRootProps, getInputProps, isDragActive}) => {
          return (
            <div
              {...getRootProps()}
              className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
            >
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop files here...</p> :
                  <p>Try dropping some files here, or click to select files to upload.</p>
              }
            </div>
          )
        }}
      </Dropzone>
    );
  }
}
export default DropZone;
