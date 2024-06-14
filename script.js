function showNext(id) {
    // Hide all questions and results
    let elements = document.querySelectorAll('.question, .result');
    elements.forEach(el => el.style.display = 'none');

    // Show the next question or result
    document.getElementById(id).style.display = 'block';
}
