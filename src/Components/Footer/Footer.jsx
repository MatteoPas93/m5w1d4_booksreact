import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer d-flex flex-wrap justify-content-around align-content-center">
      <div className="logo-footer">
        <h6>
          Grazie per aver scelto EpicBooksReact 
        </h6>
         </div>
        <div className="email-footer d-flex">
        <h6>
            Per qualsiasi problema contattare EpicBooksReact@email.com
        </h6>
        <div>
          <button>
            <a href="./index.html">Start Page</a>
          </button>
        </div>
        </div>
     
    </div>
  );
};

export default Footer;
