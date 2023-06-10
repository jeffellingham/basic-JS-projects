// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector(".links");

navToggle.addEventListener('click', function() {
    // initial tests to see how stuff worked
    // console.log(links.classList);
    // console.log(links.classList.contains('random'));  False
    // console.log(links.classList.contains('Links'));  True

    // The longer way to do it, to show how it effectively works
    // if(links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // }
    // else{
    //     links.classList.add("show-links");
    // }

    links.classList.toggle('show-links');
})