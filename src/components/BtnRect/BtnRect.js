const BtnRect = ({ link, img, text, target }) => {
  return (
    <a href={link} target={target} rel="noreferrer" className="btn-outline">
      <img src={img} alt={text} />
      {text}
    </a>
  );
};

export default BtnRect;
