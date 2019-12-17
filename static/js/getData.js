var viz, sheet, table;

function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/RegionalSampleWorkbook/Storms",
        options = {
            hideTabs: true,
            hideToolbar: true,
            onFirstInteractive: function () {
                document.getElementById('getData').disabled = false; // Enable our button
            }
        };
    viz = new tableau.Viz(containerDiv, url, options);
}

function getUnderlyingData() {
    sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Storm Map Sheet");
    options = {
        maxRows: 10, // Max rows to return. Use 0 to return all rows
        ignoreAliases: false,
        ignoreSelection: true,
        includeAllColumns: false
    };

    sheet.getUnderlyingDataAsync(options).then(function (t) {
        table = t;
        var tgt = document.getElementById("dataTarget");
        tgt.innerHTML = "<h4>Underlying Data:</h4><p>" + JSON.stringify(table.getData()) + "</p>";
    });
}