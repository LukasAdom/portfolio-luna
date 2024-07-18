
const getClass = document.querySelectorAll('.proj,.proj2,.proj3,.proj4,.proj5,.proj6,.proj7,.proj8');
const exitClass = document.querySelectorAll('.page-buttons-exit');
const getPortfolioClass = document.querySelector('.portfolio-main')

const yt_prefix = '?autoplay=1&loop=1&mute=1&modestbranding=1&iv_load_policy=3&controls=0&disablekb=1&fs=0'


var _true = true;

if(_true ==  true){
    document.querySelector('.header-bg').classList.add('once');
    document.querySelector('.sub-body').classList.add('once');
    _true = false
}

function clicked(){

    document.querySelector('.portfolio-main').id = 'vis';


    document.querySelector('.portfolio-main').addEventListener('mouseenter', () => {
        cursorClass.classList.add('hovering')
    })

    document.querySelector('.portfolio-main').addEventListener('mouseleave', () => {
        cursorClass.classList.remove('hovering')
    })


    if(_true ==  false){
        document.querySelector('.header-bg').classList.remove('once');
        document.querySelector('.sub-body').classList.remove('once');
    }

    document.querySelector('.page').classList.add('on');

    document.querySelector('.header-bg').classList.add('on');
    document.querySelector('.header-bg').classList.remove('off');

    document.querySelector('.img-handle').classList.add('on');
    document.querySelector('.sub-body').classList.add('on');
    document.querySelector('.sub-body').classList.remove('off');
    document.querySelector('.page-handle').classList.add('on');
    document.querySelector('.page-buttons-exit').classList.add('on');

    document.querySelector('.exit-img').classList.add('on');
    document.querySelector('.page').classList.remove('off');

    getPortfolioClass.classList.add('on');

    document.querySelector('.page-layer-handle3').classList.add('on');
    document.querySelector('.page-layer-handle2').classList.add('on');
    document.querySelector('.page-layer-handle').classList.add('on');

    document.querySelector('.page-layer-handle3').classList.remove('off');
    document.querySelector('.page-layer-handle2').classList.remove('off');
    document.querySelector('.page-layer-handle').classList.remove('off');

}

function exitclass(){
    
    document.querySelector('.portfolio-main').id = 'novis';

    document.querySelector('.page').classList.remove('on');
    document.querySelector('.page').classList.add('off');

    document.querySelector('.header-bg').classList.remove('on');
    document.querySelector('.header-bg').classList.add('off');

    document.querySelector('.img-handle').classList.remove('on');
    document.querySelector('.sub-body').classList.remove('on');
    document.querySelector('.sub-body').classList.add('off');

    document.querySelector('.page-handle').classList.remove('on');
    document.querySelector('.page-buttons-exit').classList.remove('on');
    document.querySelector('.exit-img').classList.remove('on');


    document.querySelector('.page-layer-handle3').classList.add('off');
    document.querySelector('.page-layer-handle2').classList.add('off');
    document.querySelector('.page-layer-handle').classList.add('off');


    document.querySelector('.page-layer-handle3').classList.remove('on');
    document.querySelector('.page-layer-handle2').classList.remove('on');
    document.querySelector('.page-layer-handle').classList.remove('on');


    document.getElementById("txt1").textContent="";
    document.querySelector('.title').style.backgroundImage = "";

    document.querySelector('.yt').style.opacity = 0;

    document.querySelector('.no-video').style.opacity = 0;

    document.querySelector('.github-link').href = '';
        document.querySelector('.source-code-main').style.opacity = 0;
        document.querySelector('.source-code-main').style.pointerEvents = "none";

        document.querySelector('.play-link').href = '';
        document.querySelector('.play-button-main').style.opacity = 0;
        document.querySelector('.play-button-main').style.pointerEvents = "none";


        document.querySelector('.roblox-link').href = '';
        document.querySelector('.roblox-redirect-main').style.opacity = 0;
        document.querySelector('.roblox-redirect-main').style.pointerEvents = "none";


}

function exitclassPortfolio(){
    if(document.querySelector('.portfolio-main.on')) {
        
        document.querySelector('.portfolio-main').id = 'novis';

    document.querySelector('.page').classList.remove('on');
    document.querySelector('.page').classList.add('off');

    document.querySelector('.header-bg').classList.remove('on');
    document.querySelector('.header-bg').classList.add('off');

    document.querySelector('.img-handle').classList.remove('on');
    document.querySelector('.sub-body').classList.remove('on');
    document.querySelector('.sub-body').classList.add('off');

    document.querySelector('.page-handle').classList.remove('on');
    document.querySelector('.page-buttons-exit').classList.remove('on');
    document.querySelector('.exit-img').classList.remove('on');

        getPortfolioClass.classList.remove('on');



        document.getElementById("txt1").textContent="";
    document.querySelector('.title').style.backgroundImage = "";

    document.querySelector('.yt').style.opacity = 0;

    document.querySelector('.no-video').style.opacity = 0;

    document.querySelector('.github-link').href = '';
        document.querySelector('.source-code-main').style.opacity = 0;
        document.querySelector('.source-code-main').style.pointerEvents = "none";

        document.querySelector('.play-link').href = '';
        document.querySelector('.play-button-main').style.opacity = 0;
        document.querySelector('.play-button-main').style.pointerEvents = "none";


        document.querySelector('.roblox-link').href = '';
        document.querySelector('.roblox-redirect-main').style.opacity = 0;
        document.querySelector('.roblox-redirect-main').style.pointerEvents = "none";


        document.querySelector('.page-layer-handle3').classList.add('off');
        document.querySelector('.page-layer-handle2').classList.add('off');
        document.querySelector('.page-layer-handle').classList.add('off');

        document.querySelector('.page-layer-handle3').classList.remove('on');
        document.querySelector('.page-layer-handle2').classList.remove('on');
        document.querySelector('.page-layer-handle').classList.remove('on');

    };
};

const changePageContent = e => {

    if(e.target == document.querySelector('.window1') || e.target == document.querySelector('.proj') == true){
        
        document.getElementById("txt1").textContent="I made the game \"It Screams.\" to challenge my memory optimization skills since my game uses a post-processing effect that takes a lot of processing power. I had to find creative ways to optimize every single little detail, and I had to rewrite how my game renders objects completely. Some optimization changes may look unconventional because of how much I tried optimizing everything. For example, I almost never added any folders or models to the game, only to avoid doing any recursions within my code later. My game also has a built-in maze-generating algorithm that runs at a time complexity of O(2^n). With all these optimizations my computer went from having 40fps to 100fps with an occasional dip down to 70-60fps, and you can comfortably play it on mobile, not to mention, that my game runs better on mobile rather than on PC o_o. The reason why this happens is because Roblox mobile runs at a lower resolution than on PC, my post-processing effect constantly runs every single frame so the more pixels the game has to process, the more intensive it becomes for Roblox to handle. This optimization hell could all be avoided if Roblox just allowed developers to write and compile C++ code into Roblox directly.";
        document.querySelector('.title').style.backgroundImage = "url(img/it-screams.png)";

        document.querySelector('.yt').contentWindow.location.replace('yt-videos/yt-video.html');
        document.querySelector('.yt').style.opacity = 1;

        document.querySelector('.no-video').style.opacity = 0;

        document.querySelector('.github-link').href = 'https://github.com/LukasAdom/it_screams';
        document.querySelector('.source-code-main').style.opacity = 1;
        document.querySelector('.source-code-main').style.pointerEvents = "all";

        document.querySelector('.play-link').href = 'https://www.roblox.com/games/17624062749/It-Screams';
        document.querySelector('.play-button-main').style.opacity = 1;
        document.querySelector('.play-button-main').style.pointerEvents = "all";

        document.querySelector('.roblox-link').href = '';
        document.querySelector('.roblox-redirect-main').style.opacity = 0;
        document.querySelector('.roblox-redirect-main').style.pointerEvents = "none";


    }

    if(e.target == document.querySelector('.window2') || e.target == document.querySelector('.proj2') == true){
        
        document.getElementById("txt1").textContent="This was the very first time that I got hired as a gameplay engineer for a small Roblox game studio called \"Ninty Studios\". Primarily my main responsibilities were to add features to the game, add new items, pets, and storage items, and fix bugs that were left by other developers. When I started working for \"Ninty Studios\" the code of their game \"Zombie Simulator\" was a bug-filled mess, doors weren't working, certain items would glitch out, and players' datastores would randomly experience data loss. With a ton of work and consistency, I was able to clean everything up and improve certain game mechanics. Later when we had to update the game for Halloween I and the other developers had to work tirelessly just to meet deadlines, which later resulted in me leaving Ninty Studios. Although my leaving wasn't in vain, since I did a pretty damn good job patching up the game and adding gameplay mechanics. My fixes ultimately helped everyone have an easier time adding new features without having to deal with bugs. Unfortunately, after some time the game fully died out and reverted to an older version where it didn't have all the fixes and features that I added :(.";
        document.querySelector('.title').style.backgroundImage = "url(img/zom.png)";

        document.querySelector('.yt').contentWindow.location.replace('yt-videos/yt-video2.html');
        document.querySelector('.yt').style.opacity = 1;

        document.querySelector('.no-video').style.opacity = 0;

        document.querySelector('.github-link').href = '';
        document.querySelector('.source-code-main').style.opacity = 0;
        document.querySelector('.source-code-main').style.pointerEvents = "none";

        document.querySelector('.play-link').href = 'https://www.roblox.com/games/5596706978/Zombie-Simulator';
        document.querySelector('.play-button-main').style.opacity = 1;
        document.querySelector('.play-button-main').style.pointerEvents = "all";


        document.querySelector('.roblox-link').href = 'https://www.roblox.com/groups/2703315/Ninty-Studios#!/about';
        document.querySelector('.roblox-redirect-main').style.opacity = 1;
        document.querySelector('.roblox-redirect-main').style.pointerEvents = "all";

    }


    if(e.target == document.querySelector('.window3') || e.target == document.querySelector('.proj3') == true){
        
        document.getElementById("txt1").textContent="This was my favorite yet the most frustrating project to work on so far. The reason why I programmed ray tracing into Roblox was to get my gears running smoothly since I hadn't written Luau code in a long time. How this works is by creating an array of 1x1 frames and placing them across the entire screen, making them act like pixels. I would later rasterize an image using raycasts that were fired from the camera, and later I would write the main ray-casting function. How It would work was the camera would shoot a ray and if the ray hits an object that has a reflective property, It would bounce off the object in a random direction that was appointed by a random point on a hemisphere. And it would continue for several iterations until it returns all the color data back to the camera. For the color data, I had to convert everything to CIELUV to get more accurate colors, which was a pain in the ass to code. Not to mention  I had exams coming up while I was writing all of this.";
        document.querySelector('.title').style.backgroundImage = "url(img/ray.png)";

        document.querySelector('.yt').contentWindow.location.replace('yt-videos/yt-video4.html');
        document.querySelector('.yt').style.opacity = 1;

        document.querySelector('.no-video').style.opacity = 0;

        document.querySelector('.github-link').href = 'https://github.com/LukasAdom/raytracing-roblox/blob/main/raytracing.client.lua';
        document.querySelector('.source-code-main').style.opacity = 1;
        document.querySelector('.source-code-main').style.pointerEvents = "all";

        document.querySelector('.play-link').href = 'https://www.roblox.com/games/17571150571/Ray-test';
        document.querySelector('.play-button-main').style.opacity = 1;
        document.querySelector('.play-button-main').style.pointerEvents = "all";


        document.querySelector('.roblox-link').href = '';
        document.querySelector('.roblox-redirect-main').style.opacity = 0;
        document.querySelector('.roblox-redirect-main').style.pointerEvents = "none";


    }


    if(e.target == document.querySelector('.window4') || e.target == document.querySelector('.proj4') == true){
        
        document.getElementById("txt1").textContent="One of the first ever big projects I've worked on. However, since this was my first big project, I made a ton of mistakes from which I learned. I hadn't planned anything when first starting this project that mistake would be the sole reason why I couldn't finish my game. My game was simply too ambitious, it would be nearly impossible for a single developer to create all the features, story elements, and gameplay elements that I imagined my game would have, which later caused me to burn out and lose the drive and motivation to continue further developing my game. But other than that \"Giant Simulator\" has an appealing aesthetic to it. I play this game from time to time just to check out how well my game aged, and each time I played, I was impressed by how smoothly everything was. Overall I enjoyed the time I've spent building this, unfortunately, my ideas were too ambitious for them to be properly integrated.";
        document.querySelector('.title').style.backgroundImage = "url(img/giant.png)";

        document.querySelector('.yt').contentWindow.location.replace('yt-videos/yt-video3.html');
        document.querySelector('.yt').style.opacity = 1;

        document.querySelector('.no-video').style.opacity = 0;

        document.querySelector('.github-link').href = 'https://github.com/LukasAdom/Giant-Simulator-Beta-';
        document.querySelector('.source-code-main').style.opacity = 1;
        document.querySelector('.source-code-main').style.pointerEvents = "all";

        document.querySelector('.play-link').href = 'https://www.roblox.com/games/4474368970/Giant-Simulator-BETA';
        document.querySelector('.play-button-main').style.opacity = 1;
        document.querySelector('.play-button-main').style.pointerEvents = "all";


        document.querySelector('.roblox-link').href = '';
        document.querySelector('.roblox-redirect-main').style.opacity = 0;
        document.querySelector('.roblox-redirect-main').style.pointerEvents = "none";

    }

    if(e.target == document.querySelector('.window5') || e.target == document.querySelector('.proj5') == true){
        
        document.getElementById("txt1").textContent="I made a basic A* algorithm that I was supposed to use on my pathfinding AI until I realized that under the time constraint I was on at the time I couldn't be able to finish this. Enjoy dissecting the code :).";
        document.querySelector('.title').style.backgroundImage = "url(img/aStar.png)";

        document.querySelector('.yt').contentWindow.location.replace('');
        document.querySelector('.yt').style.opacity = 0;

        document.querySelector('.no-video').style.opacity = 1;

        document.querySelector('.github-link').href = 'https://github.com/LukasAdom/A-roblox/blob/main/Astar.server.lua';
        document.querySelector('.source-code-main').style.opacity = 1;
        document.querySelector('.source-code-main').style.pointerEvents = "all";

        document.querySelector('.play-link').href = '';
        document.querySelector('.play-button-main').style.opacity = 0;
        document.querySelector('.play-button-main').style.pointerEvents = "none";


        document.querySelector('.roblox-link').href = '';
        document.querySelector('.roblox-redirect-main').style.opacity = 0;
        document.querySelector('.roblox-redirect-main').style.pointerEvents = "none";


    }


    if(e.target == document.querySelector('.window6') || e.target == document.querySelector('.proj6') == true){
        
        document.getElementById("txt1").textContent="I teamed up with another developer to create a story game called \"Paranoia\". This was supposed to be a game where an American spy infiltrates a Russian base up in Antarctica. The development side of things was pretty smooth. While I mainly programmed all the data handling and the UI/UX the other developer was building models for me to use. However, after some time, the other developer lost motivation and later quit the project which left me to work all by myself and soon I too quit development. If you're interested you could read the source code and also check out the devforum post I made about the game's graphical setting UI.";
        document.querySelector('.title').style.backgroundImage = "url(img/para.png)";

        document.querySelector('.yt').contentWindow.location.replace('yt-videos/yt-video6.html')
        document.querySelector('.yt').style.opacity = 1;

        document.querySelector('.no-video').style.opacity = 0;

        document.querySelector('.github-link').href = 'https://github.com/LukasAdom/roblox-settings';
        document.querySelector('.source-code-main').style.opacity = 1;
        document.querySelector('.source-code-main').style.pointerEvents = "all";

        document.querySelector('.play-link').href = 'https://www.roblox.com/games/6050496933/Paranoia-STORY';
        document.querySelector('.play-button-main').style.opacity = 1;
        document.querySelector('.play-button-main').style.pointerEvents = "all";


        document.querySelector('.roblox-link').href = 'https://devforum.roblox.com/t/update-graphical-settings-for-the-game-named-%D0%BF%D0%B0%D1%80%D0%B0%D0%BD%D0%BE%D0%B9%D1%8F-story-or-paranoia-story/916969';
        document.querySelector('.roblox-redirect-main').style.opacity = 1;
        document.querySelector('.roblox-redirect-main').style.pointerEvents = "all";


    }

    if(e.target == document.querySelector('.window7') || e.target == document.querySelector('.proj7') == true){
        
        document.getElementById("txt1").textContent="I'm currently building a game engine using C++ which will be able to compile both C++ and Lua. I'm doing this to be able to create my own games and allow other game developers to have an easier time programming. The Luna Engine will be accessible to both beginner and advanced-level game developers. Let's hope I make this within the next 5 years xd.  ";
        document.querySelector('.title').style.backgroundImage = "url(img/lunaEngine.png)";

        document.querySelector('.yt').contentWindow.location.replace('')
        document.querySelector('.yt').style.opacity = 0;

        document.querySelector('.no-video').style.opacity = 1;

        document.querySelector('.github-link').href = '';
        document.querySelector('.source-code-main').style.opacity = 0;
        document.querySelector('.source-code-main').style.pointerEvents = "none";

        document.querySelector('.play-link').href = '';
        document.querySelector('.play-button-main').style.opacity = 0;
        document.querySelector('.play-button-main').style.pointerEvents = "none";


        document.querySelector('.roblox-link').href = '';
        document.querySelector('.roblox-redirect-main').style.opacity = 0;
        document.querySelector('.roblox-redirect-main').style.pointerEvents = "none";


    }

    if(e.target == document.querySelector('.window8') || e.target == document.querySelector('.proj8') == true){
        
        document.getElementById("txt1").textContent="Luna++ Ocllusion Culler will be a plugin used specifically to bake in occlusion culling into Roblox. The same as you would do in Unity or Godot. I always had an issue with certain games having God-awful performances just because the devs decided to add a million meshes into their game. So I'm creating Luna++ OC to fix this problem and allow developers to properly bake in occlusion culling into Roblox.";
        document.querySelector('.title').style.backgroundImage = "url(img/OC.png)";
        
        document.querySelector('.yt').contentWindow.location.replace('')
        document.querySelector('.yt').style.opacity = 0;

        document.querySelector('.no-video').style.opacity = 1;

        document.querySelector('.github-link').href = '';
        document.querySelector('.source-code-main').style.opacity = 0;
        document.querySelector('.source-code-main').style.pointerEvents = "none";

        document.querySelector('.play-link').href = '';
        document.querySelector('.play-button-main').style.opacity = 0;
        document.querySelector('.play-button-main').style.pointerEvents = "none";


        document.querySelector('.roblox-link').href = '';
        document.querySelector('.roblox-redirect-main').style.opacity = 0;
        document.querySelector('.roblox-redirect-main').style.pointerEvents = "none";


    }

}

for(var i = 0; i < getClass.length; i++){
    getClass[i].addEventListener('click', clicked);
    getClass[i].addEventListener('click', changePageContent);
}



exitClass[0].addEventListener('click', exitclass)
getPortfolioClass.addEventListener('click', exitclassPortfolio)


/* //////// */
/* Pointer code */
/* //////// */

const bg = document.querySelector('.background');

window.addEventListener('mousemove', (e) => {
    mousePosition.x = e.x;
    mousePosition.y = e.y;

    bg.style.backgroundPositionX = -e.x * 0.05 + "px" ;
    bg.style.backgroundPositionY = -e.y * 0.05 + "px" ;
});

const cursorClass = document.querySelector('.circle');

const spd = 0.17;
var mousePosition = {x:0,y:0};
var mousePositionBeforeFrame = {x:0,y:0};

var cursorPosition = {x:0,y:0};
var cursorPositionBeforeFrame = {x:0,y:0};

let currentSize = 0;
let currentAngle = 0;


function tick(){
    cursorPosition.x += (mousePosition.x - cursorPosition.x) * spd
    cursorPosition.y += (mousePosition.y - cursorPosition.y) * spd

    const translateTransform = `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`;

    cursorClass.style.transform = translateTransform

    const deltaMouseX = mousePosition.x - mousePositionBeforeFrame.x;
    const deltaMouseY = mousePosition.y - mousePositionBeforeFrame.y;

    const deltaCursorX = cursorPosition.x - cursorPositionBeforeFrame.x;
    const deltaCursorY = cursorPosition.y - cursorPositionBeforeFrame.y;

    mousePositionBeforeFrame.x = mousePosition.x;
    mousePositionBeforeFrame.y = mousePosition.y;

    const velocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4.5, 150); 
    const Value = (velocity / 150) * 0.5;

    currentSize += (Value - currentSize) * spd

    const scaleTransform = `scale(${1 + currentSize}, ${1 - currentSize})`;
    const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;

    if (velocity > 20) {
        currentAngle = angle;
      }

      const rotateTransform = `rotate(${currentAngle}deg)`;

      cursorClass.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
    

    window.requestAnimationFrame(tick);
}

tick();


const getbuttonClass = document.querySelectorAll('#vis')

getbuttonClass.forEach(getbutton => {
    getbutton.addEventListener('mouseenter', () => {
        cursorClass.classList.add('hovering')
    })
});

getbuttonClass.forEach(getbutton => {
    getbutton.addEventListener('mouseleave', () => {
        cursorClass.classList.remove('hovering')
    })
});


/* Check if user is on mobile */

var hasTouchScreen = false;

if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
    var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
    } else if ('orientation' in window) {
        hasTouchScreen = true;
    } else {
       
        var UA = navigator.userAgent;
        hasTouchScreen = (
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
    }
}

if (hasTouchScreen){
    document.querySelector('.mobile-block').classList.add('mobile');
    document.querySelector('.mobile-text-block').classList.add('mobile');
}

