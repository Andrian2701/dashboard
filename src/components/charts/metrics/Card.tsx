import { IconType } from "react-icons";

interface ICard {
  data: {
    icon: IconType;
    val: number;
    title: string;
  };
}

const Card = ({ data }: ICard) => {
  return (
    <div className="flex items-start gap-4">
      <data.icon className="text-purple" />
      <div className="flex flex-col">
        <label className="font-bold text-xl text-black">{data.val}</label>
        <label className="text-gray text-sm">{data.title}</label>
      </div>
    </div>
  );
};

export default Card;
