const Vid = ({ url }) => {
  return (
    <video src={url} type="video/mp4" controls controlsList="nodownload">
      <p>
        Your browser doesn't support HTML5 video. Here is a{" "}
        <a href={url}>link to the video</a> instead.
      </p>
    </video>
  );
};

export default Vid;
