import "./BurgerBtn.css";
import { Button } from "antd";
const BurgerBtn = ({ showModal }) => {
  return (
    <Button
      type="primary"
      htmlFor="burger"
      className="burger"
      onClick={showModal}
    >
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </Button>
  );
};
export default BurgerBtn;
