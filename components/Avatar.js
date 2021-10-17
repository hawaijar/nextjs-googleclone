function Avatar({ url }) {
  return (
    <img
      src={url}
      alt="profile picture"
      loading="lazy"
      className="h-7 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
    />
  );
}

export default Avatar;
