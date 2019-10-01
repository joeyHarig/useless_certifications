class App extends React.Component {


    render() {
        return (
            <div>

                <div class="navigation sticky">
                    <a class="logo" href="#">UselessCertifications.com</a>
                    <a class="nav-item" href="#">CERTIFICATIONS</a>
                    <a class="nav-item" href="#">ABOUT</a>
                    <a class="nav-item" href="#">CONTACT</a>
                </div>

                <header class="header">
                    <h1 class="slogan">Let's get Official.</h1>
                    <div class="btn btn-certify-me" href="#">Certify Me</div>
                </header>

                <div id="certifications">
                    <h1 class="certifications-title">Certifications</h1>
                    <div class="topics">
                        <div class="topic" id="sports">Sports</div>
                        <div class="topic" id="calculator">Calculator</div>
                        <div class="topic" id="entertainment">Entertainnment</div>
                        <div class="topic" id="photosynthesis">Photosynthesis</div>
                    </div>
                </div>
           
                <footer class="footer"></footer>
            </div>
        )
    }
}

// Quiz Constructor
function CertificationQuiz(title, description, questions, answers) {
    this.title = title;
    this.description = description;
    this.questions = questions;
    this.answers = answers;
}

// Question Constructor
function Question(question, a, b, c, d, answer) {
    this.question = question;
    this.optionA  = a;
    this.optionB  = b;
    this.optionC  = c;
    this.optionD = d;
    this.answer = answer;
}

 var sportsCertificationQuiz = new CertificationQuiz(
     "Certification in Sports",
     "Have you ever wanted to prove that you are good at sports? What better way than with a certification in sports?",
    [   new Question(
            "Which of the following is not a sport?",
            "Baseball",
            "Golf",
            "Chess Boxing",
            "Soccer"), 
        new Question(
            "Which of the following is not a sport?",
            "Baseball",
            "Golf",
            "Chess Boxing",
            "Soccer"), 
    ]
 )

ReactDOM.render(<App />, document.getElementById('app'));
