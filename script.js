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
    type: "Degree Project",
    title: "PlotPicks (Books Website)",
    image: "./include/Boook.avif",
    overview:
      "PlotPicks is a dynamic book recommendation and review platform where users can explore books, write reviews, rate their favorites, and suggest new titles. It also features an admin panel for managing users, genres, and book content.",
    techStack: ["HTML", "CSS3", "JavaScript", "PHP", "MySQL"],
    githubLink: "https://github.com/HetalBaraiya/Plotpicks_php",
    keyFeatures: [
      "Browse and Search Books",
      "User Reviews and Star Ratings",
      "Book Suggestion System",
      "Admin Panel for Content Management",
      "Responsive UI with Genre Filtering",
    ],
  },
  {
    type: "Mini Project",
    title: "Weather App - Your Daily Forecast",
    image: "./include/weather.png", // Update this path as per your project folder
    overview:
      "A clean and responsive weather web app that provides real-time weather updates including temperature, humidity, wind speed, and condition icons for any city using the OpenWeatherMap API.",
    techStack: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API"],
    githubLink: "https://github.com/HetalBaraiya/weather_app",
    keyFeatures: [
      "Search weather by city name",
      "Real-time temperature, humidity, and wind speed",
      "Dynamic weather icons based on current conditions",
      "Fully responsive design for all devices",
      "Error handling for invalid city names",
    ],
  },
  {
    type: "Diploma Project",
    title: "Packers & Movers Service Platform",
    image: "./include/packers.png", // Replace with actual screenshot path
    overview:
      "A user-friendly platform that connects customers with local packers and movers. Users can browse available moving services, book the one they like, and get assistance for relocating to a new location. The platform includes an interface for service providers to manage requests, details, and bookings.",
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    githubLink: "https://github.com/HetalBaraiya/Packers_and_Movers",
    keyFeatures: [
      "Browse and select from various packers & movers options",
      "User booking system with request submission",
      "Provider dashboard to view and manage move requests",
      "Capture detailed move information (locations, dates, items)",
      "Responsive design for both user and provider interfaces",
      "Backend database integration for bookings and user data",
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

/*button*/
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.style.left = e.offsetX + "px";
    circle.style.top = e.offsetY + "px";
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

const text = "Student | Full-Stack Developer ";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100); // speed of typing (in ms)
  }
}
typing();

const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.1 };

const appearOnScroll = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, appearOptions);

faders.forEach((fader) => appearOnScroll.observe(fader));

//contact section
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/xrbkjgkz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "thankyou.html";
        } else {
          alert("There was an error. Please try again later.");
        }
      })
      .catch((error) => {
        alert("There was a network error.");
      });
  });
