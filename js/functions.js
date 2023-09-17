function getContent(type) {
  var content = "";
  switch (type) {
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
            Because there is pleasure in me when I can solve problems.
          </p>
          <p>
            On the other hand, I like to play sports and learn something new. 
            A healthy body is one of the factors in increasing enthusiasm at work.
          </p>
          <p>If you want to know more about me, you can contact me <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yusuf.wandana1@gmail.com" target="_blank">here</a>.</p>
        `;
      break;
    case "__experiences":
      var experiences = getData(type);
      var experience = "";

      content += `<h2 class="text-center content__title">My Experiences</h2>`;

      experiences.forEach((item) => {
        var job_descriptions = "";
        item.job_descriptions?.forEach((item) => {
          job_descriptions += `<li>${item}</li>`;
        });

        var tech_stacks = "";
        item.tech_stacks?.forEach((item) => {
          tech_stacks += `<li>${item}</li>`;
        });

        experience += `
          <div class="experience">
            <div class="head-experience text-center">
              <div class="d-flex justify-content-center mb-4">
                <div class="stretchy-container text-center">
                  <img src="${item.thumbnail}" alt="me" class="stretchy" />
                </div>
              </div>
              <span class="d-block" style="font-size: 18px">${item.job_title}</span>
              <span class="d-block" style="font-size: 16px">${item.company_name}</span>
            </div>
            <div class="body-experience">
              <div style="margin-top: 10px">
                <p style="margin-bottom: 0">Job Descriptions:</p>
                <ul>
                  ${job_descriptions}
                </ul>
              </div>
              <div style="margin-top: 10px">
                <p style="margin-bottom: 0">Technology Used:</p>
                <ul>
                  ${tech_stacks}
                </ul>
              </div>
            </div>
          </div>
          `;
      });

      content += experience;
      break;
    case "__portofolio":
      var portofolios = getData(type);
      content += `<h2 class="text-center content__title">Portofolio</h2>`;

      portofolios.forEach((item) => {
        var tech_stacks = item.tech_stacks?.join(", ");
        content += `
          <div class="card __portofolio mb-3">
              <div class="card-body">
                <div class="d-flex justify-content-center mb-4">
                    <div class="stretchy-container text-center">
                      <img src="${item.thumbnail}" alt="${item.title}" class="stretchy" />
                    </div>
                </div>
                <p>${item.description}</p>
                <table>
                    <tr>
                      <td>URL</td>
                      <td class="text-center" width="20px">:</td>
                      <td>
                        <a href="${item.url}">${item.url}</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Technology stack</td>
                      <td class="text-center" width="20px">:</td>
                      <td>${tech_stacks}</td>
                    </tr>
                </table>
              </div>
          </div>
        `;
      });
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
              <a href="https://github.com/yusufwdn" target="_blank" class="mb-1">@yusufwdn</a>
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

function navbarItems() {
  return [
    {
      title: "About",
      pageData: "__about",
    },
    {
      title: "Experiences",
      pageData: "__experiences",
    },
    {
      title: "Portofolio",
      pageData: "__portofolio",
    },
    {
      title: "Contact",
      pageData: "__contact",
    },
  ];
}

function navbarItemsElements() {
  var navItems = "";
  for (const navItem of navbarItems()) {
    var navActive = navItem.pageData === "__about" ? "nav__active" : "";
    navItems += `
    <li class="nav-item">
      <span class="nav-link ${navActive}" page-data="${navItem.pageData}">
        ${navItem.title}
      </span>
    </li>`;
  }

  // add mode icon for change theme
  navItems += `
  <li class="nav-item">
    <span class="nav-link mode">
      <img class="mode__icon" mode="light" alt="icon-mode" />
    </span>
  </li>`;

  return navItems;
}

function getData(type) {
  switch (type) {
    case "__experiences":
      return [
        {
          job_title: "Web & Back-end Developer",
          company_name: "PT. WAN Teknologi Internasional",
          job_descriptions: [
            "Analyze the client's desired application system flow.",
            "Collaborate with other teams on projects.",
            "Design, develop, and maintenance web based application.",
            "Develop API services for web and/or mobile application needs.",
            "Integrate applications with third-party services like payment gateway, PPOB system, SMS gateway, shipment service, etc.",
            "Refactor the code to make it more readable by other teams and easy to maintain.",
          ],
          thumbnail: "img/wan-logo.png",
          website_url: "https://crypindo.netlify.app",
          tech_stacks: [
            "HTML",
            "CSS (Bootstrap, TailwindCSS)",
            "Javascript",
            "PHP (Laravel, CodeIgniter)",
            "MySQL, PostgreSQL",
            "Github, Gitlab",
            "REST API",
          ],
        },
        {
          job_title: "ETL Developer",
          company_name: "PT. Madani Intelsysdata",
          job_descriptions: [
            "Develop reporting application for monthly financial report in a bank.",
            "Maintenance existing application (add new features and bug fixing).",
            "Become a consultant to assist finance companies in working on monthly financial reports.",
          ],
          thumbnail: "img/intelsysdata-logo.png",
          website_url: "https://crypindo.netlify.app",
          tech_stacks: [
            "Microsoft SQL Server",
            "SQL Server Data Tools",
            "SQL Server Integration Service",
            "SQL Server Reporting Service",
          ],
        },
      ];
    case "__portofolio":
      return [
        {
          title: "Crypindo",
          description: `
          Crypindo is a simple website for tracking the current crypto price.
          All the data in this website is taken from <a href="https://coingecko.com" target="_blank">API CoinGecko</a>.
          `,
          thumbnail: "img/portofolio/crypindo.png",
          url: "https://crypindo.netlify.app",
          tech_stacks: ["Javascript", "ReactJs", "Tailwind"],
        },
      ];

    default:
      return [];
  }
}
