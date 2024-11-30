import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  color?: "primary" | "success" | "danger";
  onClickEvent: () => void;
}

// const handleButton = () => {
//   console.log("Button clicked");
// };

function Button({ text, color = "primary", onClickEvent }: ButtonProps) {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClickEvent}
    >
      {text}
    </button>
  );
}

export default Button;
