const firstNavLink = document.querySelector("header nav ul li");
const featuredReadTime = document.querySelector(".featured span");
const planningArticle = document.querySelectorAll("article")[3];
const nonfeaturedTitles = document.querySelectorAll(".posts h3");

firstNavLink.remove();
featuredReadTime.remove();
planningArticle.remove();

for (const title of nonfeaturedTitles) {
    title.remove();
}
