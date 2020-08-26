import React from 'react';
import NavMenu from './NavMenu';
import Login from './Login';


function Splash() {

    return (
        <>
            <NavMenu />
            <div id='splash-start' class='parallax-divs'>
                <h1>Welcome to Edara...where you manage your projects! Edara lets you work more efficiently with a simple user interface and experience. Edara’s lists and cards enable you to organize and prioritize your projects in a collaborative, flexible, and structured way.</h1>
            </div>
            <div class='parallax1'></div>
            <div id='splash-middle' class='parallax-divs'>
                <h1>Work with anybody! Whether it’s for work, a side project or even the next family vacation, Edara manages your team's logistics.</h1>
            </div>
            <div class='parallax2'></div>
            <div id='splash-middle2' class='parallax-divs'>
                <h1>Information neatly structured! Dive into the details by adding comments, attachments, due dates, and more directly to Edara cards. Collaborate on projects from beginning to end.</h1>
            </div>
            <div class='parallax3'></div>
            <div id='splash-middle3' class='parallax-divs'>
                <h1>Check it out! Go from idea to action in seconds with Edara’s intuitively simple moveable lists and cards.</h1>
            </div>
            <div class='parallax4'></div>
            <div id='splash-end' class='parallax-divs'>
                <h1>Edara reducing complexity! Use Edara the way your team works best. We’ve got the flexibility to fit any team’s style.</h1>
            </div>
            <div class='parallax5'></div>

        </>
    );
};

export default Splash;