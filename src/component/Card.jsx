function Card({ image, githubUrl, linkedinUrl, instagramUrl, discordUrl }) {
  <div className="main-card">
    <div className="image-container">
      <img src="" alt=""></img>
    </div>
    <div className="description-container"></div>
    <div className="dropdown-container">
      <button className="dropdown-button"></button>
    </div>
    <ul>
      <li>
        <img src="" alt="linkedin-icon">
          <a href="#">LinkedIn</a>
        </img>
      </li>
      <li>
        <img src="" alt="instagram-icon">
          <a href="#">Instagram</a>
        </img>
      </li>
      <li>
        <img src="" alt="Github-icon">
          <a href="#">Github</a>
        </img>
      </li>
      <li>
        <img src="" alt="discord-icon">
          <a href="#">Discord</a>
        </img>
      </li>
    </ul>
  </div>;
}

export default Card;
