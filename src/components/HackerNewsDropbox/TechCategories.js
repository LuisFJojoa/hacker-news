import angularIcon from "../../assets/png/image-138@2x.png";
import reactIcon from "../../assets/png/image-140@2x.png";
import vueIcon from "../../assets/png/image-141@2x.png";

const TECH_CATEGORIES = [
  {
    name: "Angular",
    icon: {
      svg: angularIcon,
      heigth: "18px",
      width: "16px",
    }
  },
  {
    name: "React",
    icon: {
      svg: reactIcon,
      heigth: "12px",
      width: "16px",
    }
  },
  {
    name: "Vue",
    icon: {
      svg: vueIcon,
      heigth: "14px",
      width: "16px",
    }
  }
];

export {
  TECH_CATEGORIES as default
}
