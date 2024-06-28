import { CSSProperties, HTMLProps } from "react";
import { ImageType, IAppImage } from "../../../shared/types";

// imgStyle's type should be an interface for the style properties of an <img> tag but I can't find it
interface ImageProps {
  className: HTMLProps<HTMLElement>["className"];
  picture: IAppImage;
  imgStyle?: CSSProperties;
}

interface ImageWrapperProps {
  picture: IAppImage;
}

export function Image({ className, picture, imgStyle }: ImageProps) {
  // imageElements is currently type "any" because TS had issues assigning type "Element[]" to the type "string | Element[]"
  let imageElements: any = <></>;
  switch (picture.type) {
    case ImageType.string:
      imageElements = picture.image;
      break;
    case ImageType.png:
      imageElements = (
        <img src={`public/assets/${picture.image}.png`} alt={picture.image.replace("/", "_")} style={imgStyle}></img>
      );
      break;
    default:
      console.log(`imageType: ${picture.type} is currently unsupported`);
  }

  return <span className={className}>{imageElements}</span>;
}

export function UpgradeImage({ picture }: ImageWrapperProps) {
  return (
    <Image
      className={"upgrade-image"}
      picture={picture}
      imgStyle={{ verticalAlign: "-17%", width: "21.97px", height: "21px", marginRight: "1%" }}
    ></Image>
  );
}

export function DesktopAppImage({ picture }: ImageWrapperProps) {
  let updatedPicture = structuredClone(picture);
  updatedPicture.image = `app_icons/${picture.image}`;

  return (
    <Image
      className={"desktop-image"}
      picture={updatedPicture}
      imgStyle={{ width: "128px", height: "128px", imageRendering: "pixelated" }}
    ></Image>
  );
}
