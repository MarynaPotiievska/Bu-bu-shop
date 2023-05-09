import mastercardImg1x from "assets/images/pay_systems/mastercard@1x.jpg";
import mastercardImg2x from "assets/images/pay_systems/mastercard@2x.jpg";
import visaImg1x from "assets/images/pay_systems/visa@1x.jpg";
import visaImg2x from "assets/images/pay_systems/visa@2x.jpg";
import liqpayImg1x from "assets/images/pay_systems/liqpay@1x.jpg";
import liqpayImg2x from "assets/images/pay_systems/liqpay@2x.jpg";

const PaySystemList = ({ psUl, psFlex, psImg }) => {
  return (
    <ul className={`${psUl} ${psFlex}`}>
      <li>
        <img
          srcSet={`${mastercardImg1x} 1x, ${mastercardImg2x} 2x`}
          src={mastercardImg1x}
          alt="Логотип Mastercard"
          className={psImg}
        />
      </li>
      <li>
        <img
          srcSet={`${visaImg1x} 1x, ${visaImg2x} 2x`}
          src={visaImg1x}
          alt="Логотип Visa"
          className={psImg}
        />
      </li>
      <li>
        <img
          srcSet={`${liqpayImg1x} 1x, ${liqpayImg2x} 2x`}
          src={liqpayImg1x}
          alt="Логотип LiqPay"
          className={psImg}
        />
      </li>
    </ul>
  );
};

export default PaySystemList;
