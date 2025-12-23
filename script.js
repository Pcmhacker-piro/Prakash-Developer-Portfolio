function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

const profiles = [
  {
    name: "Codeforces",
    rating: "Active Competitive Programmer",
    link: "https://codeforces.com/profile/YOUR_USERNAME",
    logo: "https://cdn-icons-png.flaticon.com/512/2111/2111628.png"
  },
  {
    name: "LeetCode",
    rating: "DSA Practice",
    link: "https://leetcode.com/YOUR_USERNAME",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
  },
  {
    name: "CodeChef",
    rating: "Regular Contests",
    link: "https://www.codechef.com/users/YOUR_USERNAME",
    logo: "https://cdn.codechef.com/images/cc-logo.svg"
  }
];

const container = document.getElementById("profilesContainer");

profiles.forEach(p => {
  const card = document.createElement("div");
  card.className = "profile-card";
  card.innerHTML = `
    <img src="${p.logo}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.rating}</p>
    <a href="${p.link}" target="_blank">View Profile →</a>
  `;
  container.appendChild(card);
});