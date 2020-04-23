import React from "react";
import { Header, List, Segment } from "semantic-ui-react";

const ProfileSection = ({
  timeFrame,
  company,
  location,
  title,
  highlights,
}) => {
  return (
    <Segment basic compact>
      <Header size="medium">
        {title}
        <Header.Subheader sub size="small">
          {company} / {timeFrame}
        </Header.Subheader>
      </Header>
      <List as="ul">
        {highlights.map((highlight, index) => {
          return (
            <List.Item key={index} as="li">
              {highlight}
            </List.Item>
          );
        })}
      </List>
    </Segment>
  );
};

export default ProfileSection;
