import classes from "./contact-form.module.css";

function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1>궁금하신점?</h1>
      <form action="" className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" />
          </div>{" "}
          <div className={classes.control}>
            <label htmlFor="name">이름</label>
            <input type="text" id="name" />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">메세지</label>
          <textarea name="" id="message" rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>전송하기</button>
        </div>
      </form>
    </section>
  );
}
export default ContactForm;
