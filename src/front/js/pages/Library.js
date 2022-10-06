import React from 'react'

export default function Library() {
  return fetch(
    "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2C%20contentDetails&channelId=UCRs1pHnES3QDdh43xbjOmzw&maxResults=25&key=AIzaSyDyOFAihF9tKeZ4YTMpVWg7WD4MLA9jKMg"
  )
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      let videos = data.items;
      let videoContainer = document.querySelector(".videos-container");
      for (video of videos) {
        videoContainer.innerHTML += `
        <img src"${video.snippet.thumbnails.default.url}">
        `;
      }
    });
}
