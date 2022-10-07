import React from "react";

export async function getServerSideProps() {
  const res = await fetch(
    "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCRs1pHnES3QDdh43xbjOmzw&maxResults=5&key=AIzaSyDyOFAihF9tKeZ4YTMpVWg7WD4MLA9jKMg"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function VideoLibrary({ library }) {
  console.log(library);
  return (
    <div className="text-center mt-5 videos-container">
      {library && library.items && library.items.map((item) => {

        const { id, snippet = {} } = item;
        const { title, thumbnails = {} } = snippet;
        const { medium = {} } = thumbnails;
        return (
          <li key={id} className="card">
            <p>
              <img
                width={medium.width}
                height={medium.height}
                src={medium.url}
                alt=""
              />
            </p>
          </li>
        );
      })}
    </div>
  );
}
