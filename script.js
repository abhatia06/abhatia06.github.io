
let alreadyExists = false;
let alreadyExistsApp1 = false;
let count = 0;
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
            closeButton.addEventListener('mouseup', () => {
                this.app.classList.remove('show');
            })

            document.addEventListener('mouseup', () => {
                closeButton.style.backgroundColor = 'rgb(220, 220, 220)';
            })

            this.app.addEventListener('transitionend', () => {
                this.app.remove();
                const index = myList.indexOf(this.app);
                console.log("index: "+index);
                if(index > -1) {
                    myList.splice(index, 1);
                }

                console.log(this.app.exists);
                if(name == 'Wagabagabooboo') {
                    alreadyExists = false;
                }
                if(name == 'no') {
                    alreadyExistsApp1 = false;
                }               
            });
        });
        

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
}



document.addEventListener('DOMContentLoaded', () => {
    time();
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
        if(hours-12 <= 0) {
            timefornow = hours+":0"+minutes+" AM";
        }
    }
    else {
        if(hours-12 > 0) {
            timefornow = hours-12+":"+minutes+" PM";
        }
        if(hours-12 <= 0) {
            timefornow = hours+":"+minutes+" AM";
        }
    }

    document.querySelectorAll("#time")[0].innerHTML = timefornow;
    setTimeout(time, 1000);
}

function app1() {
    if(alreadyExistsApp1) {
        return;
    }
    const tryApp = new App(300,  500, "no", 230, 80);

    let tester23 = document.createElement('p');
    tester23.innerHTML = "agjeawngiawengiawjegwiauegauwiegbnwajgjeawifigewajgeiowajgejiwaiojgeiowjifjsiojefoijseofjsoidjfisejfosjdiofjoeijfisoegjhoihogiehroijweoifjoijdfoisejfoisjehfiohsgioesojfiewjeoiwhgiowehgiosnefosneoifnhi";
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






// main function to control movement

function doitall(app, header) {
    console.log("doitall called");
    let offsetX = 0;
    let offsetY = 0;
    
    header.addEventListener('mousedown', (e) => {
        for(let i = 0; i < myList.length; i++) {
            if(myList[i] == app) {
                app.style.zIndex = 10;
            }
            else {
                myList[i].style.zIndex = 5;
            }
        }
        offsetX = e.clientX - app.offsetLeft;
        offsetY = e.clientY - app.offsetTop;
        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', stop);
        
    });
    
    function move(e) 
    {
        let maxHorizontal = window.innerWidth - app.getBoundingClientRect().width;
        let maxVertical = window.innerHeight - app.getBoundingClientRect().height;
        
        app.style.left = Math.max(0, Math.min(e.clientX - offsetX, maxHorizontal)) + 'px';
        app.style.top = Math.max(0, Math.min(e.clientY - offsetY, maxVertical-40)) + 'px';
        
        console.log(app.style.left);
    }
    function stop() 
    {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', stop);
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

