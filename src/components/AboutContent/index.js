import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { AboutContentWrapper, AboutIconWrapper } from "./styles";

export function AboutContent() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "tech" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 70) {
                aspectRatio
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return (
    <AboutContentWrapper>
      <h3>
        <span> What</span> I do and <span>what</span> I do it with.
      </h3>
      <p>
        I love to build things. Useful things, and not-so-useful things. I like
        building amazing things for amazing people and amazing companies. I've
        been programming with JavaScript since 2017 when I set out to become a
        Full Stack Developer.
        <br />
        <br />I made a career change from finance to the tech sector, because
        that was where my heart was. I started with Vanilla JavaScript and tried
        to learn the fundamentals. Then I pivoted to libraries and frameworks,
        like React and Gatsby. I really enjoy working with the various tools to
        bootstrap a project quickly and then scale it for larger datasets,
        users, etc. After making smaller static projects, I really wanted to
        tackle applications that would, in my mind, be far more interactive,
        fun, progressive, and dynmaic.
        <br />
        <br />
        That's when I started learning backend technologies like NodeJS,
        Express, Mongoose, Firestore, and MongoDB. I quickly fell in love with
        the MERN stack and was amazed at how flexible JavaScript could be. Of
        late, I have been enjoying working with various headless CMS options
        like Strapi and Shopify. The tools are ever changing, but it is a lot
        fun trying to keep up!
        <br />
        <br />
        Maybe we could work together? If you got here independently and didn't
        come from my portfolio page, be sure to head over there and check out
        some cool projects I built. There is also a contact form where you can
        get in touch with me.
        <br />
        <br />
        <a href="https://jcodes.page">Click to head there now!</a>
      </p>

      <AboutIconWrapper>
        {data.allFile.edges.map(({ node }) => (
          <Img key={Math.random()} fixed={node.childImageSharp.fixed} />
        ))}
      </AboutIconWrapper>
      <h3>
        <span> Why</span> I started this <span>developer</span> blog.
      </h3>
      <p>
        I could tell you that I am an accomplished writer and that this blog
        serves a very important function of putting my, very well thought out,
        ideas out into the interwebs. But, that would be a lie. If anything, my
        hope is that this blog will help me develop, and nurture my writing
        skills. As a developer, having facility with languages, understanding
        complex syntax, and being able to organize abstract structures are all
        really important. But just as important are the "soft skills", like
        communication.
        <br />
        <br />
        I'll do my best to try and cover a wide range of topics and to also post
        as regularly as I can. I also think there will be value (not just in my
        crazy ideas/theories) in documenting my (mis) adventures as I learn new
        technologies, develop new projects and applications, and just generally
        make my way through the new career path I've set myself on. I can't
        guarantee the content will be riveting, or that I will keep you coming
        back with great tech tips and walkthoughs. But I can promise I'll give
        it my best shot.
        <br />
        <br />
        Finally, I built this blog because I very much wanted to play around
        with a static site generator like Gatsby, while using a decoupled CMS
        like Strapi. The idea was to create a project that would showcase the
        strengths and speed of Gatsby (fast project startup/scalablity) with the
        power of a content managment system. A blog works very well for this. I
        was able to design the frontend using my own frameworks, libraries,
        design aesthetics and templating. Meanwhile, I can simply inject
        markdown "articles" into my decoupled CMS on the backend. A few magical
        webhooks later, and content is posted and templated. It's been a fun
        project to create, and I was astonished at how quickly I was able to get
        it all off the ground.
        <br />
        <br />
        At the end of the day, I feel a good developer is one that is always
        learning. And it is my goal and my hope that you and I can tackle this
        learning journey <span>together</span>.
        <br />
        <br />
      </p>
      <p>
        I need to quickly apologise (with an "s") to my wonderful, amazing wife
        Lou Lou. I used "Jon" a lot on this page and my wife hates that{" "}
        <span role="img" aria-label="laughing emoji">
          🤣
        </span>{" "}
        - fun fact: my wife refuses to call me Jon and has called me Jack since
        the day we met
      </p>
    </AboutContentWrapper>
  );
}
export default AboutContent;
