import { Link, NavLink } from "react-router-dom";
import task from "../../assets/banner/todo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Swal from "sweetalert2";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;

    const contactInfo = { email };

    fetch("https://task-management-server-lovat.vercel.app/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contactInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            title: "Success!",
            text: "Email sending for subscription",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#CDDAE0]">
      <div className="max-w-7xl mx-auto footer p-10 text-base-content flex  flex-col md:flex-row justify-around items-center">
        <div>
          <nav>
            <div>
              <img className="h-20" src={task} alt="" />
            </div>
            <header className="footer-title text-3xl">
              Task <br /> Management
            </header>
          </nav>
        </div>
        <div>
          <h2 className="text-center">Web Shortcut</h2>
          <div className="text-xl font-semibold space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Blog</NavLink>
            <NavLink to="/">Contact</NavLink>
          </div>
          <div className="flex space-x-4 text-2xl ml-14 mt-6">
            <Link>
              <FaGithub />
            </Link>
            <Link>
              <FaLinkedin />
            </Link>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <header className="footer-title">Newsletter</header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="email"
                  name="email"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn bg-[#F92659] border-none text-white join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
