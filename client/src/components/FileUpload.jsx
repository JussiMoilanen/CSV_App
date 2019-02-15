import React from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import csv from 'csv'

class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      message: null,
      id: 0,
    };
  }
  // componentDidMount() {
  // this.getDataFromDb();
  //   if (!this.state.intervalIsSet) {
  //     let interval = setInterval(this.getDataFromDb, 4000);
  //     this.setState({ intervalIsSet: interval });
  //   }
  // }
  // // our first get method that uses our backend api to
  // // fetch data from our data base
  // getDataFromDb = () => {
  //   fetch("http://localhost:3001/api/getData")
  //     .then(data => data.json())
  //     .then(res => this.setState({ data: res.data }));
  // };


    putDataToDB = (message) => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:3001/api/putData", {
      id: idToBeAdded,
      message: message
    });
  };


  render() {

    const { data } = this.state;


    return (
            <div style={{ padding: "10px" }}>
              <input
                type="text"
                onChange={e => this.setState({ message: e.target.value })}
                placeholder="add something in the database"
                style={{ width: "200px" }}
              />
              <button onClick={() => this.putDataToDB(this.state.message)}>
                ADD
              </button>
            </div>
    );
  }
}
export default FileUpload;
