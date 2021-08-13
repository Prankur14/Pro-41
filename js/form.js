class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.reset = createButton('Reset');
        this.fullscreen = createButton('Fullscreen');
        this.duplicate = createButton('Duplicate');
        // this.slider = createSlider(0, 1, 0.5, 0.01);
        this.volume = createElement('h3');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.volume.hide();
        // slider.hide();
    }
    // resize(){
    //     slider.position = this.volume.x+10
    // }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');

        this.volume.html("Control Volume: ");
        this.volume.position(window.innerWidth - 160, window.innerHeight - 210);
        this.volume.style('font-family', 'comfortaa');
        this.volume.style('color', 'skyblue');

        this.title.style('font-family', 'comfortaa')
        this.input.position(550, 400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560, 500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.button.style('font-family', 'eras itc')
        this.reset.position(window.innerWidth - 150, window.innerHeight - 40);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        this.reset.style('font-family', 'eras itc')
        this.fullscreen.style('width', '100px');
        this.fullscreen.style('height', '30px');
        this.fullscreen.style('font-family', 'eras itc')
        this.fullscreen.style('background', 'lightpink');
        this.fullscreen.position(window.innerWidth - 150, window.innerHeight - 80);
        this.duplicate.position(window.innerWidth - 150, window.innerHeight - 120);
        this.duplicate.style('width', '100px');
        this.duplicate.style('height', '30px');
        this.duplicate.style('background', 'lightpink');
        this.duplicate.style('font-family', 'eras itc');

        // if (fullscreen(true)) {
        // this.fullscreen.position(windwo.innerWidth - 70, window.innerHeight - 10)
        // }


        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400, 250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-family', 'comfortaa')
            this.greeting.style('font-size', '100px');
            // if (rulesTimer === 0) {
            //     alert("The game is about to begin, waiting for other player. The first one to reach 50 score WINS!!");
            //     rulesTimer = 1;
            // }
            // fullscreen(true);
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            database.ref('players').remove();
            document.location.reload();
            lobby_background.stop();



        }
        );
        this.fullscreen.mousePressed(() => {
            {
                if (fullscreen(false)) {
                    // this.volume.position(window.innerWidth - 160, window.innerHeight - 350);
                    fullscreen(true);
                }
                if (fullscreen(true)) {
                    // this.volume.position(window.innerWidth - 160, window.innerHeight - 210);
                    fullscreen(false);
                }
            }
            //

            // tabs.duplicate()

        })

        this.duplicate.mousePressed(() => {
            var newWin = window.open(window.location.href);

            if (!newWin || newWin.closed || typeof newWin.closed == 'undefined') {
                alert("Please enable POPUPS and REDIRECTS for this website.")
            }
        })
    }
}
