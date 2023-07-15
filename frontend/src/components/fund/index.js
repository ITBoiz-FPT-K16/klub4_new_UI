import { Dots, Public } from "../../svg";
import { useState } from "react";
const Funds = ({ fund, user }) => {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="post">
      <div className="post_header">
        <div
          className="fund_header_right hover1"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="post_bg" style={{}}>
            <div className="post_bg_text">{fund.name}</div>
          </div>
          <div className="post_text">
            {fund.description}
            <strong> Fund to pay: {fund.price}</strong>
          </div>
        </div>
      </div>

      <div className="fund_actions">
        <div
          className="fund_action hover1"
          onMouseOver={() => {
            setTimeout(() => {
              setVisible(true);
            }, 500);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setVisible(false);
            }, 500);
          }}
        >
          <div className=" middle_icon hover1">
            <div className="mr-2">
              <i className="share_icon"> </i> Pay Fund
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Funds;
