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
  return (
    <div className="col-8 d-flex flex-row align-items-center justify-content-center m-auto mt-5 videos-container">
      {library &&
        library.items &&
        library.items.map((item) => {
          console.log(library);
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId } = snippet;
          const { medium = {} } = thumbnails;
          return (
            <li
              key={id}
              className="d-flex justify-content-between"
            >
              <a
                href={`https://www.youtube.com/watch?v=YPSFcYAeR64&list=${id}`} target="_blank"
              >
                <img
                  width={medium.width}
                  height={medium.height}
                  src={medium.url}
                  alt=""
                />
              </a>
            </li>
          );
        })}
    </div>
  );
}
