import React from "react";

const Library = () => {
  return (
    <div className="library-container">

      <div className="row">
        <div className="col-4">
          <iframe className="ratio ratio-1x1" src="https://www.youtube.com/embed/1ZXobu7JvvE" title="YouTube video player" frameborder="0" allowfullscreen/>
        </div>
        <div className="col-4 ">
        <iframe className="ratio ratio-1x1" src="https://www.youtube.com/embed/Ty14ogq_Vok" title="YouTube video player" frameborder="0" allowfullscreen />
        </div>
        <div className="col-4">
        <iframe className="ratio ratio-1x1" src="https://www.youtube.com/embed/KwYJTpQ_x5A" title="YouTube video player" frameborder="0" allowfullscreen/>

        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <iframe className="ratio ratio-1x1" src="https://www.youtube.com/embed/L219ltL15zk" title="YouTube video player" frameborder="0" allowfullscreen/>
        </div>
        <div className="col-4">
          <iframe className="ratio ratio-1x1" src="https://www.youtube.com/embed/GhxhiehJcQY" title="YouTube video player" frameborder="0" allowfullscreen/>
        </div>
        <div className="col-4">
          <iframe className="ratio ratio-1x1" src="https://www.youtube.com/embed/PjY1rH4_MOA" title="YouTube video player" frameborder="0" allowfullscreen/>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <iframe className="ratio ratio-1x1" src="https://www.youtube.com/embed/G8W0BhzrWcs" title="YouTube video player" frameborder="0" allowfullscreen/>
        </div>
        <div className="col-4">
          <iframe className="ratio ratio-1x1" src="https://www.youtube.com/embed/zBoTgBpkn7o" title="YouTube video player" frameborder="0" allowfullscreen/>
        </div>
        <div className="col-4">
          <iframe className="ratio ratio-1x1" src="https://www.youtube.com/embed/_03pCKOv4l4" title="YouTube video player" frameborder="0" allowfullscreen/>
        </div>
      </div>
    </div>
  );
}

export default Library;