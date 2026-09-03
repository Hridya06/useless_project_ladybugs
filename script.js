```javascript
/* =====================================================
   yBecozz...
   The world's most unnecessary excuse machine.
===================================================== */


/* ================= PAGE CONTROL ================= */

function showPage(pageId, stepName) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    document.getElementById("stepText").innerText = stepName;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= HOME ================= */

function goToSituation() {

    showPage("situationPage", "situation");
}


/* ================= SITUATION ================= */

const situationInput = document.getElementById("situation");

situationInput.addEventListener("input", function () {

    document.getElementById("charCount").innerText =
        this.value.length;

});


function startUselessTask() {

    const situation =
        situationInput.value.trim();

    if (situation === "") {

        situationInput.focus();

        situationInput.placeholder =
            "bro you gotta tell us SOMETHING 😭";

        return;
    }

    showPage("taskPage", "important task");

    resetGame();
}


/* ================= USELESS GAME ================= */

let clicks = 0;

const taskMessages = [

    "catch it. trust us. this is extremely important.",

    "why is it so fast 😭",

    "bro STOP RUNNING",

    "this duck has places to be apparently.",

    "you are actually losing to a duck.",

    "LOCK IN.",

    "the duck is becoming aware of your strategy.",

    "this is getting embarrassing.",

    "ONE MORE. DO NOT FUMBLE.",

    "FINAL DUCK TECHNOLOGY."
];


function resetGame() {

    clicks = 0;

    document.getElementById("clickCount").innerText = "0";

    document.getElementById("gameProgress").style.width = "0%";

    moveDuck();
}


function catchDuck() {

    clicks++;

    document.getElementById("clickCount").innerText =
        clicks;

    const progress =
        (clicks / 10) * 100;

    document.getElementById("gameProgress").style.width =
        progress + "%";

    if (clicks < 10) {

        document.getElementById("taskMessage").innerText =
            taskMessages[Math.min(clicks, taskMessages.length - 1)];

        moveDuck();

        return;
    }


    /* GAME COMPLETE */

    document.getElementById("taskMessage").innerText =
        "YOU CAUGHT IT. humanity is healing.";

    document.getElementById("duck").innerText =
        "💥";

    setTimeout(() => {

        generateFinalExcuse();

        showPage("rewardPage", "reward");

    }, 900);
}


function moveDuck() {

    const duck =
        document.getElementById("duck");

    const area =
        document.getElementById("gameArea");

    const maxX =
        area.clientWidth - 55;

    const maxY =
        area.clientHeight - 55;

    const x =
        Math.floor(Math.random() * maxX);

    const y =
        Math.floor(Math.random() * maxY);

    duck.style.left = x + "px";

    duck.style.top = y + "px";
}


/* ================= EXCUSE GENERATOR ================= */

function generateFinalExcuse() {

    const situation =
        situationInput.value.toLowerCase();

    let excuses = [];


    /* ASSIGNMENT / SCHOOL */

    if (
        situation.includes("assignment") ||
        situation.includes("homework") ||
        situation.includes("project") ||
        situation.includes("submit") ||
        situation.includes("deadline")
    ) {

        excuses = [

            "bro i literally had it done and then my laptop decided to become a decorative object 😭",

            "idk man the assignment and i were not spiritually aligned yesterday 💀",

            "i was gonna submit it but then i blinked and apparently the deadline passed",

            "bro my brain said 'we'll do it later' and later never arrived 😭",

            "the file was there. i saw it. it saw me. nobody made the first move.",

            "i swear i was about to submit it and then my entire productivity just rage quit 💀"

        ];

    }


    /* LATE / SCHOOL / CLASS */

    else if (
        situation.includes("late") ||
        situation.includes("class") ||
        situation.includes("school") ||
        situation.includes("college") ||
        situation.includes("meeting") ||
        situation.includes("bus")
    ) {

        excuses = [

            "bro i left on time but the universe clearly had other plans 😭",

            "i was literally coming and then everything started taking 700 years",

            "idk how to explain this but time moved WAY too fast today 💀",

            "bro i was ready. physically. mentally? absolutely not.",

            "i swear i was almost there and then life hit me with a side quest",

            "my timing was perfect until it wasn't 😭"

        ];

    }


    /* PHONE / REPLY */

    else if (
        situation.includes("reply") ||
        situation.includes("message") ||
        situation.includes("text") ||
        situation.includes("call") ||
        situation.includes("phone")
    ) {

        excuses = [

            "bro i saw it and then mentally replied so i genuinely thought i sent it 😭",

            "i was gonna reply but then my brain opened 17 tabs and crashed",

            "not me reading the message and saying 'i'll reply in a sec' 💀",

            "bro i swear i didn't ignore you, i just entered a temporary state of disappearance",

            "i saw your message at the worst possible time and then my brain deleted the memory",

            "my bad bro the reply existed in my head. does that count?"

        ];

    }


    /* FORGOT */

    else if (
        situation.includes("forgot") ||
        situation.includes("remember") ||
        situation.includes("lost") ||
        situation.includes("missing")
    ) {

        excuses = [

            "bro i remembered it like 3 seconds after it became useful 😭",

            "i genuinely thought i already did it. plot twist: absolutely did not.",

            "my brain put that information in the 'deal with later' folder and deleted the folder",

            "i had it in my head. unfortunately my head is not a reliable storage device 💀",

            "bro it completely left my brain like it paid rent and moved out",

            "i remembered. then forgot. then remembered again. then gave up 😭"

        ];

    }


    /* RANDOM CHAOS */

    else {

        excuses = [

            "bro idk 😭 things happened and somehow i became the victim of my own decisions",

            "i had a plan. the plan had a plan. none of them survived.",

            "something went wrong and then another thing went wrong and honestly i just let it happen 💀",

            "bro the situation got weird and i simply wasn't built for it",

            "i could explain but the explanation would make this significantly worse 😭",

            "long story short: i thought i had this under control. i did not.",

            "bro everything was normal and then suddenly it was very much NOT normal",

            "i blame bad timing, questionable decisions and possibly the moon."

        ];

    }


    const randomIndex =
        Math.floor(Math.random() * excuses.length);

    document.getElementById("finalExcuse").innerText =
        excuses[randomIndex];
}


/* ================= COPY ================= */

function copyExcuse() {

    const excuse =
        document.getElementById("finalExcuse").innerText;

    navigator.clipboard.writeText(excuse);

    document.getElementById("copyMessage").innerText =
        "copied. go forth and make questionable decisions 💀";

}


/* ================= RESTART ================= */

function restart() {

    situationInput.value = "";

    document.getElementById("charCount").innerText =
        "0";

    document.getElementById("copyMessage").innerText =
        "";

    showPage("homePage", "home");

}
```
