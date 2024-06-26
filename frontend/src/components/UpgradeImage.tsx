import { ImageType, IAppImage } from "../../../shared/types";

interface IUpgradeImageProps {
  picture: IAppImage;
}

export default function UpgradeImage({ picture }: IUpgradeImageProps) {
  switch (picture.type) {
    case ImageType.string:
      return picture.image;
      break;
    case ImageType.png:
      return (
        // <img
        //   src={`public/assets/${picture.image}.png`}
        //   alt={picture.image}
        //   style={{ verticalAlign: "-17%", width: "21.97px", height: "21px", marginRight: "1%" }}
        // ></img>

        <span className="upgrade-image">
          {picture.image.map((image) => (
            <img
              src={`public/assets/${image}.png`}
              alt={image}
              style={{ verticalAlign: "-17%", width: "21.97px", height: "21px", marginRight: "1%" }}
            ></img>
          ))}
        </span>
      );
      break;
    default:
      console.log(`imageType: ${picture.type} is currently unsupported`);
  }
}
