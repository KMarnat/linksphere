import CameraIcon from "../../assets/camera-icon.svg?react";
import { useUpdateUserAvatar } from "../../services/useUpdateUserAvatar";
import { useUpdateUserCover } from "../../services/useUpdateUserCover";

interface FileUploadProps {
  fileToUpload: string;
}

const ImageUploadInput: React.FC<FileUploadProps> = ({ fileToUpload }) => {
  const { updateUserAvatar, isUpdating: isPendingAvatar } = useUpdateUserAvatar();
  const { updateUserCover, isUpdating: isPendingCover } = useUpdateUserCover();

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Update the avatar on the server
      updateUserAvatar({ avatar: file });
    }
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Update the avatar on the server
      updateUserCover({ cover: file });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (fileToUpload === "avatar") {
      handleAvatarChange(e);
    } else if (fileToUpload === "cover") {
      handleCoverChange(e);
    }
  };

  return (
    <label htmlFor={`file-upload-${fileToUpload}`} className="file-label">
      <input
        className="file-input"
        id={`file-upload-${fileToUpload}`}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      <CameraIcon />
    </label>
  );
};

export default ImageUploadInput;
