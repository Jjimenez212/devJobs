

const jobs = [
    {
      id: 1,
      companySite: "#",
      company: "Chief-Jobs559",
      logo: "../companys/mitxpro.svg",
      position: "React Frontend Developer Intern",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "United States",
      desc: "Build The Basics such as a Nav Bar, A cart, and A Bloging site with a Backend",
      requirements: {
        reqTitle:
          "1 year of reactjs, knowledge on what coding and able to keep along with tutorial.",
  
        reqItem: [
          "Able to understand how to code and knowledge of HTML, CSS, JavaScript, ReactJS development.",
        ],
      },
  
      responsibility: {
        resTitle:
          "Understand how to develop app and deploy them look for basic mistakes and fix.",
  
        resItem: [
          "N/a",
        ],
      },
    },
     /* {
      id: 2,
      companySite: "#",
      company: "Manage",
      logo: "../companys/Kazuya.svg",
      position: "Fullstack Developer",
      postedAt: "1d ago",
      contract: "Part Time",
      location: "United Kingdom",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis totam, magnam voluptatibus ut veniam harum voluptatem eaque ab tempora eius iusto dignissimos labore? Assumenda quam natus beatae sapiente repellat neque ea aspernatur cumque rem esse? Sapiente soluta repellat earum iusto nulla! Totam optio nobis laborum nemo tempora, quod fugiat.",
      requirements: {
        reqTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        reqItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
  
      responsibility: {
        resTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        resItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
    },
    {
      id: 3,
      companySite: "#",
      company: "Account",
      logo: "../companys/chief-jobs.svg",
      position: "Junior Frontend Developer",
      postedAt: "2d ago",
      contract: "Part Time",
      location: "Japan",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis totam, magnam voluptatibus ut veniam harum voluptatem eaque ab tempora eius iusto dignissimos labore? Assumenda quam natus beatae sapiente repellat neque ea aspernatur cumque rem esse? Sapiente soluta repellat earum iusto nulla! Totam optio nobis laborum nemo tempora, quod fugiat.",
      requirements: {
        reqTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        reqItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
  
      responsibility: {
        resTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        resItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
    },
    {
      id: 4,
      companySite: "#",
      company: "MyHome",
      logo: "../companys/chief-jobs.svg",
      position: "Desktop Support Manager",
      postedAt: "5d ago",
      contract: "Contract",
      location: "Germany",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis totam, magnam voluptatibus ut veniam harum voluptatem eaque ab tempora eius iusto dignissimos labore? Assumenda quam natus beatae sapiente repellat neque ea aspernatur cumque rem esse? Sapiente soluta repellat earum iusto nulla! Totam optio nobis laborum nemo tempora, quod fugiat.",
      requirements: {
        reqTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        reqItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
  
      responsibility: {
        resTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        resItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
    },
    {
      id: 5,
      companySite: "#",
      company: "Loop Studios",
      logo: "../companys/kazuya.svg",
      position: "Remote DevOps Engineer",
      postedAt: "1w ago",
      contract: "Part Time",
      location: "Remote",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis totam, magnam voluptatibus ut veniam harum voluptatem eaque ab tempora eius iusto dignissimos labore? Assumenda quam natus beatae sapiente repellat neque ea aspernatur cumque rem esse? Sapiente soluta repellat earum iusto nulla! Totam optio nobis laborum nemo tempora, quod fugiat.",
      requirements: {
        reqTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        reqItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
  
      responsibility: {
        resTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        resItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
    },
    {
      id: 6,
      companySite: "#",
      company: "FaceIt",
      logo: "../companys/jin.svg",
      position: "Senior Application Engineer",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "United State",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis totam, magnam voluptatibus ut veniam harum voluptatem eaque ab tempora eius iusto dignissimos labore? Assumenda quam natus beatae sapiente repellat neque ea aspernatur cumque rem esse? Sapiente soluta repellat earum iusto nulla! Totam optio nobis laborum nemo tempora, quod fugiat.",
      requirements: {
        reqTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        reqItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
  
      responsibility: {
        resTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        resItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
    },
    {
      id: 7,
      companySite: "#",
      company: "../companys/mitxpro.svg",
      logo: "../companys/kazuya.svg",
      position: "Technical Lead Engineer",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "United Kingdom",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis totam, magnam voluptatibus ut veniam harum voluptatem eaque ab tempora eius iusto dignissimos labore? Assumenda quam natus beatae sapiente repellat neque ea aspernatur cumque rem esse? Sapiente soluta repellat earum iusto nulla! Totam optio nobis laborum nemo tempora, quod fugiat.",
      requirements: {
        reqTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        reqItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
  
      responsibility: {
        resTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        resItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
    },
    {
      id: 8,
      companySite: "#",
      company: "Insure",
      logo: "../companys/chief-jobs.svg",
      position: "App and Website Designer",
      postedAt: "2w ago",
      contract: "Freelance",
      location: "World Wide",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis totam, magnam voluptatibus ut veniam harum voluptatem eaque ab tempora eius iusto dignissimos labore? Assumenda quam natus beatae sapiente repellat neque ea aspernatur cumque rem esse? Sapiente soluta repellat earum iusto nulla! Totam optio nobis laborum nemo tempora, quod fugiat.",
      requirements: {
        reqTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        reqItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
  
      responsibility: {
        resTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        resItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
    },
    {
      id: 9,
      companySite: "#",
      company: "Eyecam Co.",
      logo: "../companys/chief-jobs.svg",
      position: "IOS Engineer",
      postedAt: "3w ago",
      contract: "Full Time",
      location: "United State",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis totam, magnam voluptatibus ut veniam harum voluptatem eaque ab tempora eius iusto dignissimos labore? Assumenda quam natus beatae sapiente repellat neque ea aspernatur cumque rem esse? Sapiente soluta repellat earum iusto nulla! Totam optio nobis laborum nemo tempora, quod fugiat.",
      requirements: {
        reqTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        reqItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
  
      responsibility: {
        resTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        resItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
    },
    {
      id: 10,
      companySite: "#",
      company: "The Air Filter Company",
      logo: "../companys/jin.svg",
      position: "Front-end Dev",
      postedAt: "1mo ago",
      contract: "Part Time",
      location: "Worldwide",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis totam, magnam voluptatibus ut veniam harum voluptatem eaque ab tempora eius iusto dignissimos labore? Assumenda quam natus beatae sapiente repellat neque ea aspernatur cumque rem esse? Sapiente soluta repellat earum iusto nulla! Totam optio nobis laborum nemo tempora, quod fugiat.",
      requirements: {
        reqTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        reqItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
  
      responsibility: {
        resTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur earum totam error aliquam explicabo aspernatur, ratione fugit dolorem, porro est commodi modi ipsam at eos hic optio quasi? Est!",
  
        resItem: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, corrupti.",
        ],
      },
    },  */
  ];
  
  export default jobs;