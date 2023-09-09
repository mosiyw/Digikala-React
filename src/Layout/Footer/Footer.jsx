import React from "react";
import "./Footer.scss";
import { HiChevronLeft, HiChevronUp } from "react-icons/hi";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <section className="section-go-up-and-logo">
          <button onClick={() => scrollUp()}>
            بازگشت به بالا
            <HiChevronUp className="icon" />
          </button>
          <div className="logo">
            <img
              src="https://www.digikala.com/statics/img/svg/digi.svg"
              alt=""
            />
          </div>
        </section>
        <section className="details-support">
          <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          <div className="line">|</div>
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </section>
        <section className="digikala-option">
          <a href="#">
            <div className="img-container">
              <img
                src="https://www.digikala.com/statics/img/svg/footer/original-products.svg"
                alt=""
              />
            </div>
            <p>ضمانت اصل بودن کالا</p>
          </a>
          <a href="#">
            <div className="img-container">
              <img
                src="https://www.digikala.com/statics/img/svg/footer/days-return.svg"
                alt=""
              />
            </div>
            <p>هفت روز ضمانت بازگشت کالا</p>
          </a>
          <a href="#">
            <div className="img-container">
              <img
                src="https://www.digikala.com/statics/img/svg/footer/support.svg"
                alt=""
              />
            </div>
            <p>7 روز هفته ، 24 ساعته</p>
          </a>
          <a href="#">
            <div className="img-container">
              <img
                src="https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg"
                alt=""
              />
            </div>
            <p>امکان پرداخت در محل</p>
          </a>
          <a href="#">
            <div className="img-container">
              <img
                src="https://www.digikala.com/statics/img/svg/footer/express-delivery.svg"
                alt=""
              />
            </div>
            <p>امکان تحویل اکسپرس</p>
          </a>
        </section>
        <section className="register-and-questions">
          <div className="question-box">
            <h4>با دیجی‌کالا</h4>
            <a href="#">اتاق خبر دیجی کالا</a>
            <a href="#">فروش در دیجی کالا</a>
            <a href="#">فرصت های شغلی</a>
            <a href="#">گزارش تخلف در دیجی کالا</a>
            <a href="#">تماس با دیجی کالا</a>
            <a href="#">درباره دیجی کالا</a>
          </div>
          <div className="question-box">
            <h4>خدمات مشتریان</h4>
            <a href="#">پاسخ به پرسش های متداول</a>
            <a href="#">رویه های بازگرداندن کالا</a>
            <a href="#">شرایط استفاده</a>
            <a href="#">حریم خصوصی</a>
            <a href="#">گزارش باگ</a>
          </div>
          <div className="question-box hidden">
            <h4>راهنمای خرید از دیجی‌کالا</h4>
            <a href="#">نحوه ثبت سفارش</a>
            <a href="#">رویه ارسال سفارش</a>
            <a href="#">شیوه های پرداخت</a>
          </div>
          <div className="register-box">
            <div>
              <h3>همراه ما باشید !</h3>
              <div className="social-networks-container">
                <span>
                  <IoLogoInstagram />
                </span>
                <span>
                  <IoLogoLinkedin />
                </span>
                <span>
                  <IoLogoTwitter />
                </span>
                <span>
                  <IoLogoWhatsapp />
                </span>
              </div>
            </div>
            <div>
              <h3 className="hidden">
                با ثبت نام ایمیل ، از جدیدترین تخفیف ها با خبر شوید
              </h3>
              <form action="#">
                <input type="email" placeholder="ایمیل شما" />
                <button>ثبت</button>
              </form>
            </div>
          </div>
        </section>
        <section className="about-digikala">
          <div>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://trustseal.enamad.ir/logo.aspx?id=19077&Code=sScdOJOzhFxtcEqkjP7P"
                  alt=""
                />
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://www.digikala.com/statics/img/png/kasbokar.png"
                  alt=""
                />
              </div>
            </a>
            <a href="#">
              <div className="img-container">
                <img
                  src="https://www.digikala.com/statics/img/png/rezi.png"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="description">
            <h5>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h5>
            <p>
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
              که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
              توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
            <a href="#">
              مشاهده بیشتر
              <HiChevronLeft className="icon" />
            </a>
          </div>
        </section>
        <div className="digikala-rights">
          <p>
            برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
            کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
            (فروشگاه آنلاین دیجی‌کالا) است.
          </p>
        </div>
      </div>
    </footer>
  );
}
