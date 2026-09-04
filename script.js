document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     PAGE ELEMENTS
  ========================= */

  const pages = {
    home: document.getElementById("homePage"),
    situation: document.getElementById("situationPage"),
    analysis: document.getElementById("analysisPage"),
    task: document.getElementById("taskPage"),
    reward: document.getElementById("rewardPage")
  };


  const logoButton = document.getElementById("logoButton");

  const letsLieButton = document.getElementById("letsLieButton");

  const situation = document.getElementById("situation");
  const charCount = document.getElementById("charCount");
  const situationError = document.getElementById("situationError");
  const continueButton = document.getElementById("continueButton");


  const analysisTitle = document.getElementById("analysisTitle");
  const analysisProgress = document.getElementById("analysisProgress");
  const analysisPercent = document.getElementById("analysisPercent");

  const statusRows = [
    document.getElementById("statusRow1"),
    document.getElementById("statusRow2"),
    document.getElementById("statusRow3"),
    document.getElementById("statusRow4")
  ];

  const analysisResult = document.getElementById("analysisResult");


  const gameArea = document.getElementById("gameArea");
  const duck = document.getElementById("duck");

  const clickCount = document.getElementById("clickCount");
  const gameProgress = document.getElementById("gameProgress");
  const gameProgressText = document.getElementById("gameProgressText");
  const taskMessage = document.getElementById("taskMessage");


  const rewardOverlay = document.getElementById("rewardOverlay");
  const rewardLoadingProgress =
    document.getElementById("rewardLoadingProgress");
  const rewardLoadingPercent =
    document.getElementById("rewardLoadingPercent");
  const rewardLoadingStatus =
    document.getElementById("rewardLoadingStatus");
  const databaseUnlocked =
    document.getElementById("databaseUnlocked");


  const finalExcuse = document.getElementById("finalExcuse");
  const restartButton = document.getElementById("restartButton");


  const limitOverlay = document.getElementById("limitOverlay");
  const limitCloseButton = document.getElementById("limitCloseButton");


  /* =========================
     STATE
  ========================= */

  let currentSituation = "";

  let duckHits = 0;

  let analysisTimer = null;

  let rewardTimer = null;

  let audioContext = null;


  /* =========================
     PAGE SWITCHING
  ========================= */

  function showPage(pageName) {

    Object.values(pages).forEach(page => {
      page.classList.remove("active");
    });

    if (pages[pageName]) {
      pages[pageName].classList.add("active");
    }

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }


  /* =========================
     HOME
  ========================= */

  letsLieButton.addEventListener("click", () => {

    situationError.classList.remove("show");

    showPage("situation");

    setTimeout(() => {
      situation.focus();
    }, 300);

  });


  logoButton.addEventListener("click", () => {

    stopTimers();

    rewardOverlay.classList.remove("show");
    limitOverlay.classList.remove("show");

    resetEverything();

    showPage("home");

  });


  /* =========================
     TEXTAREA
  ========================= */

  situation.addEventListener("input", () => {

    const length = situation.value.length;

    charCount.textContent = `${length} / 500`;

    if (length > 0) {
      situationError.classList.remove("show");
    }

  });


  /* =========================
     CONTINUE BUTTON
  ========================= */

  continueButton.addEventListener("click", () => {

    const text = situation.value.trim();

    if (!text) {

      situationError.classList.add("show");

      situation.focus();

      return;
    }


    currentSituation = text;

    situationError.classList.remove("show");

    startAnalysis();

  });


  /* =========================
     ANALYSIS
  ========================= */

  function startAnalysis() {

    stopTimers();

    showPage("analysis");

    analysisProgress.style.width = "0%";
    analysisPercent.textContent = "0";

    analysisResult.classList.remove("show");

    statusRows.forEach(row => {
      row.classList.remove("completed");

      const icon = row.querySelector(".status-icon");

      if (icon) {
        icon.textContent = "○";
      }
    });


    analysisTitle.textContent =
      "analyzing your questionable situation...";


    let progress = 0;


    analysisTimer = setInterval(() => {

      const increase =
        Math.floor(Math.random() * 5) + 1;

      progress += increase;


      if (progress >= 100) {
        progress = 100;
      }


      analysisProgress.style.width = `${progress}%`;

      analysisPercent.textContent = progress;


      updateAnalysisStatuses(progress);


      if (progress < 25) {

        analysisTitle.textContent =
          "analyzing your questionable situation...";

      } else if (progress < 50) {

        analysisTitle.textContent =
          "detecting possible excuses...";

      } else if (progress < 75) {

        analysisTitle.textContent =
          "removing all accountability...";

      } else if (progress < 100) {

        analysisTitle.textContent =
          "making this sound believable...";

      } else {

        analysisTitle.textContent =
          "analysis complete. unfortunately.";

        clearInterval(analysisTimer);

        analysisTimer = null;

        setTimeout(() => {

          analysisResult.classList.add("show");

        }, 250);

        setTimeout(() => {

          showPage("task");

          resetDuckGame();

        }, 1400);

      }

    }, 90);

  }


  function updateAnalysisStatuses(progress) {

    const thresholds = [
      22,
      45,
      68,
      88
    ];


    thresholds.forEach((threshold, index) => {

      if (progress >= threshold) {

        const row = statusRows[index];

        row.classList.add("completed");

        const icon = row.querySelector(".status-icon");

        if (icon) {
          icon.textContent = "✓";
        }

      }

    });

  }


  /* =========================
     DUCK GAME
  ========================= */

  const duckMessages = [
    "okay easy.",
    "wait",
    "why is it faster",
    "bro",
    "THIS IS NOT WHAT I SIGNED UP FOR",
    "someone call animal control",
    "THE DUCK HAS ADAPTED",
    "WE ARE LOSING",
    "LOCK IN.",
    "YOU HAVE DEFEATED THE DUCK."
  ];


  function resetDuckGame() {

    duckHits = 0;

    clickCount.textContent = "0 / 10";

    gameProgress.style.width = "0%";

    gameProgressText.textContent =
      duckMessages[0];

    taskMessage.textContent =
      "please take this seriously.";


    duck.disabled = false;

    duck.classList.remove("defeated");

    moveDuck(true);

  }


  duck.addEventListener("click", () => {

    if (duckHits >= 10) {
      return;
    }


    /* QUACK EVERY SINGLE CLICK */

    quack();


    duckHits++;


    clickCount.textContent =
      `${duckHits} / 10`;


    const percentage =
      (duckHits / 10) * 100;


    gameProgress.style.width =
      `${percentage}%`;


    gameProgressText.textContent =
      duckMessages[duckHits - 1];


    updateTaskMessage();


    if (duckHits >= 10) {

      gameProgressText.textContent =
        duckMessages[9];

      taskMessage.textContent =
        "you may now receive your completely useless reward.";

      duck.disabled = true;

      duck.classList.add("defeated");


      setTimeout(() => {

        showRewardLoading();

      }, 850);


      return;
    }


    moveDuck();

  });


  function updateTaskMessage() {

    if (duckHits === 1) {

      taskMessage.textContent =
        "okay... that was suspiciously easy.";

    } else if (duckHits === 2) {

      taskMessage.textContent =
        "why did it move.";

    } else if (duckHits === 3) {

      taskMessage.textContent =
        "this is getting personal.";

    } else if (duckHits === 4) {

      taskMessage.textContent =
        "you have made a terrible mistake.";

    } else if (duckHits === 5) {

      taskMessage.textContent =
        "halfway there. unfortunately.";

    } else if (duckHits === 6) {

      taskMessage.textContent =
        "the duck knows your strategy.";

    } else if (duckHits === 7) {

      taskMessage.textContent =
        "it has evolved.";

    } else if (duckHits === 8) {

      taskMessage.textContent =
        "DO NOT PANIC.";

    } else if (duckHits === 9) {

      taskMessage.textContent =
        "ONE MORE. LOCK IN.";

    }

  }


  function moveDuck(initial = false) {

    if (!gameArea || !duck) {
      return;
    }


    const areaRect =
      gameArea.getBoundingClientRect();


    const duckSize =
      duck.offsetWidth;


    const padding = 25;


    const maxX =
      Math.max(
        padding,
        areaRect.width - duckSize - padding
      );


    const maxY =
      Math.max(
        padding,
        areaRect.height - duckSize - padding
      );


    let x;
    let y;


    if (initial) {

      x =
        (areaRect.width - duckSize) / 2;

      y =
        (areaRect.height - duckSize) / 2;

    } else {

      x =
        Math.random() * maxX;

      y =
        Math.random() * maxY;

    }


    duck.style.left =
      `${x}px`;

    duck.style.top =
      `${y}px`;

    duck.style.transform =
      "none";

  }


  /* =========================
     QUACK SOUND
  ========================= */

  function quack() {

    try {

      if (!audioContext) {

        const AudioContext =
          window.AudioContext ||
          window.webkitAudioContext;

        if (!AudioContext) {
          return;
        }

        audioContext =
          new AudioContext();

      }


      if (audioContext.state === "suspended") {
        audioContext.resume();
      }


      const oscillator =
        audioContext.createOscillator();

      const gain =
        audioContext.createGain();


      oscillator.type = "sawtooth";


      const now =
        audioContext.currentTime;


      oscillator.frequency.setValueAtTime(
        420,
        now
      );


      oscillator.frequency.exponentialRampToValueAtTime(
        180,
        now + 0.09
      );


      oscillator.frequency.exponentialRampToValueAtTime(
        260,
        now + 0.2
      );


      gain.gain.setValueAtTime(
        0.0001,
        now
      );


      gain.gain.exponentialRampToValueAtTime(
        0.22,
        now + 0.025
      );


      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + 0.23
      );


      oscillator.connect(gain);

      gain.connect(
        audioContext.destination
      );


      oscillator.start(now);

      oscillator.stop(now + 0.24);

    } catch (error) {

      console.log(
        "quack sound unavailable"
      );

    }

  }


  /* =========================
     REWARD LOADING
  ========================= */

  const rewardStatuses = [
    "connecting to excuse database...",
    "verifying questionable information...",
    "searching excuse archives...",
    "rejecting professional solutions...",
    "removing all accountability...",
    "this is getting concerning...",
    "access granted."
  ];


  function showRewardLoading() {

    stopTimers();

    rewardOverlay.classList.add("show");

    rewardLoadingProgress.style.width =
      "0%";

    rewardLoadingPercent.textContent =
      "0";

    databaseUnlocked.classList.remove("show");

    rewardLoadingStatus.textContent =
      rewardStatuses[0];


    let progress = 0;


    rewardTimer = setInterval(() => {

      progress +=
        Math.floor(Math.random() * 6) + 2;


      if (progress >= 100) {
        progress = 100;
      }


      rewardLoadingProgress.style.width =
        `${progress}%`;

      rewardLoadingPercent.textContent =
        progress;


      const statusIndex =
        Math.min(
          Math.floor(progress / 15),
          rewardStatuses.length - 1
        );


      rewardLoadingStatus.textContent =
        rewardStatuses[statusIndex];


      if (progress >= 100) {

        clearInterval(rewardTimer);

        rewardTimer = null;


        databaseUnlocked.classList.add("show");


        setTimeout(() => {

          rewardOverlay.classList.remove("show");

          generateExcuse();

          showPage("reward");

        }, 1000);

      }

    }, 100);

  }


  /* =========================
     GEN-Z EXCUSES
  ========================= */

  const excuses = {

    school: [
      "bro i was gonna do it but my brain literally put the assignment on do not disturb 😭",
      "i had every intention of doing it and then somehow it became tomorrow's problem 💀",
      "not to be dramatic but the academic pressure was giving final boss and i simply logged off.",
      "i opened the assignment, stared at it, and we mutually decided this wasn't happening.",
      "my motivation left the group chat and unfortunately i cannot recover it.",
      "i was locked in until i remembered i could also just... not be.",
      "the assignment and i are currently taking some space. it's complicated.",
      "i had a vision. the vision did not include actually submitting anything.",
      "my brain said 'we'll do it later' and later has apparently been cancelled.",
      "i was mentally prepared to do it. physically? absolutely not."
    ],


    late: [
      "my bad gang, time was moving suspiciously fast today 😭",
      "i was on the way and then somehow the universe hit me with a loading screen.",
      "bro i swear i left on time. the clocks were just being weird.",
      "i was gonna be early but then life said 'plot twist 💀'.",
      "respectfully, the schedule and i were not communicating.",
      "i lost track of time for like five minutes and apparently those five minutes were the entire morning.",
      "i was moving at maximum speed. unfortunately maximum speed was still not enough.",
      "the ETA was optimistic. that's on me and also the laws of time.",
      "i genuinely thought i had more time. rookie mistake.",
      "my arrival time was more of a suggestion tbh."
    ],


    message: [
      "i saw your message, processed it emotionally, and then forgot to respond 😭",
      "my bad, i mentally replied and apparently forgot the actual reply part.",
      "i opened the message and my brain said 'we'll handle this later' 💀",
      "i wasn't ignoring you, i was just buffering.",
      "i had a response ready and then it evaporated like it owed me money.",
      "the message was received. the reply unfortunately did not spawn.",
      "my notifications were fighting for their lives and yours got caught in the crossfire.",
      "i saw it and thought 'lemme reply in a sec'... famous last words.",
      "my brain drafted the reply. unfortunately it never hit send.",
      "not me accidentally putting your message in the mental drafts folder 😭"
    ],


    meeting: [
      "i was ready for the meeting until my brain scheduled a completely different meeting.",
      "i genuinely forgot. like fully. zero thoughts. just vibes.",
      "the meeting reminder appeared and my soul immediately left the premises.",
      "i had it on my calendar and somehow still got jumpscared by it.",
      "i was mentally unavailable in a way that was honestly impressive.",
      "my brain saw 'meeting' and decided to uninstall the concept of time.",
      "i was gonna join, then everything started happening at once. very cinematic.",
      "the meeting and i simply missed each other's timelines.",
      "i thought the meeting was later. the calendar disagrees and unfortunately has receipts.",
      "my schedule was fighting for its life today 😭"
    ],


    sleep: [
      "i was gonna get up but my bed had an insane argument with gravity and gravity won.",
      "my alarm went off. i acknowledged it spiritually.",
      "i woke up, looked at the time, and immediately entered denial mode.",
      "my sleep schedule is currently under investigation.",
      "i accidentally slept like it was my full-time job.",
      "my alarm and i are no longer on speaking terms.",
      "i said 'five more minutes' and apparently entered another dimension.",
      "my body clock has decided to freestyle.",
      "i was unconscious with incredible commitment.",
      "sleep got a little too comfortable and i lacked the strength to intervene 💀"
    ],


    generic: [
      "honestly bro, a lot happened and somehow none of it was my fault.",
      "i would explain but the lore is genuinely too complicated 😭",
      "something came up. then another thing came up. then i stopped keeping track.",
      "long story short: absolutely nobody could've predicted this.",
      "i had a plan. the plan had other plans.",
      "things got a little silly and unfortunately i was present.",
      "the situation escalated beyond my current skill level.",
      "i was dealing with some extremely important nonsense.",
      "there is context, but unfortunately the context makes it worse.",
      "i'm not saying the universe was against me, but the evidence is mounting.",
      "it was giving unexpected circumstances.",
      "i fear the timeline simply did not cooperate.",
      "i would like to formally blame the vibes.",
      "everything was fine until it very suddenly wasn't 💀",
      "i genuinely thought i'd get away with it. character development i guess.",
      "the situation was unfortunately situation-ing.",
      "i was doing my best. my best was apparently insufficient.",
      "respectfully, that was not on today's bingo card.",
      "the plot thickened and i was not emotionally prepared.",
      "i regret to inform you that things got goofy."
    ]

  };


  /* =========================
     EXCUSE GENERATION
  ========================= */

  function generateExcuse() {

    const category =
      detectCategory(currentSituation);


    const categoryExcuses =
      excuses[category] ||
      excuses.generic;


    const randomIndex =
      Math.floor(
        Math.random() *
        categoryExcuses.length
      );


    finalExcuse.textContent =
      categoryExcuses[randomIndex];

  }


  function detectCategory(text) {

    const lower =
      text.toLowerCase();


    if (
      lower.includes("school") ||
      lower.includes("homework") ||
      lower.includes("assignment") ||
      lower.includes("class") ||
      lower.includes("teacher") ||
      lower.includes("exam") ||
      lower.includes("test") ||
      lower.includes("project")
    ) {
      return "school";
    }


    if (
      lower.includes("late") ||
      lower.includes("arrive") ||
      lower.includes("arrival") ||
      lower.includes("traffic") ||
      lower.includes("bus") ||
      lower.includes("train") ||
      lower.includes("missed")
    ) {
      return "late";
    }


    if (
      lower.includes("text") ||
      lower.includes("message") ||
      lower.includes("reply") ||
      lower.includes("respond") ||
      lower.includes("dm") ||
      lower.includes("chat") ||
      lower.includes("notification")
    ) {
      return "message";
    }


    if (
      lower.includes("meeting") ||
      lower.includes("call") ||
      lower.includes("zoom") ||
      lower.includes("meet")
    ) {
      return "meeting";
    }


    if (
      lower.includes("sleep") ||
      lower.includes("slept") ||
      lower.includes("wake") ||
      lower.includes("alarm") ||
      lower.includes("bed")
    ) {
      return "sleep";
    }


    return "generic";

  }


  /* =========================
     ANOTHER ONE
     DAILY LIMIT
  ========================= */

  restartButton.addEventListener("click", () => {

    limitOverlay.classList.add("show");

  });


  limitCloseButton.addEventListener("click", () => {

    limitOverlay.classList.remove("show");

    stopTimers();

    resetEverything();

    showPage("home");

  });


  /* =========================
     RESET
  ========================= */

  function resetEverything() {

    currentSituation = "";

    situation.value = "";

    charCount.textContent =
      "0 / 500";

    situationError.classList.remove("show");

    resetDuckGame();

    finalExcuse.textContent =
      "your excuse is loading...";

    analysisProgress.style.width =
      "0%";

    analysisPercent.textContent =
      "0";

    analysisResult.classList.remove("show");

    rewardOverlay.classList.remove("show");

    databaseUnlocked.classList.remove("show");

  }


  /* =========================
     STOP TIMERS
  ========================= */

  function stopTimers() {

    if (analysisTimer) {

      clearInterval(analysisTimer);

      analysisTimer = null;

    }


    if (rewardTimer) {

      clearInterval(rewardTimer);

      rewardTimer = null;

    }

  }


  /* =========================
     RESIZE
  ========================= */

  window.addEventListener("resize", () => {

    if (pages.task.classList.contains("active")) {

      moveDuck();

    }

  });


  /* =========================
     INITIAL STATE
  ========================= */

  showPage("home");

});