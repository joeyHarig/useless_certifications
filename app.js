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

                <div class="sticky" id="certification-quiz">
                    <div id="close"></div>
                    <div id="title"></div>
                    <div id="description"></div>
                    <div id="question-box">
                        <div id="question"></div>
                        <div class="option"></div>
                    </div>
                    <div id="button"></div>
                </div>

            
                <footer class="footer"></footer>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));