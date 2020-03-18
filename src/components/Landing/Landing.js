import React, { Component } from 'react';
import { Grid, Cell, Layout, Header, Drawer, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import { Link } from 'react-router-dom';
import ColumbusNavigation from './ColumbusNavigation';
import {TwitterShareButton} from "react-share";
import { SocialIcon } from 'react-social-icons';

export class Home extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Layout style={{color: '#fb4080'}} fixedHeader>
                    <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to='/'><img src="cantstopcolumbus-logo.png"  height="50" width="50" alt="logo"></img></Link>} scroll>
                        <Cell hidePhone hideTablet>
                            <ColumbusNavigation></ColumbusNavigation>
                        </Cell>
                    </Header>
                    <Drawer title="#cantstopcolumbus">
                        <ColumbusNavigation></ColumbusNavigation>
                    </Drawer>
                    <Grid className='landing-grid'>
                        <Cell col={12}>
                            <div className="banner-text">
                                <h1>
                                    Can't Stop Columbus
                                </h1>
                            </div>
                        </Cell>
                        <Cell col={4} tablet={12} phone={12}>
                            <Card shadow={0} style={{ margin: 'auto' }}>
                                <CardTitle>#canstopcolumbus Proposal</CardTitle>
                                <CardText>
                                On Sunday night, the Columbus tech and business community started talking about the idea of a virtual hackathon in response to the Covid-19 situation. With social distancing, no school, remote work, and a sense of urgency, there’s a lot of energy focused on helping. We proposed an online hacking event where anyone can contribute by defining challenges, building projects, and sharing resources.
                                </CardText>
                                <CardActions border>
                                    <a href = "https://docs.google.com/document/d/1rWjqOmbKsfSFHJaNzsz9JLa50fskQ8cCcmPa5T40HRs/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><Button ripple accent raised >Get Started</Button></a>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4} tablet={12} phone={12}>
                            <Card shadow={0} style={{ margin: 'auto' }}>
                                <CardTitle>Volunteer</CardTitle>
                                <CardText>
                                   Sign up to volunteer your time unique skills to help fight COROVID-19.
                                </CardText>
                                <CardActions border>
                                    <a href = "https://airtable.com/shrDrTCZQmDlCN8sg" target="_blank" rel="noopener noreferrer"><Button ripple accent raised >Sign Up</Button></a>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4} tablet={12} phone={12}>
                            <Card shadow={0} style={{ margin: 'auto' }}>
                                <CardTitle>Spread the Word</CardTitle>
                                <CardText>
                                    Twitter is Earth's realtime communication channel. One tweet is all it takes to spread awareness and fight COVID-19. #cantstopcolumbus 
                                </CardText>
                                <CardActions border>
                                    <TwitterShareButton url="https://cantstopcolumbus.web.app/" title={"Want to help Columbus fight rapid-response against COVID-19? Join the Can't Stop Columbus Movement."} hashtags={["cantstopcolumbus","COVID19OhioReady"]}>TWEET</TwitterShareButton>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4} tablet={12} phone={12} offsetDesktop={4}>
                            <Card shadow={0} style={{ margin: 'auto' }}>
                                <CardTitle> Planning Doc</CardTitle>
                                <CardText>
                                    Primary for ALL #cantstopcolumbus resources. Includes: Planning, Team Formation, Ideas, etc to fight COVID-19.
                                </CardText>
                                <CardActions border>
                                    <a href = "https://docs.google.com/spreadsheets/d/16rHl_qXc1wp8vSg_Ux8YXdYe_F_B88ghLW7ese2YFec/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><Button ripple accent raised >Get Started</Button></a>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4} tablet={12} phone={12}>
                            <Card shadow={0} style={{ margin: 'auto' }}>
                                <CardTitle> Slack Channel</CardTitle>
                                <CardText>
                                    Chat for ALL #cantstopcolumbus communications. Check it out, collaborate, form a team, and save the day from COVID-19.
                                </CardText>
                                <CardActions border>
                                    <a href = "https://app.slack.com/client/T0101PN34J1/" target="_blank" rel="noopener noreferrer"><Button ripple accent raised >Get Started</Button></a>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={1} tablet={12} phone={12}>
                            <SocialIcon url="https://www.instagram.com/cantstopcbus/" />
                        </Cell>
                        <Cell col={1} tablet={12} phone={12}>
                            <SocialIcon url="https://www.linkedin.com/company/cant-stop-columbus" />
                        </Cell>
                        <Cell col={1} tablet={12} phone={12}>
                            <SocialIcon url="https://twitter.com/cantstopcbus" />
                        </Cell>
                        <Cell col={1} tablet={12} phone={12}>
                            <a id="github" href="https://github.com/VoiceFirstTech/Can-t-Stop-Columbus---Website" target="_blank" rel="noopener noreferrer">Made with &#60;3 by Columbus on GitHub</a>
                        </Cell>
                    </Grid>
                </Layout>
            </div>
        )
    }
}

export default Home
