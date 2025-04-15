const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const teamSheet = document.getElementById("team-sheet");

const generateMemberSection = (member) => {
  const { name, role, email, img } = member;
  return `      
  <div class="col-sm-12 col-md-6 col-xl-4 d-flex">
    <div class="member-image">
      <img src=${img} alt="${name}" width="100%"/>
    </div>
    <div class="member-info text-white bg-black w-100 p-2">
      <h3>${name}</h3>
      <p>${role}</p>
      <a href="#">${email}</a>
    </div>
  </div>`;
};

let sheetHtml = ``;
for (const member of teamMembers) {
  sheetHtml += generateMemberSection(member);
}
teamSheet.innerHTML = sheetHtml;
