import message_animtion from "../../Asstes/message_animtion.json";
import Loader_Icon from '../../Asstes/loader.svg'
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import { useState } from 'react';
import './contact.css';


const App = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm(pre => ({
      ...pre, [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    const { email, message, name } = form
    e.preventDefault();

    if (!email || !message || !name) {
      return toast.error("Please fill all fields");
    }
    setLoading(true)
    emailjs
      .send(
        'service_ysiqaah',
        'template_fvtlrsm',
        {
          from_name: name,
          to_name: 'Osama',
          user_email: email,
          to_email: 'ormeedo@gmail.com',
          message: message,
        },
        'hqPoY5zsa1LMZ4t4q'
      )
      .then(
        () => {
          toast.success("Your message has been sent successfully 👌");
        },
        () => {
          toast.error("Oops. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false)
        setForm({
          name: '',
          email: '',
          message: '',
        })
      });
  };


  return (
    <div id="contact">

      <div className="cn_left">
        <div>
          <h1 className="cn_title">Contact us</h1>
          <p className='cn_paragraph'>Contact us for more information and Get notified when i publish something new.</p>
        </div>

        <form onSubmit={handleSubmit} className='form'>
          <div className="flex_cn gap-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              className="form_input"
              id="name"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex_cn">
            <label htmlFor="email" className="form-label">ُEmail Addrees:</label>
            <input
              type="email"
              className="form_input"
              id="email"
              name="email"
              placeholder="ُEmail Addrees"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex_cn">
            <label htmlFor="message" className="form-label">Your message:</label>
            <textarea
              rows="5"
              id="message"
              name="message"
              minLength={3}
              className='form_input'
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button disabled={loading} className={`${loading ? 'disabled' : ''} btn_submit_cn`} type="submit" >
            {loading ? <span>
              <img src={Loader_Icon} alt="" width={20} height={20} />
              Send...
            </span> : 'Send'}
          </button>
        </form>
      </div >

      {/* img_right */}

      <div div className="lottie" >

        <Lottie className='lottie_ani' animationData={message_animtion} />
      </div >
    </div >
  );
}

export default App;
