const bgColors = {
  primary: "bg-blue-500 hover:bg-blue-600",
  secondary: "bg-yellow-500 hover:bg-yellow-600",
};

type ButtonProps = {
  buttonText: string;
  bgColorType: keyof typeof bgColors;
  onClick: () => void;
};

/**
 *  ボタンコンポーネント
 * @param buttonText ボタン内のテキスト
 * @param bgColorType ボタンの背景色
 * @param onClick ボタンを押した時の処理
 */
const ButtonComponent = (props: ButtonProps) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={props.onClick}
        className={`${
          bgColors[props.bgColorType]
        } , rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out pl-3 pr-3 pt-1.5 pb-1.5 text-white`}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default ButtonComponent;
