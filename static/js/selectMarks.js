var viz, sheet;

function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/RegionalSampleWorkbook/College",
        options = {
            "Academic Year": "",
            hideTabs: true,
            onFirstInteractive: function () {
                sheet = viz.getWorkbook().getActiveSheet();
            }
        };

    viz = new tableau.Viz(containerDiv, url, options);
}

function selectCollege(college_name) {
    sheet.selectMarksAsync("College", college_name, tableau.SelectionUpdateType.REPLACE);
}

function addCollegeToSelection(college_name) {
    sheet.selectMarksAsync("College", college_name, tableau.SelectionUpdateType.ADD);
}

function clearCollegeSelection() {
    sheet.clearSelectedMarksAsync();
}