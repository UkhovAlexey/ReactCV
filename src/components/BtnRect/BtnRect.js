import "./style.css";

const BtnRect = ({ link, img, text, target }) => {
  let output;
  output = (
    <a href={link} target={target} rel="noreferrer" className="btn-outline">
      <img src={img} alt="" />
      {text}
    </a>
  );
  return <div>{output}</div>;
};

export default BtnRect;
