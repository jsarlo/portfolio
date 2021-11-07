import Panel from 'rsuite/Panel';
import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
    render() {
        return (<div>
            <div className="skills-container">
                <h2>My Skills</h2>
                <div className="skills-list">
                    <Panel shaded bordered bodyFill className="skill-panel">
                        <img alt="Angular Logo" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" height="200" width="200" />
                        <Panel header="Angular">
                            <p>
                                I've been developing Angular applications professionally since 2019!
                            </p>
                        </Panel>
                    </Panel>
                    <Panel shaded bordered bodyFill className="skill-panel">
                        <img alt="React Logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="200" width="200" />
                        <Panel header="React">
                            <p>
                                I've also used React, which is what this website is built with!
                            </p>
                        </Panel>
                    </Panel>
                    <Panel shaded bordered bodyFill className="skill-panel">
                        <img alt="dot NET logo" src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" height="200" width="200" />
                        <Panel header=".NET">
                            <p>
                                I've helped build REST APIs with the help of Microservices in C# with .NET core!
                            </p>
                        </Panel>
                    </Panel>
                    <Panel shaded bordered bodyFill className="skill-panel">
                        <img alt="Azure logo" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" height="200" width="200" />
                        <Panel header="Azure">
                            <p>
                                I also have experience with various Azure tooling, including B2C, Azure DevOps, and Application Services!
                            </p>
                        </Panel>
                    </Panel>
                </div>
            </div>
            <div className="interests-container">
                <h2>Other stuff I love</h2>
                <div className="skills-list">
                    <Panel shaded bordered bodyFill className="skill-panel">
                        <Panel>
                            <p>
                                I've been getting into flying a drone and taking photos and videos with it!
                            </p>
                        </Panel>
                    </Panel>
                    <Panel shaded bordered bodyFill className="skill-panel">
                        <Panel>
                            <p>
                                I'm an avid runner, having competed in track and cross-country at the NCAA level!
                            </p>
                        </Panel>
                    </Panel>
                    <Panel shaded bordered bodyFill className="skill-panel">
                        <Panel>
                            <p>
                                I always enjoy watching new movies and TV shows! I just finished Community for the first time!
                            </p>
                        </Panel>
                    </Panel>
                    <Panel shaded bordered bodyFill className="skill-panel">
                        <Panel>
                            <p>
                                Although the pandemic has put it on hold, I am a huge fan of travel and love visiting new places!
                            </p>
                        </Panel>
                    </Panel>
                </div>
            </div>
        </div>
        );
    }
}

export default Skills;