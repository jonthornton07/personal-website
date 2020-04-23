import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Icon, Menu } from "semantic-ui-react";

const linkedInClickHandler = () =>
  window.open("https://www.linkedin.com/in/jthornton07");
const githubClickHandler = () =>
  window.open("https://github.com/jonthornton07");
const twitterClickHandler = () =>
  window.open("https://twitter.com/jthornton07");

const AppHeader = ({ activePage, isFixed = false }) => {
  return (
    <Menu
      fixed={isFixed ? "top" : null}
      inverted={!isFixed}
      pointing={!isFixed}
      secondary={!isFixed}
      size="large"
    >
      <Container>
        <Menu.Item as={Link} to="/" active={activePage === "Home"}>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/blog" active={activePage === "Blog"}>
          Blog
        </Menu.Item>
        <Menu.Item as={Link} to="/profile" active={activePage === "Resume"}>
          Resume
        </Menu.Item>
        <Menu.Item as={Button} position="right">
          <Icon.Group onClick={linkedInClickHandler} size="large">
            <Icon name="linkedin" />
          </Icon.Group>
          <Icon.Group onClick={githubClickHandler} size="large">
            <Icon name="github square" />
          </Icon.Group>
          <Icon.Group onClick={twitterClickHandler} size="large">
            <Icon name="twitter square" />
          </Icon.Group>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default AppHeader;
