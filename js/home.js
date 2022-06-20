// The JavaScript code is responsible for creating the left navigation pane of our website.
function activeNavigation() {
  const sections = document.querySelectorAll(".section"); //Selected all the 4 different sections of our website. ex: Home, Issues, Team, Goal

  const navContainer = document.createElement("nav"); // Creating an HTML element named "nav".

  const navItems = Array.from(sections).map((section) => {
    // The HTML code of left navigation
    return `
            <div class="nav-item" data-for-section = "${section.id}">
                <a href="#${section.id}" class="nav-link nav-link-selected"></a>
                <span class="nav-label">${section.dataset.label}</span>
            </div>
        `;
  }); // This could also be implemented in HTML + JS but we preferred JS to avoid repetitiveness for 4 differnt sections.
  navContainer.classList.add("nav");

  navContainer.innerHTML = navItems.join("");

  console.log(navContainer);

  const observer = new IntersectionObserver( //Detects whenever a section occupies more than 50% of the view post & ten updates the active link.
    (entries) => {
      console.log(entries);
      document.querySelectorAll(".nav-link").forEach((navLink) => {
        navLink.classList.remove("nav-link-selected");
      });

      const visibleSection = entries.filter((entry) => entry.isIntersecting)[0];
      console.log(visibleSection);

      document
        .querySelector(
          `.nav-item[data-for-section="${visibleSection.target.id}"] .nav-link`
        )
        .classList.add("nav-link-selected");
    },
    {
      threshold: 0.5, //threshold for updating the active status (whenever a section is more than 50%)
    }
  );
  sections.forEach((section) => observer.observe(section)); // Observe the section change while scrolling.
  document.body.appendChild(navContainer);
}
activeNavigation();
