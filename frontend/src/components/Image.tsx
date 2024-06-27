import { ImageType, IAppImage } from "../../../shared/types";

interface ImageProps {
  picture: IAppImage;
  imgTagStyle: any;
}

interface ImagePropsFoo {
  picture: IAppImage;
}

export function Image({ picture, imgTagStyle }: ImageProps) {
  // imageElements is currently type "any" because TS had issues assigning type "Element[]" to the type "string | Element[]"
  let imageElements: any = undefined;
  switch (picture.type) {
    case ImageType.string:
      imageElements = picture.image;
      break;
    case ImageType.png:
      imageElements = (
        <img src={`public/assets/${picture.image}.png`} alt={picture.image.replace("/", "_")} style={imgTagStyle}></img>
      );
      break;
    default:
      console.log(`imageType: ${picture.type} is currently unsupported`);
  }

  return imageElements;
}

export function UpgradeImage({ picture }: ImagePropsFoo) {
  let styleObj = { verticalAlign: "-17%", width: "21.97px", height: "21px", marginRight: "1%" };

  return (
    <span className="upgrade-image">
      <Image picture={picture} imgTagStyle={styleObj}></Image>
    </span>
  );
}

export function DesktopImage({ picture }: ImagePropsFoo) {
  return <span className="desktop-image">{<Image picture={picture}></Image>}</span>;
}
