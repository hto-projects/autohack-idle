import { ImageType, IAppImage } from "../../../shared/types";

interface IUpgradeImageProps {
  picture: IAppImage;
}

export default function UpgradeImage({ picture }: IUpgradeImageProps) {
  let imageElements: string = undefined;
  switch (picture.type) {
    case ImageType.string:
      imageElements = picture.imageArr.join("");
      break;
    case ImageType.png:
      imageElements = picture.imageArr
        .map((image) => (
          <img
            src={`public/assets/${image}.png`}
            alt={image}
            style={{ verticalAlign: "-17%", width: "21.97px", height: "21px", marginRight: "1%" }}
          ></img>
        ))
        .join("");
      break;
    default:
      console.log(`imageType: ${picture.type} is currently unsupported`);
  }

  return <span className="upgrade-image">{imageElements}</span>;
}
