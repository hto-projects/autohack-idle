import { CSSProperties, HTMLProps, ReactNode } from "react";
import { ImageType, IAppImage } from "../../../shared/types";

interface ImageProps {
  className: HTMLProps<HTMLElement>["className"];
  picture: IAppImage;
  imgStyle?: CSSProperties;
}

interface ImageWrapperProps {
  picture: IAppImage;
}

export function Image({ className, picture, imgStyle }: ImageProps) {
  let imageNode: ReactNode = null;
  switch (picture.type) {
    case ImageType.String:
      imageNode = picture.image;
      break;
    case ImageType.Png:
      imageNode = (
        <img src={`assets/${picture.image}.png`} alt={picture.image.replace("/", "_")} style={imgStyle}></img>
      );
      break;
    default:
      console.log(`imageType: ${picture.type} is currently unsupported from picture: ${picture.image}`);
  }

  return <span className={className}>{imageNode}</span>;
}

export function UpgradeImage({ picture }: ImageWrapperProps) {
  return (
    <Image
      className={"upgrade-image"}
      picture={picture}
      imgStyle={{
        verticalAlign: "17%",
        width: "21.97px",
        height: "21px",
        marginRight: "1%",
        fontSize: "700px"
      }}
    ></Image>
  );
}

export function ALImage({ picture }: ImageWrapperProps) {
  return (
    <Image
      className={"al-image"}
      picture={picture}
      imgStyle={{
        verticalAlign: ".01%",
        width: "25px",
        height: "25px",
        marginRight: "1%",
        fontSize: "35px"
      }}
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

export function HelpAppImage({ picture }: ImageWrapperProps) {
  let updatedPicture = structuredClone(picture);
  updatedPicture.image = `app_icons/${picture.image}`;

  return (
    <Image
      className={"help-image"}
      picture={updatedPicture}
      imgStyle={{
        width: "100%",
        height: "100%",
        imageRendering: "pixelated",
        marginTop: "3%",
        marginLeft: "3.5%"
      }}
    ></Image>
  );
}
