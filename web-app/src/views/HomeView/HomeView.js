import React from "react";
import './Home.css'
import beaver_logo from '../../assets/beavers-logo-multi-colour.png';
import scout_logo from '../../assets/scouts-logo-green.png';
import cub_logo from '../../assets/cubs-logo-green.png';

const HomeView = () => {
    const beaverLeaders = [
        { name: "Beaver Section Leader 1", role: "Section Lead Volunteer" },
        { name: "Beaver Leader 2", role: "Team Member" },
        { name: "Beaver Leader 3", role: "Team Member" },
        { name: "Beaver Leader 4", role: "Team Member" },
        { name: "Beaver Leader 5", role: "Team Member" },
        { name: "Beaver Leader 6", role: "Team Member" }
    ];

    const cubLeaders = [
        { name: "Cub Section Leader 1", role: "Section Lead Volunteer" },
        { name: "Cub Leader 1", role: "Team Member" },
        { name: "Cub Leader 2", role: "Team Member" },
        { name: "Cub Leader 3", role: "Team Member" },
        { name: "Cub Leader 4", role: "Team Member" },
        { name: "Cub Leader 5", role: "Team Member" }
    ];

    const scoutLeaders = [
        { name: "Scout Section Leader 1", role: "Section Lead Volunteer" },
        { name: "Scout Leader 1", role: "Team Member" },
        { name: "Scout Leader 2", role: "Team Member" },
        { name: "Scout Leader 3", role: "Team Member" },
        { name: "Scout Leader 4", role: "Team Member" },
        { name: "Scout Leader 5", role: "Team Member" }
    ];

    return (
        <div>
            <h2>About us</h2>
            <p>First registered in 1974, we have been providing scouting to the young people of Euxton for over 40 years.</p>
            <p>Our main meeting place is mentioned below but we do like to get out and about:</p>
            <address>
                Euxton Methodist Church Hall,<br/>
                Wigan Road,<br/>
                Euxton,<br/>
                Chorley,<br/>
                Lancashire,<br/>
                PR7 6LP
            </address>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2364.459259637456!2d-2.676990825357927!3d53.65661335146571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0da24ca1743d%3A0x16629356915f47bf!2sEuxton%20Methodist%20Church!5e0!3m2!1sen!2suk!4v1733005767084!5m2!1sen!2suk" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <h2>Our sections</h2>
            <h3><img src={beaver_logo} width="80px" alt="Beaver Logo"></img>(6-8 years)</h3>
            <p>Normal meeting time is on Mondays 18:30-19:45**</p>
            <p>Beavers Leadership Team is:</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {beaverLeaders.map((leader, index) => (
                        <tr key={index}>
                            <td>{leader.name}</td>
                            <td>{leader.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3><img src={cub_logo} width="60px" alt="Cub Logo"></img> (8-10<sup>1</sup>/<sub>2</sub>)</h3>
            <p>Normal meeting time is on Thursdays 18:30-19:45**</p>
            <p>Cubs Leadership Team is:</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {cubLeaders.map((leader, index) => (
                        <tr key={index}>
                            <td>{leader.name}</td>
                            <td>{leader.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <h3><img src={scout_logo} width="70px" alt="Scout Logo"></img> (10<sup>1</sup>/<sub>2</sub> to 14 years)</h3>
            <p>Normal meeting time is on Thursdays 20:00-21:00**</p>
            <p>Scout Leadership Team is:</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {scoutLeaders.map((leader, index) => (
                        <tr key={index}>
                            <td>{leader.name}</td>
                            <td>{leader.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p>** Note: Each section team will email parents each week to confirm location and time of session.</p>

            <h2>Uniforms and Badges</h2>
            <p>When a young person joins our group, we recommend that they come for a couple of weeks before coming in uniform. This gives them a chance to confirm that they enjoy it.</p>
            <p>
                After about 4 weeks, a section leader will email the parents asking whether the young person wishes to become
                 a member of the section. This is normally done at the end of a session and can be done in any location. 
                 The young person will be presented with a knecker, Group knecker badge, Chorley district badge, group name badge and membership badge.
                 Badges should be placed in the correct position on the uniform. Details of where badges are placed on the uniform, please check this link... 
                 <a href="https://www.scouts.org.uk/scouts/scouts-uniform-and-badge-placement/">Scouts UK Uniform and Badge Placement</a>
            </p>
            <p>Beavers, Cubs and Scout uniform can be purchased either online at the Scouts shop <a href="https://shop.scouts.org.uk/">here</a> or by visiting the Chorley District HQ. Details can be found here... 
            <a href="https://www.chorleyscouts.org.uk/about-us/scout-centre">here</a></p>

            
        </div>
    );
};

export default HomeView;