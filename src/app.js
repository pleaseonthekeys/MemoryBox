import React from "react";
import axios from "axios";
import Login from "./login";
import Songs from "./Songs";
import Memories from "./memories";

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
      console.log({ songData: data });
    });
  }

  // onSongClick(songId) {
  //   this.getMemories(songId);
  // }

  getMemories() {
    return axios.get(`/memories/`).then(({ data }) => {
      console.log({ memories: data }, { songId: songId });
      this.setState({ memories: data });
    });
  }

  writeMemory(memory) {
    return axios.post("/memories", memory);
  }

  render() {
    return (
      <>
        <Login songs={this.state.songs} getSongs={this.getSongs} />
        <Songs
          songs={this.state.songs}
          onSongClick={this.onSongClick}
          getMemories={this.getMemories}
        />
        <Memories
          writeMemory={this.writeMemory}
          getMemories={this.getMemories}
          memories={this.state.memories}
        />
      </>
    );
  }
}

export default App;
