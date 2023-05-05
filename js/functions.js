function getData(dataType) {
  var content = "";
  switch (dataType) {
    case "__about":
      content = `
          <h2 class="text-center content__title">It's All About Me!</h2>
          <div class="d-flex justify-content-center mb-4">
            <div class="stretchy-container text-center">
              <img src="img/me.jpg" alt="me" class="stretchy" />
            </div>
          </div>
          <p>I am Yusuf Wandana, a person who is very interested in technology, especially software development.</p>
          <p>
            The things that interests me the most in software development is about teamwork and problem solving.
            Why? Because there is pleasure in me when I can solve problems.
            Especially if we work in a team, where we can work together, help each other and share ideas.
          </p>
          <p>
            On the other hand, I also like sports activities and learning something new. 
            By exercising I can keep my body healthy and not susceptible to disease. 
            When working and studying with a healthy body will certainly add enthusiasm 
            to do it.
          </p>
          <p>If you are curious and want to know more about me, you can contact me <a href="#">here</a>.</p>
        `;
      break;
    case "__experiences":
      content = `
        <h2 class="text-center content__title">My Experiences</h2>
        <div class="experiences">
          <div class="experience">
            <div class="head-experience text-center">
              <div class="d-flex justify-content-center mb-4">
                <div class="stretchy-container text-center">
                  <img src="img/wan-logo.png" alt="me" class="stretchy" />
                </div>
              </div>
              <span class="d-block" style="font-size: 18px">Web & Back-end Developer</span>
              <span class="d-block" style="font-size: 16px">
                PT. WAN Teknologi Internasional
              </span>
            </div>
            <div class="body-experience">
              <div style="margin-top: 10px">
                <p style="margin-bottom: 0">Job Description:</p>
                <ul>
                  <li>
                    Create database design according to client needs. 
                  </li>
                  <li>
                    Develop API service for application needs.
                  </li>
                  <li>
                    Design, develop, and maintain web-based application.
                  </li>
                  <li>
                    Refactor code to make it easier to read and maintain.
                  </li>
                </ul>
              </div>
              <div style="margin-top: 10px">
                <p style="margin-bottom: 0">Technology Used:</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS (Bootstrap, Tailwind)</li>
                  <li>Javascript (Vanilla Javascript, JQuery)</li>
                  <li>PHP (Laravel)</li>
                  <li>MySQL, PostgreeSQL</li>
                  <li>Github, Gitlab</li>
                  <li>REST API</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="experience">
            <div class="head-experience text-center">
              <div class="d-flex justify-content-center mb-4">
                <div class="stretchy-container text-center">
                  <img src="img/intelsysdata-logo.png" alt="me" class="stretchy" />
                </div>
              </div>
              <span class="d-block" style="font-size: 18px">ETL Developer</span>
              <span class="d-block" style="font-size: 16px">
                PT. Madani Intelsysdata
              </span>
            </div>
            <div class="body-experience">
              <div style="margin-top: 10px">
                <p style="margin-bottom: 0">Job Description:</p>
                <ul>
                  <li>
                    Develop reporting application for monthly financial report in a
                    bank.
                  </li>
                  <li>
                    Maintenance existing application (add new features and bug fixing).
                  </li>
                  <li>
                    Become a consultant to assist finance companies in working on
                    monthly financial reports.
                  </li>
                </ul>
              </div>
              <div style="margin-top: 10px">
                <p style="margin-bottom: 0">Technology Used:</p>
                <ul>
                  <li>Extract, Transform, Load (using ETL Tools)</li>
                  <li>SQL Query (using SQL Server)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `;
      break;
    case "__portofolio":
      content = `
        <h2 class="text-center content__title">Portofolio</h2>
        <div class="card __portofolio">
            <div class="card-body">
            <div class="d-flex justify-content-center mb-4">
                <div class="stretchy-container text-center">
                <img
                    src="img/portofolio/crypindo.png"
                    alt="crypindo-logo"
                    class="stretchy"
                />
                </div>
            </div>
            <p>
                Crypindo is a website for tracking the latest crypto price.
                All the data in this web is retrieved from
                <a href="https://coingecko.com" target="_blank">
                API CoinGecko
                </a>
                . Fun fact, This is my first experience build a website using
                ReactJs and Tailwind.
            </p>
            <table>
                <tr>
                <td>URL</td>
                <td class="text-center" width="20px">:</td>
                <td>
                    <a href="https://crypindo.netlify.app">
                    https://crypindo.netlify.app
                    </a>
                </td>
                </tr>
                <tr>
                <td>Technology stack</td>
                <td class="text-center" width="20px">:</td>
                <td>Javascript, ReactJs, Tailwind</td>
                </tr>
            </table>
            </div>
        </div>
      `;
      break;
    case "__contact":
      content = `
        <h2 class="text-center content__title">Contact Me!</h2>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="d-flex justify-content-start">
              <i class="fab fa-google __fa-icon mx-3 text-danger"></i>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yusuf.wandana1@gmail.com" target="_blank" class="mb-1">yusuf.wandana1@gmail.com</a>
            </div>
            <div class="d-flex justify-content-start my-3">
              <i class="fab fa-linkedin __fa-icon mx-3 text-primary"></i>
              <a href="https://linkedin.com/in/yusuf-wandana" target="_blank" class="mb-1">Yusuf Wandana</a>
            </div>
            <div class="d-flex justify-content-start my-3">
              <i class="fab fa-github __fa-icon mx-3"></i>
              <a href="https://github.com/cupskydev" target="_blank" class="mb-1">@cupskydev</a>
            </div>
          </div>
        </div>
      `;
      break;

    default:
      break;
  }

  return content;
}
