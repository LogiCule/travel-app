import Image from "next/image";

interface ButtonProps {
  title: string;
  icon?: string;
  type: "button" | "submit";
  variant?: "btn_dark_green" | "btn_green" | "btn_white_text";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} `}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer ">
        {title}
      </label>
    </button>
  );
};

export default Button;
