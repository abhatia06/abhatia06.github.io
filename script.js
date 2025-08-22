let resizing = false;
let alreadyExists = false;
let webDevExists = false;
let alreadyExistsApp1 = false;
let welcomeAppExists = false;
let ue5exists = false;
let menuCreated = false;
let classesExist = false;
let count = 0;
const isMobile = window.matchMedia("(max-width: 768px)").matches;
const myList = [];

class App {
    constructor(height, width, name, spawnx, spawny) {
        this.app = document.createElement('div');
        this.app.className = 'app-window';
        this.app.style.width = width + 'px';
        this.app.style.height = height + 'px';
        this.app.style.top = spawny + 'px';
        this.app.style.left = spawnx + 'px';
        this.app.style.position = 'absolute';

        this.header = document.createElement('div');
        this.header.className = 'app-header';
        this.header.textContent = name;

        const closeButton = document.createElement('button');
        closeButton.className = 'close';
        closeButton.textContent = "✖";
        closeButton.style.textAlign = 'center';
        closeButton.style.width = 20 + 'px';
        closeButton.style.lineHeight = 15 + 'px';
        closeButton.style.padding = '0';
        closeButton.style.left = width-25 + 'px';
        closeButton.style.top = 3.5 + 'px';
        closeButton.style.font = 'gray';
        closeButton.style.borderWidth = 1.5 + 'px';

        closeButton.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            closeButton.style.backgroundColor = 'gray';
            const outsideofclosebutton = () => {
                closeButton.style.backgroundColor = 'rgb(220, 220, 220)';
                document.removeEventListener('mouseup', outsideofclosebutton);
            }
            document.addEventListener('mouseup', outsideofclosebutton);
        });

        closeButton.addEventListener('click', () => {
            this.app.classList.remove('show');

            this.app.addEventListener('transitionend', () => {
                this.app.remove();
                const index = myList.indexOf(this.app);
                console.log("index: "+index);
                if(index > -1) {
                    myList.splice(index, 1);
                }

                this.app.remove(); 
                // this is probably the most inefficient way to do this, but it works
                console.log(this.app.exists);
                if(name == 'OSDev') {
                    alreadyExists = false;
                }
                if(name == 'About Me') {
                    alreadyExistsApp1 = false;
                }
                if(name == 'Welcome') {
                    welcomeAppExists = false;
                }
                if(name == 'WebDev') {
                    webDevExists = false;
                }
                if(name == 'UE5') {
                    ue5exists = false;
                }
                if(name == 'Future Classes') {
                    classesExist = false;
                }
            });
        }, {once:true});

        this.header.appendChild(closeButton);
        this.app.appendChild(this.header);
    }

    getApp() {
        return this.app;
    }

    getHeader() {
        return this.header;
    }

    getExists() {
        return this.exists;
    }

    getWidth() {
        return width;
    }
}



document.addEventListener('DOMContentLoaded', () => {
    time();
    welcomeApp();
    menuCreation();
})

//  app creation and other functions below

function time() {
    console.log("called");
    const timenow = new Date();
    let hours = timenow.getHours();
    let minutes = timenow.getMinutes();

    let timefornow = "";
    if(minutes < 10) {
        if(hours-12 > 0) {
            timefornow = hours-12+":0"+minutes+" PM";
        }
        else if(hours-12 < 0) {
            timefornow = hours+":0"+minutes+" AM";
        }
        else {
            timefornow = hours+":0"+minutes+" PM";
        }

    }
    else {
        if(hours-12 > 0) {
            timefornow = (hours-12) +":"+minutes+" PM";
        }
        else if(hours-12 < 0) {
            timefornow = hours+":"+minutes+" AM";
        }
        else {
            timefornow = hours+":"+minutes+" PM";
        }
    }

    document.querySelectorAll("#time")[0].innerHTML = timefornow;
    setTimeout(time, 1000);
}


function menuCreation() {

    console.log("MENU CREATION CALLED");

    let divcontainer = document.getElementById('menubar');

    // TODO: SO MUCH REPEATED CODE HERE. MAKE BUTTON GENERATION INTO A SEPARATE FUNCTION/METHOD!!
    let webdevButton = document.createElement('button');
    webdevButton.innerHTML = "Web Development";
    webdevButton.style.fontSize = 20 + 'px';
    webdevButton.className = 'github';
    webdevButton.style.position = 'absolute';
    webdevButton.style.top = 80 + 'px';
    webdevButton.style.left = 0 + 'px';
    webdevButton.style.height = 80 + 'px';
    webdevButton.style.width = 100 + '%';
    webdevButton.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        webdevButton.style.backgroundColor = 'gray';
        webdevButton.style.boxShadow = 'none';
        const closeoutsideofbutton = () => {
            webdevButton.removeEventListener('mouseup', closeoutsideofbutton);
            webdevButton.style.backgroundColor = '#c4c4c4';
            webdevButton.style.boxShadow = 'inset -1px -1px 0 #00000034, inset 1px 1px 0 #fff';
        }
        document.addEventListener('mouseup', closeoutsideofbutton);
    });
    webdevButton.addEventListener('click', () => {
        webdevApp();
    });
    divcontainer.appendChild(webdevButton);
    let osdevButton = document.createElement('button');
    osdevButton.innerHTML = "OS Development";
    osdevButton.style.fontSize = 20 + 'px';
    osdevButton.className = 'github';
    osdevButton.style.position = 'absolute';
    osdevButton.style.top = 0 + 'px';
    osdevButton.style.left = 0 + 'px';
    osdevButton.style.height = 80 + 'px';
    osdevButton.style.width = 100 + '%';
    osdevButton.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        osdevButton.style.backgroundColor = 'gray';
        osdevButton.style.boxShadow = 'none';
        const closeoutsideofbutton = () => {
            osdevButton.removeEventListener('mouseup', closeoutsideofbutton);
            osdevButton.style.backgroundColor = '#c4c4c4';
            osdevButton.style.boxShadow = 'inset -1px -1px 0 #00000034, inset 1px 1px 0 #fff';
        }
        document.addEventListener('mouseup', closeoutsideofbutton);
    });
    osdevButton.addEventListener('click', () => {
        createOSDev();
    });
    divcontainer.appendChild(osdevButton);

    let ue5button = document.createElement('button');
    ue5button.innerHTML = "UE5 Procedural Generation";
    ue5button.style.fontSize = 20 + 'px';
    ue5button.className = 'github';
    ue5button.style.position = 'absolute';
    ue5button.style.top = 160 + 'px';
    ue5button.style.left = 0 + 'px';
    ue5button.style.height = 80 + 'px';
    ue5button.style.width = 100 + '%';
    ue5button.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        ue5button.style.backgroundColor = 'gray';
        ue5button.style.boxShadow = 'none';
        const closeoutsideofbutton = () => {
            ue5button.removeEventListener('mouseup', closeoutsideofbutton);
            ue5button.style.backgroundColor = '#c4c4c4';
            ue5button.style.boxShadow = 'inset -1px -1px 0 #00000034, inset 1px 1px 0 #fff';
        }
        document.addEventListener('mouseup', closeoutsideofbutton);
    });
    ue5button.addEventListener('click', () => {
        ue5app();
    });
    divcontainer.appendChild(ue5button);

    let skillsButton = document.createElement('button');
    skillsButton.innerHTML = "Future Classes";
    skillsButton.style.fontSize = 20 + 'px';
    skillsButton.className = 'github';
    skillsButton.style.position = 'absolute';
    skillsButton.style.top = 240 + 'px';
    skillsButton.style.left = 0 + 'px';
    skillsButton.style.height = 80 + 'px';
    skillsButton.style.width = 100 + '%';
    skillsButton.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        skillsButton.style.backgroundColor = 'gray';
        skillsButton.style.boxShadow = 'none';
        const closeoutsideofbutton = () => {
            skillsButton.removeEventListener('mouseup', closeoutsideofbutton);
            skillsButton.style.backgroundColor = '#c4c4c4';
            skillsButton.style.boxShadow = 'inset -1px -1px 0 #00000034, inset 1px 1px 0 #fff';
        }
        document.addEventListener('mouseup', closeoutsideofbutton);
    });
    skillsButton.addEventListener('click', () => {
        futureClasses();
    });
    divcontainer.appendChild(skillsButton);
    let startbutton = document.getElementById('startButton');

    if(menuCreated) {
        startbutton.addEventListener('mousedown', () => {
            startbutton.style.backgroundColor = 'gray';

            startbutton.addEventListener('mouseup', () => {
                divcontainer.classList.remove('show');
                menuCreated = false;
            })
            document.addEventListener('mouseup', () => {
                startbutton.style.backgroundColor = 'rgb(220, 220, 220)';
            })
        })
        return;
    }

    startbutton.addEventListener('mousedown', () => {
        startbutton.style.backgroundColor = 'gray';

        startbutton.addEventListener('mouseup', () => {
            divcontainer.classList.add('show');
            menuCreated = true;
        })
        document.addEventListener('mouseup', () => {
            startbutton.style.backgroundColor = 'rgb(220, 220, 220)';
        })
    })  
}

function welcomeApp() {
    if(welcomeAppExists) {
        return;
    }
    let welcome = new App(450, 750, "Welcome", 100, 50);
    if(isMobile) {
        welcome = new App(200, 200, "Welcome", 100, 50); 
    }

    let viewondesktop = document.createElement('p');
    viewondesktop.innerHTML = "For the best experience of this portfolio, please switch to the closest desktop near you. Some of the functionality is lost on a mobile device.";
    viewondesktop.style.fontSize = 10 + 'px';
    viewondesktop.style.position = 'relative';
    viewondesktop.style.top = 10 + 'px';
    viewondesktop.style.left = 10 + 'px';
    document.getElementById('test').appendChild(welcome.getApp());
    let header1 = document.createElement('p');
    header1.innerHTML = "Welcome to <b>Portfolio<span style='color:#fff'>06</span></b>";
    header1.style.position = 'absolute';
    header1.style.fontSize = 40 + 'px';
    header1.style.left = 30 + 'px';

    let github = document.createElement('button');
    github.className = 'github';
    github.innerHTML = "GitHub";
    github.style.position = 'absolute';
    github.style.right = 5 + 'px';
    github.style.top = 90 + 'px';
    github.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        github.style.backgroundColor = 'gray';
        github.style.boxShadow = 'none';
        const outsideofclosebutton = () => {
            github.style.backgroundColor = '#c4c4c4';
            document.removeEventListener('mouseup', outsideofclosebutton);
            github.style.boxShadow = 'inset -1px -1px 0 #00000034, inset 1px 1px 0 #fff';
        }
        document.addEventListener('mouseup', outsideofclosebutton);
    });
    github.addEventListener('click', () => {
        window.open('https://github.com/abhatia06');
    });

    let aboutmebutton = document.createElement('button');
    aboutmebutton.className = 'github';
    aboutmebutton.innerHTML = "About Me";
    aboutmebutton.style.position = 'absolute';
    aboutmebutton.style.right  = 5 +'px';
    aboutmebutton.style.top = 130 + 'px';
    welcome.getApp().appendChild(aboutmebutton); 
    welcome.getApp().appendChild(github);
    aboutmebutton.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        aboutmebutton.style.backgroundColor = 'gray';
        aboutmebutton.style.boxShadow = 'none';
        const closeoutsideofbutton = () => {
            aboutmebutton.removeEventListener('mouseup', closeoutsideofbutton);
            aboutmebutton.style.backgroundColor = '#c4c4c4';
            aboutmebutton.style.boxShadow = 'inset -1px -1px 0 #00000034, inset 1px 1px 0 #fff';
        }
        document.addEventListener('mouseup', closeoutsideofbutton);
    });

    aboutmebutton.addEventListener('click', () => {
        let tryApp = new App(300,  500, "About Me", 230, 80);
        if(isMobile) {
            tryApp = new App(150, 150, "About Me", 130, 80);
        }
        app1(tryApp);
    });

    let video = document.createElement('div');
    video.style.display = 'flex';
    video.style.justifyContent = 'flex-start';
    video.style.width =  '75%';
    video.style.height = '75%';
    video.style.borderTop =  '2px solid rgb(154, 154, 154)';
    video.style.borderLeft =  '2px solid rgb(154, 154, 154)';
    video.style.borderBottom =  '2px solid white';
    video.style.borderRight = '2px solid white';
    video.style.left = 30 + 'px';
    if(isMobile) {
        video.style.width = 75 + 'px';
        video.style.height = 75 + 'px';
        video.style.left = 10 + 'px';
    }
    video.style.position = 'absolute';
    
    video.style.backgroundColor = 'rgb(250, 250, 209)';
    video.style.top = 90 + 'px';

    let didyouknow = document.createElement('p');
    didyouknow.style.fontWeight = 'bold';
    didyouknow.innerHTML = 'Did you know...';
    didyouknow.style.fontSize = 25 + 'px';
    didyouknow.style.position = 'absolute';
    didyouknow.style.left = '10%';

    let pressStart = document.createElement('p');
    pressStart.style.fontSize = 20 + 'px';
    pressStart.style.position = 'absolute';
    pressStart.style.left = '10%';
    pressStart.style.top = '15%';
    pressStart.innerHTML = "You can press the start button on the bottom left to view the projects I've made, along with their Github repositories, if such repositories exist.";
    
    let note = document.createElement('p');
    note.style.fontSize = 15 + 'px';
    note.style.position = 'absolute';
    note.style.left = '10%';
    note.style.top = `calc(${pressStart.style.top} + 100px)`;
    note.innerHTML = "<b>NOTE</b>:<br>If you're on PC, you can drag the \"apps\" around and resize them, just how you would any other " +
    "app on your actual computer.";
    video.appendChild(pressStart);
    video.appendChild(didyouknow);
    video.appendChild(note);
    welcome.getApp().appendChild(video);

    header1.style.fontSize = 25 + 'px';
    if(isMobile) {
        welcome.getApp().style.overflowWrap ='break-word';
        header1.style.fontSize = 12 + 'px';
        header1.style.left = 10 + 'px';
        header1.style.top = 20 + 'px';
    }
    let header06 = document.createElement('p');
    header06.innerHTML = "06";
    header06.style.fontFamily = "Sans-Serif";
    header06.style.color = "white";

    let separator = document.createElement('div');
    separator.style.width = 145 + 'px';
    separator.style.height = 2 + 'px';
    separator.style.backgroundColor = '#c4c4c4';
    separator.style.position = 'absolute';
    separator.style.right = 5 + 'px';
    separator.style.top = 180 + 'px';
    separator.style.borderTop = '1px solid #ffffff';
    separator.style.borderLeft = '1px solid #ffffff';
    separator.style.borderBottom = '1px solid #808080';
    separator.style.borderRight = '1px solid #808080';
    separator.style.boxSizing = 'border-box';

    let resume = document.createElement('button');
    resume.className = 'github';
    resume.innerHTML = "Resume";
    resume.style.position = 'absolute';
    resume.style.right = 5 + 'px';
    resume.style.top = 195 + 'px';
    resume.addEventListener('mousedown', (e) => {
        e.stopPropagation;
        resume.style.backgroundColor = 'gray';
        resume.style.boxShadow = 'none';

        const liftoutside = () => {
            resume.style.backgroundColor = '#c4c4c4';
            resume.style.boxShadow = 'inset -1px -1px 0 #00000034, inset 1px 1px 0 #fff';
            document.removeEventListener('mouseup', liftoutside);
        }
        document.addEventListener('mouseup', liftoutside);
    });
    resume.addEventListener('click', () => {
        window.open('https://drive.google.com/file/d/1c_B4r4JnMnytUqExnUtIDJLcgziyRiEJ/view?usp=drive_link');
    })

    welcome.getApp().appendChild(resume);
    welcome.getApp().appendChild(separator);

    welcome.getApp().appendChild(header1);

    if(isMobile) {
        welcome.getApp().appendChild(viewondesktop);
    }

    myList.push(welcome.getApp());

    requestAnimationFrame( () => {
        welcome.getApp().classList.add('show');
    });
    welcomeAppExists = true;

    if(isMobile) {
        didyouknow.style.fontSize = 13 + 'px';
        pressStart.style.fontSize = 12 + 'px';
        pressStart.innerHTML = "To view my projects, press the start button on the bottom left.";
        video.style.height = 100 + 'px';
        video.style.width = 100 + 'px';
        resume.style.width = 80 + 'px';
        resume.style.height = 20 + 'px';
        resume.style.top = '75%';
        github.style.width = 80 + 'px';
        github.style.height = 20 + 'px';
        github.style.top = '45%';
        aboutmebutton.style.width = 80 + 'px';
        aboutmebutton.style.height = 20 + 'px';
        aboutmebutton.style.top = '55%';
        separator.style.width = 80 + 'px';
        separator.style.top = '70%';
        welcome.getApp().style.overflow = 'hidden';
    }

    doitall(welcome.getApp(), welcome.getHeader());
}

function app1(tryApp) {
    if(alreadyExistsApp1) {
        return;
    }

    let tester23 = document.createElement('p');
    tester23.innerHTML = "Hello, my name is Angad Bhatia, and welcome to my portfolio. " +
    "I am a student at the University of Wisconsin-Madison studying Computer Science (BS). " + 
    "Currently, my interests lie in low-level topics, particularly in  Operating System Development, " +
    "and even more specifically, in how we virtualize resources and manage memory in computers. " +
    "I also plan on studying a little bit about embedded systems, particularly PIC microcontrollers, RTOSs (Real Time Operating Systems), " +
    "and I want to learn how to implement concurrency-related concepts in the future, like semaphores, mutexes, " +
    "conditional variables, etc., because they align with my interests, and they just so happen to be things a lot " +
    "of companies are looking for. <br><br>Email: bhatia33@wisc.edu <br>Personal Email: angadbhatia122@gmail.com<br>Feel free to contact me :)";

    tryApp.getApp().appendChild(tester23);

    let waves1 = document.createElement('div');
    waves1.className = 'wave-bottom';
    let waves2 = document.createElement('div');
    waves2.className = 'wave-bottom-2';
    let waves3 = document.createElement('div');
    waves3.className = 'wave-bottom-3';

    waves1.style.width = 50 + 'px ' + 100 + '%';
    waves1.style.height = 50 + 'px';
    waves2.style.height = 50 + 'px';
    waves2.style.bottom = 5 + 'px';
    waves3.style.bottom = 10 + 'px';
    waves3.style.height = 50 + 'px';
    tryApp.getApp().appendChild(waves1);
    tryApp.getApp().appendChild(waves2);
    tryApp.getApp().appendChild(waves3);   
    alreadyExistsApp1 = true;

    document.getElementById('test').appendChild(tryApp.getApp());
    myList.push(tryApp.getApp());

    requestAnimationFrame( () => {
        tryApp.getApp().classList.add('show');
    });

    doitall(tryApp.getApp(), tryApp.getHeader());
}

function createOSDev() {
    if(alreadyExists) {
        return;
    }

    const app1 = new App(300, 600, "OSDev", 600, 100);
    let yap = document.createElement('p');
    yap.innerHTML = "This is my first ever operating system, abOS! (Very creative name, I know) " +
    "The purpose for this project was to really learn about low-level stuff, because I found it super cool. " +
    "I took a course in my university, CS 252, that went over a mini computer known as the LC-3. In there, " +
    "I got an introduction to the CPU, along with a mini OS, (if you could even call it that? Tanenbaum sure " +
    "wouldn't, I think). The book we used was Introduction to Computer Systems by Patt & Patel. The book was " +
    "really good! And it inspired me to read more stuff, and so I decided to go on this OS development journey " +
    "and read Operating Systems: Three Easy Pieces by Remzi and Andrea Arpaci-Dusseau. Or just OSTEP. Now, though I " +
    "SAY I made an OS, in reality, it's not complete. I still haven't implemented any scheduling-based things, so it's " +
    "not a proper OS. You couldn't classify as a time-sharing OS, nor could you classify it as a real-time OS, so it's just " +
    "nothing? I guess? In the future, I plan on coming back to this project and continue tinkering with it until I am satisfied " +
    "though, knowing my nature, I don't know if I'll ever be satisfied. Anyway, more info on my github:"
    app1.getApp().appendChild(yap);
    let link = document.createElement('a');
    link.href = "https://github.com/abhatia06/abOS";
    link.innerHTML = "here!";
    app1.getApp().appendChild(link);
    document.getElementById('test').appendChild(app1.getApp());
    myList.push(app1.getApp());

    requestAnimationFrame( () => {
        app1.getApp().classList.add('show');
    });

    alreadyExists = true;
    doitall(app1.getApp(), app1.getHeader());
}

function webdevApp() {
    if(webDevExists) {
        return;
    }

    const app1 = new App(300, 600, "WebDev", 600, 100);
    let yap = document.createElement('p');
    yap.innerHTML = "Web development is something I've partaken in a little bit. I know HTML, CSS, and JS " +
    "and I like to think I've made some cool stuff with just those 3, (like this portfolio! I think it's cool..) " +
    "I began web development in around 2024, which aligns with my resume, but I haven't been doing frontend stuff " +
    "for ALL THIS TIME. In reality, I did it for about a month during the summer of 2024, then I did it for about a month " +
    "this summer too, to learn JS, make my portfolio, and make my mother's business look nicer. Both of these projects " +
    "I used to dip my toes into the world of web development, and I did enjoy them. In the future I plan to come back, learn how " +
    "to code in HTML/CSS/JS better, and also learn how to use tailwind, react, etc.. Anyway, here's the Github for my portfolio:";  
    app1.getApp().appendChild(yap);
    let link = document.createElement('a');
    link.href = "https://github.com/abhatia06/abhatia06.github.io";
    link.innerHTML = "here!";
    app1.getApp().appendChild(link);
    document.getElementById('test').appendChild(app1.getApp());
    myList.push(app1.getApp());

    requestAnimationFrame( () => {
        app1.getApp().classList.add('show');
    });

    webDevExists = true;
    doitall(app1.getApp(), app1.getHeader());
}

function ue5app() {
    if(ue5exists) {
        return;
    }

    const app1 = new App(300, 600, "UE5", 600, 100);
    let yap = document.createElement('p');
    yap.innerHTML = "Unfortunately, I do not have a Github for this project, as I didn't really know " +
    "how to save node-based scripting from UE5 onto Github then. (Nor do I know now, but even if I did, I " +
    "no longer have the files for it). However, I can provide a more comprehensive idea of how the procedural " +
    "generation worked. Basically, I abused the arrow actors that UE5 gave us. Each pre-made room had distinct " +
    "arrows that were invisible on playtime that basically showcased where an exit/entrance for a room was. " +
    "then, all I had to do was just utilize the relative position & orientation of the arrow from the center of the room object " +
    "to figure out where in the world I needed to place it to connect to a room. Since each room's exit arrow also had a " +
    "hitbox actor above it, I could just utilize the world position of that hitbox to figure out how to connect the rooms. " +
    "This project was also one of the first times I used inheritance in a project. Each room was a descendant of the basic rectangular " +
    "room with arrows and whatnot, so it made making new rooms easier. Then, all I had to do was place each room in a list, " + 
    "and use a random number generator to just choose what room to place next from the list whenever the user overlapped with an exit hitbox";
    app1.getApp().appendChild(yap);
    document.getElementById('test').appendChild(app1.getApp());
    myList.push(app1.getApp());

    requestAnimationFrame( () => {
        app1.getApp().classList.add('show');
    });

    ue5exists = true;
    doitall(app1.getApp(), app1.getHeader());
}

function futureClasses() {
    if(classesExist) {
        return;
    }

    const app1 = new App(300, 600, "Future Classes", 600, 100);
    let yap = document.createElement('p');
    yap.innerHTML = "This section isn't about any projects I've made. This section is more for " +
    "any recruiter interested in what I will be learning in the future from either my classes, or my " +
    "personal projects.<br><br><b>Currently Finished Classes</b>: Introduction to Probability and Markov Chain Models(MATH331), " + 
    "Elementary Matrices and Linear Algebra(MATH340), Introduction to Computer Engineering(CS/ECE252), Introduction to Discrete Mathematics(MATH240), " +
    "Programming II and III(CS 300 and 400 respectively)<br><br><b>Future Classes (THIS YEAR): </b>Introduction to Artifical Intelligence(CS540), Building User Interfaces(CS571), " +
    "Introduction to Combinatorial Optimization(CS425), Machine Organization and Programming(CS354), Introduction to Operating Systems(CS537)<br><br>" + 
    "<b>Things I'm going to learn(THIS YEAR)</b>: SQL, Verilog, Matlab, Embedded Systems (PIC microcontroller stuff? Maybe?), Scheduler implementations, React";
    app1.getApp().appendChild(yap);
    document.getElementById('test').appendChild(app1.getApp());
    myList.push(app1.getApp());

    requestAnimationFrame( () => {
        app1.getApp().classList.add('show');
    });

    classesExist = true;
    doitall(app1.getApp(), app1.getHeader());
}


// main function to control movement, resizing, etc.

function doitall(app, header) {
    let appRight = 0;
    /*
    * Had to consult AI and other resources for this issue. Turns out that my transition animation, where the
    * windows were popping into existence was creating some issues. doitall was being immediately called 
    * after the transition occured, so doitall would store the position of the right edge mid-way through
    * its transition. To fix this, we just wait until the transition ends, then save the position of the
    * right edge.
    */
    app.addEventListener('transitionend', () => {
        appRight = app.getBoundingClientRect().right;
        console.log("RIGHT: "+ appRight);

        appBottom = app.getBoundingClientRect().bottom;
    })

    console.log("doitall called");
    let offsetX = 0;
    let offsetY = 0;


    app.addEventListener('mousedown', (e) => {
        offsetX = e.clientX - app.offsetLeft;
        offsetY = e.clientY - app.offsetTop;
        console.log("X OFFSET:" + offsetX);
        if(offsetX >= app.getBoundingClientRect().width-10) {
            document.addEventListener('mousemove', resizeRight);
            document.addEventListener('mouseup', stop);
        }

        if(offsetY >= app.getBoundingClientRect().height-10) {
            document.addEventListener('mousemove', resizeBottom);
            document.addEventListener('mouseup', stop);
        }

        if(offsetX <= 10) {
            document.addEventListener('mousemove', resizeLeft);
            document.addEventListener('mouseup', stop);
        }
    })

    header.addEventListener('mousedown', (e) => {
        e.stopPropagation();    
        offsetX = e.clientX - app.offsetLeft;
        offsetY = e.clientY - app.offsetTop;
        if(offsetX >= app.getBoundingClientRect().width-5) {
            resizing = true;
            document.addEventListener('mousemove', resizeRight);
            document.addEventListener('mouseup', stop);
        }

        if(offsetX <= 5) {
            resizing = true;
            document.addEventListener('mousemove', resizeLeft);
            document.addEventListener('mouseup', stop);
        }

        if(offsetY <= 5) {
            resizing = true;
            document.addEventListener('mousemove', resizeTop);
            document.addEventListener('mouseup', stop);
        }

        for(let i = 0; i < myList.length; i++) {
            if(myList[i] == app) {
                app.style.zIndex = 10;
            }
            else {
                myList[i].style.zIndex = 5;
            }
        }

        if(!resizing) {
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', stop);
        }
        
    });
    
    function move(e) 
    {
        if(app.getBoundingClientRect().width >= window.innerWidth && app.getBoundingClientRect().height >= window.innerHeight-40) {
            app.style.width = 400 + 'px';
            app.style.height = 400 + 'px';
            offsetX = app.offsetLeft;
            offsetY = app.offsetTop;
            const headerChild = app.children[0];
            const closeButtonChild = headerChild.children[0];
    
            if(app.children.length >= 7) {
                const button1 = app.children[1];
                const button2 = app.children[2];
                const button3 = app.children[4];
                const videodiv = app.children[3];
                const separatorapp = app.children[5];

                button1.style.width = app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right - 10 + 'px';
                button2.style.width = app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right - 10 + 'px';
                button3.style.width = app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right - 10 + 'px';
                separatorapp.style.width = app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right - 10 + 'px';
                if(app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right <= 100) {
                    button1.style.fontSize = 12 + 'px';
                    button3.style.fontSize = 12 + 'px';
                    button2.style.fontSize = 12 + 'px';
                }
                else {
                    button1.style.fontSize = 14 + 'px';
                    button3.style.fontSize = 14 + 'px';
                    button2.style.fontSize = 14 + 'px';
                }
            }
            closeButtonChild.style.left = parseInt(app.style.width) - 25 + 'px';
        }
        let maxHorizontal = window.innerWidth - app.getBoundingClientRect().width;
        let maxVertical = window.innerHeight - app.getBoundingClientRect().height;
        
        app.style.left = Math.max(0, Math.min(e.clientX - offsetX, maxHorizontal)) + 'px';
        app.style.top = Math.max(0, Math.min(e.clientY - offsetY, maxVertical-40)) + 'px';

        appRight = app.getBoundingClientRect().right;
        appBottom = app.getBoundingClientRect().bottom;
    }
    function stop() 
    {
        resizing = false;
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', stop);
        document.removeEventListener('mousemove', resizeRight);
        document.removeEventListener('mousemove', resizeBottom);
        document.removeEventListener('mousemove', resizeLeft);
        document.removeEventListener('mousemove', resizeTop);   
    }

    function resizeRight(e) {
        let appLeft = app.getBoundingClientRect().left;
        let maxWidth = window.innerWidth - appLeft;

        app.style.width = Math.max(400, Math.min(e.clientX - appLeft, maxWidth)) + 'px';

        const headerChild = app.children[0];
        const closeButtonChild = headerChild.children[0];

        if(app.children.length >= 7) {
            const button1 = app.children[1];
            const button2 = app.children[2];
            const button3 = app.children[4];
            const videodiv = app.children[3];
            const separatorapp = app.children[5];

            button1.style.width = app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right - 10 + 'px';
            button2.style.width = app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right - 10 + 'px';
            button3.style.width = app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right - 10 + 'px';
            separatorapp.style.width = app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right - 10 + 'px';
            if(app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right <= 100) {
                button1.style.fontSize = 12 + 'px';
                button3.style.fontSize = 12 + 'px';
                button2.style.fontSize = 12 + 'px';
                
            }
            else {
                button1.style.fontSize = 14 + 'px';
                button3.style.fontSize = 14 + 'px';
                button2.style.fontSize = 14 + 'px';
            }
        }
    
        closeButtonChild.style.left = parseInt(app.style.width) - 25 + 'px';
        appRight = app.getBoundingClientRect().right;
    }
    
    function resizeBottom(e) {
        let appTop = app.getBoundingClientRect().top;
        let maxHeight = window.innerHeight - appTop - 40;

        app.style.height = Math.max(300, Math.min(e.clientY - appTop, maxHeight)) + 'px';

        appBottom = app.getBoundingClientRect().bottom;
    }


    function resizeLeft(e) {
        if(appRight - (e.clientX - offsetX) > 400) {
            app.style.left = Math.max(0, e.clientX - offsetX) + 'px'; 
        }
        app.style.right = appRight;

        app.style.width = Math.max(400, appRight - parseInt(app.style.left)) + 'px';

        const headerChild = app.children[0];
        const closeButtonChild = headerChild.children[0];
            if(app.children.length >= 7) {
            const button1 = app.children[1];
            const button2 = app.children[2];
            const button3 = app.children[4];
            const videodiv = app.children[3];
            const separatorapp = app.children[5];

            button1.style.width = app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right - 10 + 'px';
            button2.style.width = app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right - 10 + 'px';
            button3.style.width = app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right - 10 + 'px';
            separatorapp.style.width = app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right - 10 + 'px';
            if(app.getBoundingClientRect().right - videodiv.getBoundingClientRect().right <= 100) {
                button1.style.fontSize = 12 + 'px';
                button3.style.fontSize = 12 + 'px';
                button2.style.fontSize = 12 + 'px';
                
            }
            else {
                button1.style.fontSize = 14 + 'px';
                button3.style.fontSize = 14 + 'px';
                button2.style.fontSize = 14 + 'px';
            }
        }
    
        closeButtonChild.style.left = parseInt(app.style.width) - 25 + 'px';
    }

    function resizeTop(e) {
        e.stopPropagation();
        if(appBottom - (e.clientY - offsetY) > 300) {
            app.style.top = Math.max(0, e.clientY - offsetY) + 'px';
        }
        app.style.bottom = appBottom;

        app.style.height = Math.max(300, appBottom - parseInt(app.style.top)) + 'px';

    }

}

/*
 * Originally, the methods below were placed inside the doitall() method but, if multiple apps were
 * created, then deleted, the resize eventListener for window never dissapeared. In fact, for every
 * creation of a new app, a new listener was added that did the same thing. Hence, if you made 100
 * apps, everytime the window was resized, 100 events were triggered, and the method was then called
 * 100 times. Incredibly inefficient, so moving it out here fixed that issue, and only calls the 
 * method placeInBounds for the number of apps in our list at the moment.
 */

window.addEventListener('resize', () => {
    console.log("window resized");
    for(let i = 0; i < myList.length; i++) {
        placeInBounds(myList[i]);
    }
})

function placeInBounds(app) {
    let maxHorizontal = window.innerWidth - app.getBoundingClientRect().width;
    let maxVertical = window.innerHeight - app.getBoundingClientRect().height;
        
    if(parseInt(app.style.left) > maxHorizontal) {
        app.style.left = maxHorizontal-10 + 'px';
    }
    if(parseInt(app.style.top) > maxVertical) {
        app.style.top = maxVertical-50 + 'px';
    }
        
    if(parseInt(app.style.left) < 0) {
        app.style.left = 10 + 'px';
    }
        
    if(parseInt(app.style.top) < 0) {
        app.style.top = 10 + 'px';
    }
}

