
let alreadyExists = false;
let alreadyExistsApp1 = false;
let welcomeAppExists = false;
let menuCreated = false;
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

                console.log(this.app.exists);
                if(name == 'Wagabagabooboo') {
                    alreadyExists = false;
                }
                if(name == 'no') {
                    alreadyExistsApp1 = false;
                }
                if(name == 'Welcome') {
                    welcomeAppExists = false;
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
    viewondesktop.innerHTML = "For the best experience of this portfolio, please switch to the closest desktop near you. Some of the functionality is lost on a mobile device, though you can still see everything I've made.";
    viewondesktop.style.fontSize = 10 + 'px';
    viewondesktop.style.position = 'relative';
    viewondesktop.style.top = 10 + 'px';
    document.getElementById('test').appendChild(welcome.getApp());
    let header1 = document.createElement('p');
    header1.innerHTML = "Welcome to <b>Portfolio<span style='color:#fff'>06</span></b>";
    header1.style.position = 'absolute';
    header1.style.fontSize = 40 + 'px';
    header1.style.left = 30 + 'px';

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
        video.style.width = 50 + 'px';
        video.style.height = 50 + 'px';
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
    pressStart.innerHTML = "You can press the start button on the bottom left to view the projects I've made, along with their Github repositories, if such repositories exist. IMAGE GOES BELOW.";
    
    video.appendChild(pressStart);
    video.appendChild(didyouknow);
    welcome.getApp().appendChild(video);

    header1.style.fontSize = 25 + 'px';
    if(isMobile) {
        header1.style.fontSize = 12 + 'px';
    }
    let header06 = document.createElement('p');
    header06.innerHTML = "06";
    header06.style.fontFamily = "Sans-Serif";
    header06.style.color = "white";

    welcome.getApp().appendChild(header1);

    if(isMobile) {
        welcome.getApp().appendChild(viewondesktop);
    }

    myList.push(welcome.getApp());

    requestAnimationFrame( () => {
        welcome.getApp().classList.add('show');
    });
    welcomeAppExists = true;

    doitall(welcome.getApp(), welcome.getHeader());
}

function app1() {
    if(alreadyExistsApp1) {
        return;
    }
    const tryApp = new App(300,  500, "no", 230, 80);

    let tester23 = document.createElement('p');
    tester23.innerHTML = "tester";
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

function createApp() {
    if(alreadyExists) {
        return;
    }

    const app1 = new App(200, 200, "Wagabagabooboo", 150, 400);
    
    document.getElementById('test').appendChild(app1.getApp());
    myList.push(app1.getApp());

    requestAnimationFrame( () => {
        app1.getApp().classList.add('show');
    });

    alreadyExists = true;
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
        console.log(offsetX);
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

        
        offsetX = e.clientX - app.offsetLeft;
        offsetY = e.clientY - app.offsetTop;
        if(offsetX >= app.getBoundingClientRect().width-5) {
            document.addEventListener('mousemove', resizeRight);
            document.addEventListener('mouseup', stop);
        }

        if(offsetX <= 5) {
            document.addEventListener('mousemove', resizeLeft);
            document.addEventListener('mouseup', stop);
        }

        if(offsetY <= 5) {
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

        if(!(offsetX >= app.getBoundingClientRect().width-5) && !(offsetX < 5) && !(offsetY < 5)) {
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', stop);
        }
        
    });
    
    function move(e) 
    {
        if(app.getBoundingClientRect().width >= window.innerWidth && app.getBoundingClientRect().height >= window.innerHeight-40) {
            console.log("true");
            app.style.width = 400 + 'px';
            app.style.height = 400 + 'px';
            offsetX = app.offsetLeft;
            offsetY = app.offsetTop;
            const headerChild = app.children[0];
            const closeButtonChild = headerChild.children[0];
    
            closeButtonChild.style.left = parseInt(app.style.width) - 25 + 'px';
        }
        let maxHorizontal = window.innerWidth - app.getBoundingClientRect().width;
        let maxVertical = window.innerHeight - app.getBoundingClientRect().height;
        
        app.style.left = Math.max(0, Math.min(e.clientX - offsetX, maxHorizontal)) + 'px';
        app.style.top = Math.max(0, Math.min(e.clientY - offsetY, maxVertical-40)) + 'px';
        
        console.log(app.style.left);

        appRight = app.getBoundingClientRect().right;
        appBottom = app.getBoundingClientRect().bottom;
    }
    function stop() 
    {
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

        app.style.width = Math.max(300, Math.min(e.clientX - appLeft, maxWidth)) + 'px';

        const headerChild = app.children[0];
        const closeButtonChild = headerChild.children[0];
    
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
        if(appRight - (e.clientX - offsetX) > 300) {
            app.style.left = Math.max(0, e.clientX - offsetX) + 'px'; 
        }
        app.style.right = appRight;

        app.style.width = Math.max(300, appRight - parseInt(app.style.left)) + 'px';

        const headerChild = app.children[0];
        const closeButtonChild = headerChild.children[0];
    
        closeButtonChild.style.left = parseInt(app.style.width) - 25 + 'px';
    }

    function resizeTop(e) {
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

