import "./NotFound.css";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="notfound">

      <motion.div
        className="notfound-card"
        initial={{ opacity: 0, scale: .9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .6 }}
      >

        <motion.h1
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
        >
          404
        </motion.h1>

        <h2>
          Page Not Found
        </h2>

        <p>
          Looks like this page doesn't exist.
          Let's get you back to the portfolio.
        </p>

        <div className="notfound-buttons">

          <a
            href="/"
            className="home-btn"
          >
            <Home size={18}/>
            Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="back-btn"
          >
            <ArrowLeft size={18}/>
            Go Back
          </button>

        </div>

      </motion.div>

    </section>
  );
};

export default NotFound;