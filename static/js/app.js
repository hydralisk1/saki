d3.select(".top-menu-area")
    .selectAll("li")
    .on("mouseover", function() {
        d3.select(this)
            .select("div")
            .classed("mouseon", true);
    })
    .on("mouseout", function() {
        d3.select(this)
            .select("div")
            .classed("mouseon", false);
    });

var click_search = false;
var click_language = false;

d3.selectAll("#search")
    .on("click", function() {
        click_search = !click_search;
        d3.selectAll(".search")
            .classed("w300", click_search);
    });

d3.selectAll("#language")
    .on("click", function() {
        click_language = !click_language;
        d3.selectAll(".language")
            .classed("language_show", click_language);
    });