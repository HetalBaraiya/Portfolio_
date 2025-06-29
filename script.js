// ScrollReveal Animations
ScrollReveal().reveal(".hero-left", {
  origin: "left",
  distance: "50px",
  duration: 1000,
  delay: 300,
});
ScrollReveal().reveal(".hero-right", {
  origin: "right",
  distance: "50px",
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".navbar", {
  origin: "top",
  distance: "20px",
  duration: 800,
  delay: 200,
});
ScrollReveal().reveal(".about-img", {
  origin: "left",
  distance: "50px",
  duration: 1000,
  delay: 200,
});
ScrollReveal().reveal(".about-content", {
  origin: "right",
  distance: "50px",
  duration: 1000,
  delay: 300,
});
ScrollReveal().reveal(".contact-section", {
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  delay: 300,
});

// Fade-in on scroll effect
const sections = document.querySelectorAll("section");
function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("reveal");
    }
  });
}
window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Particles.js Initialization
particlesJS("particles-js", {
  particles: {
    number: { value: 90, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
    opacity: { value: 0.5, random: false },
    size: { value: 2.5, random: true },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100 } },
  },
  retina_detect: true,
});

/*edcuation section*/
// Auto-sliding Education Cards
let eduIndex = 0;
const eduCards = document.querySelectorAll(".edu-card");

function showEduCard(index) {
  eduCards.forEach((card, i) => {
    card.classList.remove("active");
    if (i === index) card.classList.add("active");
  });
}

function cycleEduCards() {
  eduIndex = (eduIndex + 1) % eduCards.length;
  showEduCard(eduIndex);
}

setInterval(cycleEduCards, 5000); // Change every 5 seconds

/*skills section*/

const skillData = {
  frontend: [
    { name: "HTML5", percent: 95 },
    { name: "CSS3", percent: 95 },
    { name: "Figma", percent: 40 },
    { name: "React", percent: 60 },
    { name: "Bootstrap", percent: 80 },
    { name: "JavaScript", percent: 70 },
    { name: "TypeScript", percent: 50 },
    { name: "Next.js", percent: 40 },
  ],
  backend: [
    { name: "Node.js", percent: 60 },
    { name: "MySQL", percent: 90 },
    { name: "MongoDB", percent: 50 },
    { name: "PHP", percent: 90 },
    { name: "Jdbc", percent: 70 },
  ],
  tools: [
    { name: "Git & GitHub", percent: 80 },
    { name: "VS Code", percent: 90 },
  ],
  softskills: [
    { name: "Time Management", percent: 90 },
    { name: "Critical Thinking", percent: 85 },
    { name: "Problem Solving", percent: 80 },
  ],
};

const cards = document.querySelectorAll(".skill-card");
const details = document.getElementById("skill-details");

function renderBars(category) {
  const skills = skillData[category];
  details.innerHTML = skills
    .map(
      (skill) => `
    <div class="tool-item">
      <div class="tool-info">
        <span>${skill.name}</span>
        <span>${skill.percent}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${skill.percent}%"></div>
      </div>
    </div>
  `
    )
    .join("");
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
    const category = card.getAttribute("data-category");
    renderBars(category);
  });
});

// Initialize default
renderBars("frontend");

/*project section*/
const projects = [
  {
    type: "Diploma Final Year Project",
    title: "PlotPicks (Books website)",
    image: "./include/PlotPicks.png",
    overview:
      "Streamlines vaccination record management with a centralized, paperless system across India.",
    techStack: ["HTML", "CSS3", "JavaScript", "PHP", "MySQL"],
    githubLink: "https://github.com/Mandeep210405/TCL",
    keyFeatures: [
      "Centralized Record Management",
      "Appointment Scheduling",
      "Location Integration",
      "Analytics",
    ],
  },
  {
    type: "Degree Project",
    title: "NEXX (Educational Platform)",
    image: "./assets/nexx.png",
    overview:
      "Platform for engineering students with PDFs, videos, authentication, and role-based access.",
    techStack: ["MySQL", "PHP 7.4+", "JavaScript", "HTML5", "Bootstrap"],
    githubLink: "https://github.com/Mandeep210405/TCL-Degree",
    keyFeatures: [
      "Educational Access",
      "File Management",
      "API Integration",
      "Responsive Interface",
    ],
  },
  {
    type: "Diploma Final Year Project",
    title: "PlotPicks (Books website)",
    image: "./include/PlotPicks.png",
    overview:
      "Streamlines vaccination record management with a centralized, paperless system across India.",
    techStack: ["HTML", "CSS3", "JavaScript", "PHP", "MySQL"],
    githubLink: "https://github.com/Mandeep210405/TCL",
    keyFeatures: [
      "Centralized Record Management",
      "Appointment Scheduling",
      "Location Integration",
      "Analytics",
    ],
  },
  {
    type: "Diploma Final Year Project",
    title: "PlotPicks (Books website)",
    image: "./include/PlotPicks.png",
    overview:
      "Streamlines vaccination record management with a centralized, paperless system across India.",
    techStack: ["HTML", "CSS3", "JavaScript", "PHP", "MySQL"],
    githubLink: "https://github.com/Mandeep210405/TCL",
    keyFeatures: [
      "Centralized Record Management",
      "Appointment Scheduling",
      "Location Integration",
      "Analytics",
    ],
  },
];

const grid = document.getElementById("projects-grid");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="project-img" />
    <h3>${project.title}</h3>
    <p class="overview">${project.overview}</p>
    <div class="tech-stack">
      <h4>Technology Stack:</h4>
      <ul>${project.techStack.map((t) => `<li>${t}</li>`).join("")}</ul>
    </div>
    <div class="tech-stack">
      <h4>Key Features:</h4>
      <ul>${project.keyFeatures.map((f) => `<li>${f}</li>`).join("")}</ul>
    </div>
    <a href="${
      project.githubLink
    }" target="_blank" class="github-link">🔗 View on GitHub</a>
  `;
  grid.appendChild(card);
});

/*Custom Cursor*/

const canvas = document.getElementById("cursor-canvas");
const ctx = canvas.getContext("2d");
let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);

window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

let mouse = { x: w / 2, y: h / 2, history: [] };
const maxTrail = 20;

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function animate() {
  ctx.clearRect(0, 0, w, h);

  mouse.history.unshift({ x: mouse.x, y: mouse.y });
  if (mouse.history.length > maxTrail) mouse.history.pop();

  mouse.history.forEach((pos, i) => {
    const t = i / maxTrail;
    const radius = (1 - t) * 10 + 3; // smaller size
    const opacity = (1 - t) * 0.3;

    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(165, 164, 136, ${opacity})`; // soft golden neon
    ctx.shadowColor = `rgba(165, 164, 136, ${opacity})`;
    ctx.shadowBlur = 10;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();
