import { ImageType, IAppImage } from "../../../shared/types";

interface IUpgradeImageProps {
  picture: IAppImage;
}

export default function UpgradeImage({ picture }: IUpgradeImageProps) {
  switch (picture.type) {
    case ImageType.string:
      return picture.image;
      break;
    default:
      console.log(`imageType: ${picture.type} is currently unsupported`);
  }
}
