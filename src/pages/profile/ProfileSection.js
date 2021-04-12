import React from "react";
import {Card, Container, Divider, Header, Image, List, Segment} from "semantic-ui-react";

const ProfileSection = ({
    timeFrame,
    company,
    location,
    title,
    highlights,
    logo
}) => {
    const logoImage = require("../../assets/" + logo);

    return (
        <Segment basic compact>
            <Header size="medium">
                <Image floated="left" size="large" src={logoImage}/>
                {title}
                <Header.Subheader size="small">
                    {company} / {timeFrame}
                </Header.Subheader>
            </Header>
            <Divider clearing></Divider>
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
