
const links = document.querySelectorAll(".lesson-list a");

links.forEach(link => {
  link.addEventListener("click", () => {
    localStorage.setItem("lastLesson", link.textContent);
  });
});

const lastLesson = localStorage.getItem("lastLesson");
if (lastLesson) {
  console.log("Last visited:", lastLesson);
}