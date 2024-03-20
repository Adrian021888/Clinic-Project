document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modal");

    var closeBtn = document.getElementsByClassName("close")[0];

    function generateReports() {
        // clinic income report
        var clinicIncomeReport = "Clinic Income Report: $ ";
        // doctor salaries report
        var doctorSalariesReport = "Doctor Salaries Report: $"; 
        // number of patients report
        var numberOfPatientsReport = "Number of Patients Report: "; 

        var allReports = clinicIncomeReport + "<br>" + doctorSalariesReport + "<br>" + numberOfPatientsReport;

        document.getElementById("reportsContent").innerHTML = "<h2>Reports</h2>" + allReports;

        modal.style.display = "block";
    }

    document.getElementById("reportsButton").addEventListener("click", function () {
        generateReports();
    });

    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
