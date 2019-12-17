var viz;

function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/RegionalSampleWorkbook/Obesity",
        options = {
            hideTabs: true
        };

    viz = new tableau.Viz(containerDiv, url, options);
    // Create a viz object and embed it in the container div.
}

function exportToPDF() {
    viz.showExportPDFDialog();
}