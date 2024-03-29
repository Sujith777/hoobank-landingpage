import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section id="card-deal" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" /> in a few
          easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          In tincidunt consequat ipsum, vel auctor nunc aliquam et. Nam eget
          tellus sit amet libero dapibus molestie sit amet et tellus. Integer
          eleifend sem elit, nec malesuada erat fringilla id.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
