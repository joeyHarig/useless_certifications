/*
This app stores quiz data 
-updates the dom with that data
-checks the score based on correct answers
-displays downloadable pdf docs according to score
*/



// Quiz Constructor
function CertificationQuiz(title, description, pdf, questions) {
    this.title = title;
    this.description = description;
    this.questions = questions;
    this.pdf = pdf;
    
}

// Question Constructor
function Question(question_des, options, correctAnswer) {
    this.question_des = question_des;
    this.options  = options;
    this.correctAnswer = correctAnswer;
}

const certificationData = {

    sports: new CertificationQuiz(
        "Certification in Sports", // Title
        "Have you ever wanted to prove to your friends that you are good at sports? What better way than with a certification in sports?", // description
        "assets//certifications//sports_certification.pdf",
        [   new Question( // Question 1 
                "Which of the following is not a sport?",
                ["Baseball",
                "Beer Pong",
                "Chess Boxing",
                "Soccer"],
                "b"), 
            new Question( // Question 2
                "How players do you need to have a hockey team?",
                ["5",
                "6",
                "This is a bad question",
                "Tennis?"],
                "b"),
            new Question( // Question 3 
                "How high off the ground is a basketball hoop?",
                ["10ft",
                "Very tall",
                "2.5 meters",
                "Basketballs go in nets, duh!"],
                "a"),
            new Question( // Question 4 
                "What is the highest possible break in snooker?",
                ["Nice try, but a snooker is a cookie.",
                "3",
                "10",
                "155"],
                "d"),
            new Question( // Question 5 
                "How many squares are there in monopoly?",
                ["Monopoly is not a sport.",
                "40",
                "44",
                "36"],
                "b"),
            new Question( // Question 6 
                "Who is considered the Godfather of boxing?",
                ["Rocky Balboa",
                "Muhammad Ali",
                "Manny Pacquiao",
                "Boxing is a bastard"],
                "b"),
            new Question( // Question 7 
                "What is a squash ball made out of?",
                ["Yarn wrapped in leather",
                "Meat",
                "Rubber",
                "Foam"],
                "c"),
            new Question( // Question 8 
                "Which MLB team has never been to the world series?",
                ["Reds",
                "Brewers",
                "Rays",
                "Mariners"],
                "d"),
            new Question( // Question 9 
                'Which of the following is not considered another name for Four Square?',
                ["Champ",
                "Square Ball",
                "King's Corner",
                "Quarter Ball"],
                "d"),
            new Question( // Question 10 
                'What does the term "Stale Fish" refer to?',
                ["Racquetball",
                "Snowboarding",
                "Football",
                "Diving"],
                "b")   
        ]
    ),

    wiseGuy: new CertificationQuiz(
        "Wiseguy Certification", // Title
        "Are you frequently being accused of sounding like a smartass but don’t have the paperwork to back it up? No problem, simply complete the standardized assessment below and get above a 70% to qualify.", //
        "assets//certifications//wiseguy_certification.pdf",
        [   new Question( // Question 1 
                "What’s up?", // Questions itslef
                ["Nothing much...", //  option a
                "The sky.", // option b
                "Hey,there.", // option c
                "My wife and I just got divorced… I’m not sure I can do this anymore."], // option d
                "b"), // answer
            new Question( // Question 2
                "Does it smell like updog in here?",
                ["What is updog?",
                "What’s going on, dog?",
                "She took the kids and the house.."],
                "b"),
        new Question( // Question 3
                'Click “Yes if you wanna be a wiseguy.',
                ["Yes.",
                "I’m not falling for that.",
                "I got fired from work because she scheduled the court dates on weekdays."],
                "b"),
        new Question( // Question 4
                "If you were a guy, and had to choose one adjective to describe you, what would it be?",
                ["Bored",
                "Wise",
                "Even the dog stopped loving me."],
                "a"),
        new Question( // Question 5
                "Do you think dark humor is funny?",
                ["No.",
                "I caught her sleeping with my best friend."],
                "b"),
        new Question( // Question 6
                "What is President Nixon’s last name?",
                ["Howard",
                "Nixon",
                "Craig, if you’re reading this, I know what you did..."],
                "a"),
        new Question( // Question 7
                "True or False? In the winter months, polar bears can grow up to 3x their own size.",
                ["That doesn’t even make sense...",
                "True.",
                "Friends don’t do that to each other, man. We went to college together..."],
                "a"),
        new Question( // Question 8
                "What is the meaning of life?",
                ["42",
                "Although no single satisfactory answer exists, by synthesizing the collective works of artists, musicians, directors, and authors, over our recent history, love, is what seems to give our lives the most meaning.",
                "We shared a joint account. He convinced her to take everything."],
                "a"),
        new Question( // Question 9
                "If there was a God, and you got the chance to meet him, what would you say?",
                ["What’s up Doc?",
                "You couldn’t possibly know.",
                "Depends on what he’s wearing.",
                "She said she never loved me. It was all a lie."],
                "a"),
        new Question( // Question 10
                "When your life is all said and done, would you rather have money, or a satisfied mind?",
                ["I’d rather be spiritually and emotionally content when I pass on.",
                "Nothin’ is better than that sweet, sweet, cheddar.",
                "Marriage will take both."],
                "c"),
        ]
    ),

    alpha: new CertificationQuiz(
        "Certified Alpha", // Title
        "Do any of your shirts have sleeves? Has your nicotine addiction failed to develop into a health threatening condition? Can you form a sentence without saying, bruh or like? If you answered yes to any of these click away now. We’re looking for real men here",
        "assets//certifications//alpha_certification.pdf", // description
        [   new Question( // Question 1 
                "What did you eat for breakfast this morning?", // Questions itslef
                ["Eggs", //  option a
                "Low-fat yogurt", // option b
                "Diced apricots", // option c
                "Miller-lite and protein powder"], // option d
                "d"), // answer
            new Question( // Question 2
                "You’re at a party and someone is trying to walk past you. How do you proceed?",
                ["Stand aside",
                "Follow them to a less crowded part of the house",
                "Move over just enough so they spill their drink",
                "Say sorry"],
                "c"),
        new Question( // Question 3
                "Someone calls you a party-pooper, how do you respond?",
                ["Try and fight them",
                "Politely ask them to leave",
                "Ignore them",
                "Laugh it off" ],
                "a"),
        new Question( // Question 4
                "How do you keep good grades?",
                ["Study",
                "Reference outside material",
                "Manage your time effectively",
                "Adderall"],
                "d"),
        new Question( // Question 5
                "You see a group of girls approaching you, what do you do?",
                ["Flex",
                "Yell for no reason",
                "Turn your music up",
                "All of the above"],
                "d"),
        new Question( // Question 6
                "What does your dad do?",
                ["Lawyer",
                "Investment banker",
                "Something with real-estate",
                "All of the above"],
                "d"),
        new Question( // Question 7
                "What’s the most important food group?",
                ["Grains",
                "Fruits",
                "Protein-shake",
                "Vegetables"],
                "c"),
        new Question( // Question 8
                "You wanna get some guy’s attention and notice he’s smaller than you. What do you say?",
                ["Excuse me",
                "Hey,man",
                "Listen here, bud",
                "Aye yo"],
                "c"),
        new Question( // Question 9
                "Someone you aren’t sexually attracted to wants to attend your party. What do you say?",
                ["Come on in",
                "Like, who do you know here?",
                "Sorry, we’re full",
                "Sure, here’s a beer"],
                "b"),
        new Question( // Question 10
                "The cops come to break up your party and discover underage drinking. What do you do?",
                ["Thank him for the warning and offer him a beer",
                "Plead ignorance",
                "Run",
                "Take responsibility"],
                "a"),
        ]
    ),

    
    calculator: new CertificationQuiz(
        "Become a Certified Calculator", // Title
        "Have you always been very good at math? Do you never use a calculator even when everyone else says you should? Well, now you can become a certified calculator. That'll show them!", // description
        "assets//certifications//calculator_certification.pdf",
        [   new Question( // Question 1 
                "What is 2 + 0 ?", // Questions itslef
                ["0", //  option a
                "My batteries are low", // option b
                "2", // option c
                "3"], // option d
                "c"), // answer
            new Question( // Question 2
                "What does math stand for?",
                ["Nothing",
                "Measuring Accurately The World",
                "Mathematics",
                "My a Thinker Hurts"],
                "c"),
        new Question( // Question 3
                "what is the square root of 48",
                ["7.02",
                "6.92",
                "Yes",
                "7.56"],
                "b"),
        new Question( // Question 4
                "Does math make you upset?",
                ["Yes",
                "What is math?",
                "I'm always upset",
                "No because I am a robot"],
                "d"),
        new Question( // Question 6
                "How long did it take you to answer the last question?",
                ["0.001 milliseconds",
                "About a minuet",
                "I don't remember the last question because I'm not a calculator"],
                "a"),
        new Question( // Question 7
                "What is F + U + N ?",
                ["FUN",
                "Error",
                "3"],
                "b"),
        new Question( // Question 8
                "Which of the following is a prime number?",
                ["949",
                "419",
                "637",
                "I quit."],
                "b"),
        new Question( // Question 9
                "Did you use a calculator during this quiz?",
                ["I conveniently can't remember",
                "Yes",
                "No"],
                "c"),
        ]
    ),
}
var domStrings = { //get elements by id

    // Title elements
    titleBox: '#title-box',
    title: '#quiz-title',
    description: '#quiz-description',
    btnStart: "#button-start",

    // Question Elements
    questionBox: '#question-box',
    questionTitle: '#question-title',
    questionDescription: '#question-description',
    btnNext: '#button-next',

    opsBox: '#options-box',
    opBox: '.option-box',
    opText: '.option-text',
    opA: '#option-a',
    opB: '#option-b',
    opC: '#option-c',
    opD: '#option-d',

    // Result Elements
    resultsBox: '#results-box',
    resultsTitle: '#results-title',
    resultsDescription: '#results-description',
    resultsDownload: '#results-download',
    dumbassDownload: '#dumbass-download',

    // Parent Quiz Screen Elements
    quizScreen: '#certification-quiz-screen',
    close: "#close",

    // Certification Identifiers
    sports: '#sports',
    calculator: '#calculator',
    wiseGuy: '#wise-guy',
    alpha: '#alpha',

    menu: '#menu',
    logo: '.logo',
    navScreenOpen: 'nav-screen-open',
    navItemOpen: 'nav-item-open',
    navItem: 'nav-item',
    menuClose: '#menu-close',
    logoNavOpen: 'logo-nav-open',
    nav: '#navigation'
} ;


// !!!!!!!!!!!!!!!!!!!!!!!! UI CONTROLLER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var UIController = (function() {

    var toggleVisibility = function(element) {
        if ( element.style.visibility === 'visible' ) {
            element.style.visibility = 'hidden';
        } else if ( element.style.visibility === 'hidden' ){
            element.style.visibility = 'visible';
        } else {
            element.style.visibility = 'hidden';
        }
    };

    return {

        // Hide the Quiz
        hideQuiz: function() {
            document.querySelector(domStrings.quizScreen).style.visibility = 'hidden';
            document.querySelector(domStrings.questionBox).style.visibility = 'hidden';
            document.querySelector(domStrings.titleBox).style.visibility = 'hidden';
            document.querySelector(domStrings.resultsBox).style.visibility = 'hidden';
            document.querySelector(domStrings.resultsDownload).style.visibility = 'hidden';
            document.querySelector(domStrings.dumbassDownload).style.visibility = 'hidden';
        },

        hideQuestions: function() {
            var box = document.querySelectorAll(domStrings.opBox);
            for (var i = 0; i < 4; i++) {
                box[i].style.visibility = 'hidden';
            }
        },

        // Open the quiz
        openQuiz: function(currentQuiz) {

            // Show the title box
            document.querySelector(domStrings.quizScreen).style.visibility = 'visible';
            document.querySelector(domStrings.titleBox).style.visibility = 'visible';
            // Update title box
            document.querySelector(domStrings.title).innerHTML = currentQuiz.title;
            document.querySelector(domStrings.description).innerHTML = currentQuiz.description;
        },

        startQuiz: function() {
            // Hide title
            document.querySelector(domStrings.titleBox).style.visibility = 'hidden'; 
            // Show First Question
            document.querySelector(domStrings.questionBox).style.visibility = 'visible'; 
        },

        showResults: function(currentQuiz, pass) {
            var title, description;
            title = document.querySelector(domStrings.resultsTitle);
            description = document.querySelector(domStrings.resultsDescription);

            // Fill results
            // If passed quiz
            if (pass === 'pass') { 
                // Title
                title.innerHTML = 'Congratulations!';
                // Description
                description.innerHTML = 'You successfully passed the ' + currentQuiz.title + ' quiz. You may now view and download your "official" certificate.';
                // Download btn
                document.querySelector(domStrings.resultsDownload).style.visibility = 'visible';
            // if failed quiz by and got .3 or less
            } else if (pass === 'veryFail') { 
                title.innerHTML = 'Wow...';
                description.innerHTML = 'Not only did you fail, you failed hard. We would like to award you with a official Dumb Ass Certification. You can view and download it below.';
                document.querySelector(domStrings.dumbassDownload).style.visibility = 'visible';

            // if failed quiz but greater than .3
            } else { 
                title.innerHTML = 'Oh Well!';
                description.innerHTML = "You didn't pass this time, but feel free to try again if you'd still like to earn your " + currentQuiz.title + '.';
            }

            // Hide questions
            document.querySelector(domStrings.questionBox).style.visibility = 'hidden'; 

            //Show Results
            document.querySelector(domStrings.resultsBox).style.visibility = 'visible'; 
        },

        showQuestion: function(currentQuiz, curQue, options) {
            // Show question title
            document.querySelector(domStrings.questionTitle).innerHTML = 'Question ' + (curQue + 1) + ' of ' + (currentQuiz.questions.length);
            // Show question description
            document.querySelector(domStrings.questionDescription).innerHTML = currentQuiz.questions[curQue].question_des;
            
            var box =  document.querySelectorAll(domStrings.opBox);
            var text =  document.querySelectorAll(domStrings.opText);
            // Update options
            for (var i = 0; i < options.length; i++) {
                //for each option in the question, show the option and update it
                box[i].style.visibility = 'visible';
                text[i].innerHTML = options[i];
            }
        },

        // Deselect all options
        deselectAll: function() {
            var box = document.querySelectorAll(domStrings.opBox);
            for (var i = 0; i < 4; i++) {
                box[i].classList.remove('selected');
            }
        },

        // When an option is selected
        selectOption: function(opt) {
            document.querySelector(opt).classList.add('selected');
        },

        // Update Next button to say "Submit"
        updateButton: function() {
            // Toggle inner html of btn
            if (document.querySelector(domStrings.btnNext).innerHTML === 'Submit') {
                document.querySelector(domStrings.btnNext).innerHTML = 'Next';
            } else {
                document.querySelector(domStrings.btnNext).innerHTML = 'Submit';
            }
        },

        // Mobile menu open
        openMenu: function() {
            var x, i ;
            x = document.getElementsByClassName('nav-item');

            for (i = 0; i < x.length; i++) {
                // Check the visibility and change accordingly 
               x[i].style.visibility ='visible';
            }

            // Add the drop down menu class
            document.querySelector(domStrings.nav).classList.toggle(domStrings.navScreenOpen);
            // Change menu btn
            toggleVisibility(document.querySelector(domStrings.menu));
            // Change logo placement
            document.querySelector(domStrings.logo).classList.toggle(domStrings.logoNavOpen);
            // open close nav btn
            document.querySelector(domStrings.menuClose).style.visibility = 'visible';
        },

        // Mobile menu close
        closeMenu: function() {
            var x, i ;
            x = document.getElementsByClassName('nav-item');

            for (i = 0; i < x.length; i++) {
                // Check the visibility and change accordingly 
               x[i].style.visibility ='hidden';
            }
            
            // Add the drop down menu class
            document.querySelector(domStrings.nav).classList.toggle(domStrings.navScreenOpen);
            // Change menu btn
            toggleVisibility(document.querySelector(domStrings.menu));
            // Change logo placement
            document.querySelector(domStrings.logo).classList.toggle(domStrings.logoNavOpen);
            // Hide nav close btn
            document.querySelector(domStrings.menuClose).style.visibility = 'hidden';
        }
    }
})();



// !!!!!!!!!!!!!!!!!!!!!!!!!! SCORE CONTROLLER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var scoreController = (function() {

    var currentScore, finalScore, passingScore, failingScore;
    
    passingScore = .7;
    failingScore = .3;
    finalScore = 0;
    currentScore = 0;

    var updateScore = function(val, cor) {
        if (val === cor) {
            currentScore ++;
        }
    };

    var calcScore = function(questions) {

        // calculate final score
        finalScore = currentScore / questions.length;

        // Compare final score to passing score and return if the user passed or not
        if (finalScore >= passingScore) {
            return 'pass';
        } else if (finalScore <= failingScore) {
            return 'veryFail'
        } else {
            return 'fail';
        }
    }

    var reset = function() {
        finalScore = 0;
        currentScore = 0;
    }

    return {

        getScore: function(value, correctValue) {
            updateScore(value, correctValue);
        },

        getResults: function(questions) {
            return calcScore(questions);
        },

        resetScore: function() {
            reset();
        }
    };

})();



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! GLOBAL CONTROLLER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var globalController = (function(scoreCntrl, UICntrl) {

    var curQue, options, selectedAnswer, correctAnswer, currentQuiz;

    curQue = 0;
    currentQuiz = certificationData.sports;
    
    var resetVariables = function() {
        selectedAnswer = '';
        options = currentQuiz.questions[curQue].options;
        correctAnswer = currentQuiz.questions[curQue].correctAnswer;
    };

    // When an option is selected
    var optionSelect = function(option, val) {
        
        // Update selected value
        selectedAnswer = val;
        
        // Update UI
        UICntrl.deselectAll();
        UICntrl.selectOption(option);
    };

    var optionSubmit = function() {
        scoreCntrl.getScore(selectedAnswer, correctAnswer);
    };

    var quizSubmit = function() {
        return scoreCntrl.getResults(currentQuiz.questions);
    };

    var resetQuiz = function() {
        curQue = 0;
        selectedAnswer = '';
    };

    var closeQuiz = function() {
        scoreCntrl.resetScore();
        UICntrl.hideQuiz();
    }

    // Set up event listeners
    var setUpListeners = function() {

        // Option A
        document.querySelector(domStrings.opA).addEventListener('click', function() {
            optionSelect(domStrings.opA, 'a', options);
        });

        // Option B
        document.querySelector(domStrings.opB).addEventListener('click', function() {
            optionSelect(domStrings.opB, 'b', options);
        });

        // Option C
        document.querySelector(domStrings.opC).addEventListener('click', function() {
            optionSelect(domStrings.opC, 'c', options);
        });

        // Option D
        document.querySelector(domStrings.opD).addEventListener('click', function() {
            optionSelect(domStrings.opD, 'd', options);
        });
        
        // Start Button
        document.querySelector(domStrings.btnStart).addEventListener('click', function() {
            UICntrl.startQuiz();
            UICntrl.showQuestion(currentQuiz, curQue, options);
        });

        // Close Button
        document.querySelector(domStrings.close).addEventListener('click', function() {
            resetQuiz();
            closeQuiz();
            UICntrl.hideQuestions();
        });

        // Next Question button
        document.querySelector(domStrings.btnNext).addEventListener('click', function() {
            
            
            // Go to next question and submit answer if an option is selected
            if (selectedAnswer != '') {
                
                //submit Answer
                optionSubmit();

                // update current question
                curQue += 1;

                // Update UI
                UICntrl.deselectAll();
                UICntrl.hideQuestions();

                // if the curQue question is the last question
                if (curQue === currentQuiz.questions.length - 1) {

                    // Update UI

                    resetVariables();
                    UICntrl.showQuestion(currentQuiz, curQue, options);
                    UICntrl.updateButton();

                // if it is not the last question
                } else if (curQue < currentQuiz.questions.length){

                    // Update UI
                    resetVariables();
                    UICntrl.showQuestion(currentQuiz, curQue, options);


                } else {

                    // Update UI
                    UICntrl.showResults(currentQuiz, quizSubmit());
                    UICntrl.updateButton();

                }
            }

        });

        // Sports 
        document.querySelector(domStrings.sports).addEventListener('click', function() {
            currentQuiz = certificationData.sports;
            resetVariables();
            UICntrl.openQuiz(currentQuiz);
        });

        // Wise guy 
        document.querySelector(domStrings.wiseGuy).addEventListener('click', function() {
            currentQuiz = certificationData.wiseGuy;
            resetVariables();
            UICntrl.openQuiz(currentQuiz);
        });

        // Calculator
        document.querySelector(domStrings.calculator).addEventListener('click', function() {
            currentQuiz = certificationData.calculator;
            resetVariables();
            UICntrl.openQuiz(currentQuiz);
        });

        // Alpha
        document.querySelector(domStrings.alpha).addEventListener('click', function() {
            currentQuiz = certificationData.alpha;
            resetVariables();
            UICntrl.openQuiz(currentQuiz);
        });


        
        // download 
        document.querySelector(domStrings.resultsDownload).addEventListener('click', function() {
            window.open(currentQuiz.pdf);
        });

        document.querySelector(domStrings.dumbassDownload).addEventListener('click', function() {
            window.open('assets//certifications//dumbass_certification.pdf');
        });
        
        // MOBILE LISTENERS 

        // menu 
        document.querySelector(domStrings.menu).addEventListener('click', function() {
            UICntrl.openMenu();
        });

        // close menu 
        document.querySelector(domStrings.menuClose).addEventListener('click', function() {
            UICntrl.closeMenu();
        });
    };


    
    return {
        init: function() {
        UICntrl.hideQuiz();
        setUpListeners();
        }
    };

})(scoreController, UIController);

globalController.init();