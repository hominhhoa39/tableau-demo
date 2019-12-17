var viz;

function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/RegionalSampleWorkbook/Stocks",
        options = {
            hideTabs: true
        };

    viz = new tableau.Viz(containerDiv, url, options);
}

function vizResize() {
    var width = document.getElementById("resizeWidth").value;
    var height = document.getElementById("resizeHeight").value;

    viz.setFrameSize(parseInt(width, 10), parseInt(height, 10));
}