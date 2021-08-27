export const sidebarToggle = () => {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
};

export const profileToggle = () => {
  var profileDropdown = document.getElementById("ProfileDropDown");
  if (profileDropdown.style.display === "none") {
    profileDropdown.style.display = "block";
  } else {
    profileDropdown.style.display = "none";
  }
};
