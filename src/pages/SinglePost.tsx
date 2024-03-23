import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/SinglePost.scss";
import resumeExeImg from "@assets/resume.jpg";
import preventDefault from "@utils/preventDefault";

export function PostDescription(): JSX.Element {
  return (
    <div className="desc">
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos,
        voluptas, quae, quod quia dolores quidem nemo quibusdam praesentium
        fugit autem aut. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam quos, voluptas, quae, quod quia dolores quidem nemo
        quibusdam praesentium fugit autem aut. adipisicing elit. Quisquam quos,
        voluptas, quae, quod quia dolores quidem nemo quibusdam praesentium
        fugit autem aut.
      </p>
      <div className="links">
        <a href="#!">
          <AwesomeIcons name="linkedin" type="brands" />
          Linkedin
        </a>
        <a href="#!">
          <AwesomeIcons name="github" type="brands" />
          Github
        </a>
        <a href="#!">
          <AwesomeIcons name="up-right-from-square" type="solid" />
          Autre
        </a>
      </div>
    </div>
  );
}

export function Comment(): JSX.Element {
  return (
    <div className="comment">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        numquam rerum hic facilis dolores necessitatibus iure corporis, ut
        perferendis exercitationem at animi et deleniti a enim officia ipsam
        quae laudantium. Impedit molestiae totam quam id odit, labore rerum
        pariatur. Nihil reprehenderit, repellat obcaecati labore voluptate nisi
        illo vitae mollitia amet. Numquam nihil reprehenderit adipisci! Fugiat
        voluptates cupiditate reprehenderit ipsum magnam.
      </p>
      <div>
        <button>
          <span>12</span>
          <AwesomeIcons name="thumbs-up" type="regular" />
        </button>
        <button>
          <span>0</span>
          <AwesomeIcons name="thumbs-up fa-flip-vertical" type="regular" />
        </button>
      </div>
    </div>
  );
}

export function NoComment(): JSX.Element {
  return (
    <div className="no-comment">
      <AwesomeIcons name="comment-slash" type="solid" />
      <p>Soyez le premier à laisser un commentaire sur ce post.</p>
    </div>
  );
}

export default function SinglePost(): JSX.Element {
  return (
    <main id="single-post">
      <div id="single-post-resume">
        <div className="display">
          <img src={resumeExeImg} alt="resume example" />
        </div>
        <button>
          <span>12</span>
          <AwesomeIcons type="regular" name="bookmark" />
        </button>
      </div>
      <div id="single-post-other">
        <PostDescription />
        <div className="comments">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          {/* <NoComment /> */}
        </div>
        <form onSubmit={preventDefault}>
          <input type="text" placeholder="faire un commentaire..." />
          <button>
            <AwesomeIcons name="paper-plane" type="solid" />
          </button>
        </form>
      </div>
    </main>
  );
}
