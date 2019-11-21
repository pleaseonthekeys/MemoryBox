import React from "react";
import axios from "axios";
import Login from "./login";
import Songs from "./Songs";
// import Memories from "./memories";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    };
    this.getSongs = this.getSongs.bind(this);
    this.getMemories = this.getMemories.bind(this);
    this.writeMemory = this.writeMemory.bind(this);
  }

  getSongs() {
    return axios.get("/songs").then(({ data }) => {
      this.setState({ songs: data });
    });
  }

  // onSongClick(songId) {
  //   this.getMemories(songId);
  // }

  getMemories(songId) {
    let currentSongId = songId;
    this.setState({ currentSongId });
    return axios
      .get(`/memories`)
      .then(({ data }) => {
        let eachSongMem = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === currentSongId) {
            eachSongMem.push({
              memory: data[i].memory,
              memory_key: data[i].memory_key
            });
          }
        }
        this.setState({ memories: eachSongMem });
      })
      .then(() => {
        console.log(this.state.memories);
      });
  }

  writeMemory(memory) {
    return axios
      .post("/memories", memory)
      .then(() => {
        this.getMemories(this.state.currentSongId);
      })
      .catch(err => {
        console.log("error creating new memory in client");
      });
  }

  render() {
    return (
      <>
        <Login songs={this.state.songs} getSongs={this.getSongs} />
        <Songs
          songs={this.state.songs}
          getMemories={this.getMemories}
          writeMemory={this.writeMemory}
          memories={this.state.memories}
        />
        {/* <Memories
          writeMemory={this.writeMemory}
          memories={this.state.memories}
        /> */}
      </>
    );
  }
}

export default App;
