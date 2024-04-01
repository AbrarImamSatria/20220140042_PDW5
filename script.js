document.addEventListener("DOMContentLoaded", function () {
  const tableRows = document.querySelectorAll(".universitas-table tbody tr");

  tableRows.forEach((row, index) => {
    row.classList.add("fade-in");

    const logoCell = row.querySelector(".logo img");
    const universityLink = logoCell.getAttribute("data-link");

    logoCell.addEventListener("click", function () {
      window.open(universityLink, "_blank"); 
    });

    logoCell.addEventListener("mouseover", function () {
      const tooltip = document.createElement("div");
      tooltip.textContent = "Klik untuk kunjungi situs web universitas";
      tooltip.classList.add("tooltip");

      const rect = logoCell.getBoundingClientRect();
      const logoX = rect.left + window.scrollX + 50; 
      const logoY = rect.top + window.scrollY - 30; 

      tooltip.style.top = logoY + "px";
      tooltip.style.left = logoX + "px";
      document.body.appendChild(tooltip);

      logoCell.addEventListener("mouseleave", function () {
        document.body.removeChild(tooltip);
      });
    });
  });

  const darkModeToggle = document.getElementById("dark-mode-toggle");

  darkModeToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });
});
