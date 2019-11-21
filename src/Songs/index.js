import React, { Component } from "react";

export class Songs extends Component {
  constructor(props) {
    super(props);

    this.onSongClick = this.onSongClick.bind(this);
  }

  onSongClick(e) {
    e.persist();
    let id = e.target.attributes[1].value;
    this.props.getMemories(Number(id));
  }

  render() {
    return (
      <div>
        {this.props.songs.map(song => {
          return (
            <div>
              <h2>{song.song_title}</h2>
              <img
                src={song.img_url}
                style={{ width: "100px", height: "100px" }}
                onClick={this.onSongClick}
                value={song.id}
              />
              <p>
                by: {song.artist}{" "}
                <a href={song.youtube_url}>Listen now on YouTube!</a>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Songs;
