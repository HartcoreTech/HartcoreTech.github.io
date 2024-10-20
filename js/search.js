// Search functionality
document.getElementById('searchBar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const projects = document.querySelectorAll('.project');

    projects.forEach((project) => {
        const title = project.querySelector('h3').innerText.toLowerCase();
        const techStack = project.querySelector('h4').innerText.toLowerCase();

        // Check if query matches either the title or the tech stack
        if (title.includes(query) || techStack.includes(query)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});
