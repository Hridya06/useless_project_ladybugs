document.addEventListener("DOMContentLoaded", function () {

  // ==========================================
  // GET HTML ELEMENTS
  // ==========================================

  const homePage = document.getElementById("homePage");
  const situationPage = document.getElementById("situationPage");
  const analysisPage = document.getElementById("analysisPage");
  const taskPage = document.getElementById("taskPage");
  const rewardPage = document.getElementById("rewardPage");

  const stepText = document.getElementById("stepText");

  const letsLieButton = document.getElementById("letsLieButton");
  const continueButton = document.getElementById("continueButton");

  const situationInput = document.getElementById("situation");
  const charCount = document.getElementById("charCount");

  const analysisProgress = document.getElementById("analysisProgress");
  const analysisPercent = document.getElementById("analysisPercent");
  const analysisTitle = document.getElementById("analysisTitle");
  const analysisResult = document.getElementById("analysisResult");

  const duck = document.getElementById("duck");
  const gameArea = document.getElementById("gameArea");
  const gameProgress = document.getElementById("gameProgress");
  const clickCount = document.getElementById("clickCount");
  const taskMessage = document.getElementById("taskMessage");

  const finalExcuse = document.getElementById("finalExcuse");
  const copyButton = document.getElementById("copyButton");
  const restartButton = document.getElementById("restartButton");
  const copyMessage = document.getElementById("copyMessage");


  // ==========================================
  // PAGE TRANSITION
  // ==========================================

  function showPage(page) {

    const pages = [
      homePage,
      situationPage,
      analysisPage,
      taskPage,
      rewardPage
    ];

    pages.forEach(function (item) {
      if (item) {
        item.classList.remove("active");
      }
    });

    if (page) {
      page.classList.add("active");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  // ==========================================
  // HOME → SITUATION
  // ==========================================

  if (letsLieButton) {

    letsLieButton.addEventListener("click", function () {

      showPage(situationPage);

      if (stepText) {
        stepText.textContent = "situation";
      }

      if (situationInput) {
        setTimeout(function () {
          situationInput.focus();
        }, 400);
      }

    });

  }


  // ==========================================
  // CHARACTER COUNTER
  // ==========================================

  if (situationInput && charCount) {

    situationInput.addEventListener("input", function () {
      charCount.textContent = situationInput.value.length;
    });

  }


  // ==========================================
  // SITUATION → ANALYSIS
  // ==========================================

  if (continueButton) {

    continueButton.addEventListener("click", function () {

      const situation = situationInput.value.trim();

      if (situation.length === 0) {

        situationInput.focus();

        situationInput.placeholder =
          "bro you gotta tell us SOMETHING 😭";

        return;
      }

      showPage(analysisPage);

      if (stepText) {
        stepText.textContent = "analyzing...";
      }

      runAnalysis();

    });

  }


  // ==========================================
  // FAKE ANALYSIS
  // ==========================================

  function resetAnalysis() {

    if (analysisProgress) {
      analysisProgress.style.width = "0%";
    }

    if (analysisPercent) {
      analysisPercent.textContent = "0%";
    }

    if (analysisTitle) {
      analysisTitle.textContent =
        "analyzing your problem...";
    }

    if (analysisResult) {
      analysisResult.innerHTML =
        'STATUS: <span>PROCESSING</span>';
    }

    for (let i = 1; i <= 4; i++) {

      const row = document.getElementById(
        "statusRow" + i
      );

      const dot = document.getElementById(
        "statusDot" + i
      );

      const status = document.getElementById(
        "status" + i
      );

      if (row) {
        row.classList.remove("done");
      }

      if (dot) {
        dot.textContent = "○";
      }

      if (status) {

        const originalStatuses = [
          "detecting problem...",
          "measuring panic levels...",
          "overthinking...",
          "finding unnecessary solution..."
        ];

        status.textContent =
          originalStatuses[i - 1];

      }

    }

  }


  function runAnalysis() {

    resetAnalysis();

    let progress = 0;

    const statusSteps = [
      {
        percent: 20,
        row: 1,
        title: "problem detected.",
        message: "problem detected."
      },
      {
        percent: 40,
        row: 2,
        title: "this is concerning...",
        message: "panic levels measured."
      },
      {
        percent: 60,
        row: 3,
        title: "we're overthinking this...",
        message: "overthinking activated."
      },
      {
        percent: 80,
        row: 4,
        title: "questioning everything...",
        message: "unnecessary solution located."
      },
      {
        percent: 100,
        row: 4,
        title: "solution found.",
        message: "solution found."
      }
    ];

    let currentStep = 0;

    const analysisTimer = setInterval(function () {

      progress += 2;

      if (analysisProgress) {
        analysisProgress.style.width =
          progress + "%";
      }

      if (analysisPercent) {
        analysisPercent.textContent =
          progress + "%";
      }


      while (
        currentStep < statusSteps.length &&
        progress >= statusSteps[currentStep].percent
      ) {

        const step = statusSteps[currentStep];

        const row = document.getElementById(
          "statusRow" + step.row
        );

        const dot = document.getElementById(
          "statusDot" + step.row
        );

        const status = document.getElementById(
          "status" + step.row
        );

        if (row) {
          row.classList.add("done");
        }

        if (dot) {
          dot.textContent = "✓";
        }

        if (status) {
          status.textContent = step.message;
        }

        if (analysisTitle) {
          analysisTitle.textContent = step.title;
        }

        currentStep++;

      }


      if (progress >= 100) {

        clearInterval(analysisTimer);

        setTimeout(function () {

          if (analysisTitle) {
            analysisTitle.textContent =
              "we found a solution.";
          }

          if (analysisResult) {
            analysisResult.innerHTML =
              'STATUS: <span>PROBABLY FINE</span>';
          }

        }, 200);

        setTimeout(function () {

          showPage(taskPage);

          if (stepText) {
            stepText.textContent =
              "important task";
          }

          resetGame();

        }, 1200);

      }

    }, 55);

  }


  // ==========================================
  // DUCK GAME
  // ==========================================

  let duckClicks = 0;

  const taskMessages = [
    "catch it. trust us. this is extremely important.",
    "why are you struggling to catch a duck 😭",
    "the duck has seen things.",
    "this is somehow your most important task today.",
    "bro it's literally right there.",
    "the duck is winning.",
    "we're not judging.",
    "okay you're getting closer...",
    "THE DUCK FEARS YOU.",
    "one more. you've got this.",
    "absolute cinema. task complete."
  ];


  function resetGame() {

    duckClicks = 0;

    if (clickCount) {
      clickCount.textContent = "0";
    }

    if (gameProgress) {
      gameProgress.style.width = "0%";
    }

    if (taskMessage) {
      taskMessage.textContent =
        taskMessages[0];
    }

    if (duck) {
      duck.style.left = "50%";
      duck.style.top = "50%";
    }

  }


  function moveDuck() {

    if (!duck || !gameArea) {
      return;
    }

    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;

    const duckWidth = duck.offsetWidth;
    const duckHeight = duck.offsetHeight;

    const maxX = Math.max(
      10,
      areaWidth - duckWidth - 10
    );

    const maxY = Math.max(
      10,
      areaHeight - duckHeight - 10
    );

    const randomX =
      Math.floor(Math.random() * maxX);

    const randomY =
      Math.floor(Math.random() * maxY);

    duck.style.left =
      randomX + duckWidth / 2 + "px";

    duck.style.top =
      randomY + duckHeight / 2 + "px";

  }


  if (duck) {

    duck.addEventListener("click", function () {

      duckClicks++;

      if (clickCount) {
        clickCount.textContent =
          duckClicks;
      }

      if (gameProgress) {
        gameProgress.style.width =
          (duckClicks / 10 * 100) + "%";
      }


      const messageIndex =
        Math.min(
          duckClicks,
          taskMessages.length - 1
        );

      if (taskMessage) {
        taskMessage.textContent =
          taskMessages[messageIndex];
      }


      if (duckClicks >= 10) {

        duck.disabled = true;

        if (duck) {
          duck.style.transform =
            "translate(-50%, -50%) scale(1.3)";
        }

        if (taskMessage) {
          taskMessage.textContent =
            "absolute cinema. task complete. 🎉";
        }

        setTimeout(function () {

          showReward();

        }, 900);

        return;
      }

      moveDuck();

    });

  }


  // ==========================================
  // TASK → REWARD
  // ==========================================

  function showReward() {

    showPage(rewardPage);

    if (stepText) {
      stepText.textContent = "done";
    }

    generateExcuse();

  }


  // ==========================================
  // EXCUSE GENERATOR
  // ==========================================

  function generateExcuse() {

    const situation =
      situationInput
        ? situationInput.value.trim().toLowerCase()
        : "";

    let excuses = [];


    // ASSIGNMENT / HOMEWORK

    if (
      situation.includes("assignment") ||
      situation.includes("homework") ||
      situation.includes("project") ||
      situation.includes("submit") ||
      situation.includes("deadline")
    ) {

      excuses = [

        "bro i literally had it done and then my laptop decided to become a decorative object 😭",

        "i was about to submit it but my brain entered airplane mode.",

        "the assignment was ready. unfortunately, my motivation was not.",

        "i had every intention of submitting it and then time started moving suspiciously fast.",

        "my file existed spiritually but apparently not digitally.",

        "i opened the assignment to submit it and somehow ended up reorganizing my entire desktop.",

        "bro the deadline and i simply had different plans."
      ];

    }


    // LATE / SCHOOL / CLASS

    else if (
      situation.includes("late") ||
      situation.includes("school") ||
      situation.includes("class") ||
      situation.includes("college") ||
      situation.includes("meeting") ||
      situation.includes("bus")
    ) {

      excuses = [

        "bro the universe delayed me. i have no further questions at this time.",

        "i was ready to leave but the laws of physics disagreed.",

        "my transportation situation became a side quest.",

        "i was on time mentally. unfortunately my body did not cooperate.",

        "bro i left early and somehow arrived late. mathematically impossible.",

        "there was a completely unnecessary sequence of events between me and being on time.",

        "my morning had a software bug."
      ];

    }


    // MESSAGE / PHONE / REPLY

    else if (
      situation.includes("reply") ||
      situation.includes("message") ||
      situation.includes("text") ||
      situation.includes("call") ||
      situation.includes("phone")
    ) {

      excuses = [

        "bro i saw the message and then my brain immediately archived the entire conversation.",

        "i was going to reply and then the notification disappeared into the void.",

        "my phone and i are currently experiencing communication issues.",

        "i read it, thought 'i'll reply in a second,' and then apparently three business days passed.",

        "my brain opened the message but forgot to open the reply function.",

        "i had a response prepared. unfortunately it remained in draft mode inside my head.",

        "bro the notification got spiritually lost."
      ];

    }


    // FORGOT / LOST

    else if (
      situation.includes("forgot") ||
      situation.includes("remember") ||
      situation.includes("lost") ||
      situation.includes("missing")
    ) {

      excuses = [

        "bro i remembered that i forgot it approximately five minutes after it became relevant.",

        "my memory decided to take a completely unnecessary vacation.",

        "i knew i had to remember something. unfortunately that was the thing i forgot.",

        "my brain saved the information somewhere extremely inconvenient.",

        "i remembered it spiritually. does that count?",

        "the information was in my brain yesterday. the brain has since relocated it.",

        "bro my memory is currently running on the free trial."
      ];

    }


    // RANDOM CHAOS

    else {

      excuses = [

        "bro honestly there was a lot happening and approximately none of it was useful.",

        "i had a plan. the plan had a plan. neither plan survived.",

        "my brain encountered an unexpected loading screen.",

        "there was a completely unnecessary chain of events and somehow this happened.",

        "i was going to handle it but then reality became mildly inconvenient.",

        "bro i genuinely thought future me would deal with it. future me has filed a complaint.",

        "the situation escalated from normal to unnecessarily complicated.",

        "i blame the vibes.",
        
        "long story short: things happened, decisions were made, and here we are.",

        "my brain said 'we'll figure it out later' and later has arrived."
      ];

    }


    const randomIndex =
      Math.floor(
        Math.random() * excuses.length
      );

    const selectedExcuse =
      excuses[randomIndex];


    if (finalExcuse) {

      finalExcuse.style.opacity = "0";
      finalExcuse.style.transform =
        "translateY(10px)";

      setTimeout(function () {

        finalExcuse.textContent =
          selectedExcuse;

        finalExcuse.style.transition =
          "opacity 0.5s ease, transform 0.5s ease";

        finalExcuse.style.opacity = "1";

        finalExcuse.style.transform =
          "translateY(0)";

      }, 250);

    }

  }


  // ==========================================
  // COPY EXCUSE
  // ==========================================

  if (copyButton) {

    copyButton.addEventListener("click", function () {

      if (!finalExcuse) {
        return;
      }

      const text =
        finalExcuse.textContent.trim();


      if (!text) {
        return;
      }


      if (
        navigator.clipboard &&
        window.isSecureContext
      ) {

        navigator.clipboard
          .writeText(text)
          .then(function () {

            showCopyMessage(
              "copied. go forth and make questionable decisions. 😭"
            );

          })
          .catch(function () {

            fallbackCopy(text);

          });

      } else {

        fallbackCopy(text);

      }

    });

  }


  function fallbackCopy(text) {

    const temporaryTextarea =
      document.createElement("textarea");

    temporaryTextarea.value = text;

    temporaryTextarea.style.position =
      "fixed";

    temporaryTextarea.style.left =
      "-9999px";

    document.body.appendChild(
      temporaryTextarea
    );

    temporaryTextarea.select();

    try {

      document.execCommand("copy");

      showCopyMessage(
        "copied. probably. 💀"
      );

    } catch (error) {

      showCopyMessage(
        "copy didn't work — select the excuse manually 😭"
      );

    }

    document.body.removeChild(
      temporaryTextarea
    );

  }


  function showCopyMessage(message) {

    if (!copyMessage) {
      return;
    }

    copyMessage.textContent =
      message;

    setTimeout(function () {

      copyMessage.textContent = "";

    }, 3000);

  }


  // ==========================================
  // RESTART
  // ==========================================

  if (restartButton) {

    restartButton.addEventListener("click", function () {

      if (situationInput) {
        situationInput.value = "";
      }

      if (charCount) {
        charCount.textContent = "0";
      }

      if (copyMessage) {
        copyMessage.textContent = "";
      }

      resetGame();

      showPage(homePage);

      if (stepText) {
        stepText.textContent = "home";
      }

    });

  }


  // ==========================================
  // INITIAL STATE
  // ==========================================

  showPage(homePage);

  if (stepText) {
    stepText.textContent = "home";
  }

  console.log("yBecozz... loaded successfully ✅");

});
