//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    // console.log(question);

    // We target the specific article.question container rather than document (all 3)
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', function() {

        // This forEach loop is how we have only one question box showing at a time, closing previously opened ones
        questions.forEach(function(item) {
            // The loop/conditional will check all 3 article containers and if any besides the clicked one have
            // the show-text class, then it will be removed. item and question args are the same thing.
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    })
});




// traversing the dom --> first option he showed, won't close other open boxes

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         // We don't want to just target the currentTarget (button), or even its direct parent (the title), but the entire article.question 
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text');
//     })
// })