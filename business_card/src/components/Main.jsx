export default function Main() {
  return (
    <main>
      <div className="info">
        <img className="logo" src="./src/assets/pfp.jpg" />
        <span className="title">
          <h1>Anh Tran</h1>
          <h2>Software Developer</h2>
          <h3>anhtran.website</h3>
        </span>
        <button className="btn-email">
          {" "}
          <i class="fa-solid fa-envelope"></i> Email
        </button>
        <button className="btn-linkedin">
          {" "}
          <i class="fa-brands fa-linkedin"></i> Linkedin
        </button>

        <span className="info-detail">
          <h4>About</h4>
          <p>
            I am a software developer with a particular interest frontend and
            the Cloud. I aim to make things simple and automate daily tasks. I
            try to keep up with security and best practices, and am always
            looking for new things to learn.
          </p>
        </span>

        <span className="info-detail">
          <h4>Interests</h4>
          <p>
            {" "}
            GF lover (I love my gf). Bouldering newbie. Gym goer. Music enjoyer.
            Fighting game button masher. Chess enthusiast. Home misser (sad
            face). Doom scroller. Elon #1 hater. Coffee fanatic.
          </p>
        </span>
      </div>
    </main>
  );
}
