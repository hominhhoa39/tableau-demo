var viz;

function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/RegionalSampleWorkbook/College",
        options = {
            "Academic Year": "",
            hideTabs: true
        };

    viz = new tableau.Viz(containerDiv, url, options);
}

function yearFilter(year) {
    var sheet = viz.getWorkbook().getActiveSheet();
    if (year === "") {
        sheet.clearFilterAsync("Academic Year");
    } else {
        sheet.applyFilterAsync("Academic Year", year, tableau.FilterUpdateType.REPLACE);
    }
}