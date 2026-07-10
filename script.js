document.addEventListener("DOMContentLoaded", function () {

    // Application form
    const form = document.getElementById("applicationForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            alert("✅ Thank you for applying to the NextDrive EV Internship Programme. Your application has been received successfully.");

            form.reset();
        });
    }

    // Internship search
    const search = document.getElementById("search");
    const jobs = document.querySelectorAll(".job-card");

    if (search) {
        search.addEventListener("keyup", function () {
            const value = search.value.toLowerCase();

            jobs.forEach(function (job) {
                if (job.innerText.toLowerCase().includes(value)) {
                    job.style.display = "block";
                } else {
                    job.style.display = "none";
                }
            });
        });
    }

});
