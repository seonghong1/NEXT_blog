import classes from "./logo.module.css";
import Image from "next/image";

function Logo() {
  return (
    <>
      <div className={classes.logo}>
        <Image src="/images/site/뚱냥이.jpeg" alt="" width="50" height="50" />
        <p>: SEONG HONG_Dev_Blog</p>
      </div>
    </>
  );
}
export default Logo;
