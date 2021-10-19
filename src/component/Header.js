import Button from "./Button";
const Header = ({ onBtnClick, showAdd }) => {
  return (
    <header className="header">
      <h1>Todo List</h1>
      <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onBtnClick={onBtnClick} />
    </header>
  );
};

export default Header;
