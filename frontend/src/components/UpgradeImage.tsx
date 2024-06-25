import { imageType, IUpgradeImage } from "../../../shared/types";

export default function UpgradeImage({ picture }) {
  switch (picture.type) {
    case imageType.string:
      return picture.image;
      break;
    default:
      console.log(`imageType: ${picture.type} is currently unsupported`);
  }
}
