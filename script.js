document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("applicationForm");

    if (form) {

        form.addEventListener("submit", function(e) {

            e.preventDefault();

            alert("✅ Thank you for applying to the NextDrive EV Internship Programme. Your application has been received successfully.");

            form.reset();

        });

    }

});

// Internship Search Function
function searchJobs() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let jobs = document.querySelectorAll(".job-card");

    jobs.forEach(function(job) {

        let text = job.textContent.toLowerCase();

        if (text.includes(input)) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }

    });

}
