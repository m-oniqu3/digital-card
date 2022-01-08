import pic from "../images/profile.png";
const Info = () => {
  return (
    <div>
      <div className="picture">
        <img src={pic} alt="" />
      </div>
      <div className="details">
        <h1>Laura Smith</h1>
        <p className="job">Front-End Developer</p>
        <p className="email">laurasmith.website</p>
      </div>
      <div className="buttons">
        <button className="btn">Email</button>
        <button className="btn" id="linkedin-btn">
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Info;
