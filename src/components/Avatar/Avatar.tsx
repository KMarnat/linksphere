interface AvatarProps {
  image: string;
}

const Avatar: React.FC<AvatarProps> = ({ image }) => {
  return (
    <div className="avatar">
      <div className="aspect-ratio">
        <div>
          <img src={image} alt="Profile avatar" />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
