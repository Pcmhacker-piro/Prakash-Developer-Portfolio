function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

const profiles = [
  {
    name: "Codeforces",
    rating: "Active Competitive Programmer",
    link: null,
    logo: "image/codeforces.png"
  },
  {
    name: "LeetCode",
    rating: "DSA Practice",
    link: null,
    logo: "image/leetcode.png"
  },
  {
    name: "CodeChef",
    rating: "Regular Contests",
    link: null,
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" fill="%23F7941E"/><text x="32" y="40" font-size="28" text-anchor="middle" fill="white" font-family="Arial">CC</text></svg>'
  }
];

const container = document.getElementById("profilesContainer");

profiles.forEach(p => {
  const card = document.createElement('div');
  card.className = 'profile-card';
  const profileLinkText = p.link ? 'View Profile →' : 'Profile (local view)';
  card.innerHTML = `
    <img src="${p.logo}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.rating}</p>
    <p class="profile-link-text">${profileLinkText}</p>
  `;
  container.appendChild(card);
});
