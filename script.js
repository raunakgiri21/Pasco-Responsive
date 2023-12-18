"use strict";

// Accordian Functionality
const accordians = document.querySelectorAll(".btn-accordian");
accordians.forEach((accordian) => {
  accordian.addEventListener("click", () => {
    accordians.forEach((acc) => {
      if (accordian !== acc)
        acc.parentNode.classList.remove("active-accordian");
    });
    accordian.parentNode.classList.toggle("active-accordian");
  });
});

// Nav Toggle button Functionality
const navBtn = document.querySelector(".nav-toggle-btn");
const navs = document.querySelector(".navs");
const navToggleIcon = document.querySelector(".nav-toggle-icon");
const navContainers = document.querySelectorAll(".nav-container");

document.onclick = (e) => {
  console.log(e.target.classList)
  if (
    !e.target.classList.contains("nav-toggle-icon") &&
    !e.target.classList.contains("nav-toggle-btn") &&
    !e.target.classList.contains("navs")
    ) {
      navs.classList.add("navs-display-none");
      navToggleIcon.innerHTML = "menu";
  }
};

navBtn.addEventListener("click", () => {
  navs.classList.toggle("navs-display-none");
  if (navs.classList.contains("navs-display-none")) {
    navToggleIcon.innerHTML = "menu";
  } else {
    navToggleIcon.innerHTML = "close";
  }
});

navContainers.forEach((navContainer) => {
  navContainer.addEventListener("click", () => {
    navs.classList.toggle("navs-display-none");
    if (navs.classList.contains("navs-display-none")) {
      navToggleIcon.innerHTML = "menu";
    } else {
      navToggleIcon.innerHTML = "close";
    }
  });
});

// SortBlog Accordian
const sortBlogBtn = document.querySelector(".sort-blog-icon-pair");
const sortBlogOptionsContainer = document.querySelector(
  ".sort-blog-accordian-options"
  );
const sortBlogMain = document.querySelector(".sort-blog-main-accordian");
const sortBlogOptions = document.querySelectorAll(".sort-blog-option");
const sortBlogcurrent = document.querySelector(".sort-blog-current");

sortBlogBtn.addEventListener("click", () => {
  sortBlogOptionsContainer.classList.toggle("show-sort-blog-options");
  if (sortBlogOptionsContainer.classList.contains("show-sort-blog-options")) {
    sortBlogMain.classList.add("sort-blog-options-open");
  } else {
    sortBlogMain.classList.remove("sort-blog-options-open");
  }
});

sortBlogOptions.forEach((option) => {
  option.addEventListener("click", () => {
    sortBlogcurrent.innerHTML = option.innerHTML;
    // close
    sortBlogOptionsContainer.classList.toggle("show-sort-blog-options");
    if (sortBlogOptionsContainer.classList.contains("show-sort-blog-options")) {
      sortBlogMain.classList.add("sort-blog-options-open");
    } else {
      sortBlogMain.classList.remove("sort-blog-options-open");
    }
  });
});

document.onclick = (e) => {
  if (
    !e.target.classList.contains("nav-toggle-icon") &&
    !e.target.classList.contains("nav-toggle-btn") &&
    !e.target.classList.contains("navs")
  ) {
    navs.classList.add("navs-display-none");
    navToggleIcon.innerHTML = "menu";
  }
  if (
    !e.target.classList.contains("sort-blog-accordian") && 
    !e.target.classList.contains("sort-blog-icon-pair") && 
    !e.target.classList.contains("sort-blog-icon") && 
    !e.target.classList.contains("sort-blog-option")
  ) {
   // close
    sortBlogOptionsContainer.classList.remove("show-sort-blog-options");
    sortBlogMain.classList.remove("sort-blog-options-open");
  }
};
