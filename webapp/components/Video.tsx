'use client';

function VideoComponent() {
  return (
    <video width="350" controls autoPlay loop muted>
      <source src="dance-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoComponent;
