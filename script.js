document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("applicationForm");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            alert("✅ Thank you for applying to the NextDrive EV Internship Programme. Your application has been received successfully.");

            form.reset();

        });

    }

});
