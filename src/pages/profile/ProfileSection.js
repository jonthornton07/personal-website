import React from 'react'
import { Header, List, Segment, Grid } from "semantic-ui-react"

const ProfileSection = ({timeFrame, company, location, title, highlights}) => {
    return (
        <Segment basic >
            <Grid container centered stackable columns={2}>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Header size='medium' textAlign='right'>{ timeFrame }</Header>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Header size='medium'>{ title } </Header>
                        <Header size='small'>{company} - {location}</Header>
                        <List as='ul'>
                            {highlights.map((highlight, index) => {
                                return <List.Item key={ index } as='li'>{ highlight }</List.Item>
                            })}
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default ProfileSection