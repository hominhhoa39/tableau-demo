function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://eu-west-1a.online.tableau.com/t/minhoa/views/GlobalSuperstore/Dashboard?:origin=card_share_link&:embed=n",
        options = {
            hideTabs: true,
			hideToolbar: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

    var viz = new tableau.Viz(containerDiv, url, options);
}