// This is needed to make it mobile responsive

function adjustLayoutGroupsHeight() {
  const widgetsHeight = document.getElementById(
    "information-widgets"
  ).offsetHeight;
  const layoutGroups = document.getElementById("layout-groups");

  const availableHeight = widgetsHeight + 0;
  layoutGroups.style.marginTop = availableHeight + "px";
}

window.addEventListener("resize", adjustLayoutGroupsHeight);
window.addEventListener("load", adjustLayoutGroupsHeight);
