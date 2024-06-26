import { ImageType, IAppImage } from "../../../shared/types";

interface IUpgradeImageProps {
  picture: IAppImage;
}

export default function UpgradeImage({ picture }: IUpgradeImageProps) {
  // imageElements is currently type "any" because TS had issues assigning type "Element[]" to the type "string | Element[]"
  let imageElements: any = undefined;
  switch (picture.type) {
    case ImageType.string:
      imageElements = picture.image;
      break;
    case ImageType.png:
      imageElements = (
        <img
          src={`public/assets/${picture.image}.png`}
          alt={picture.image.replace("/", "_")}
          style={{ verticalAlign: "-17%", width: "21.97px", height: "21px", marginRight: "1%" }}
        ></img>
      );
      break;
    default:
      console.log(`imageType: ${picture.type} is currently unsupported`);
  }

  return <span className="upgrade-image">{imageElements}</span>;
}
