import * as d3 from 'd3';

let canvas = d3.select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)

let rectangle = canvas.append("rect")
    .attr("y", 100)
    .attr("width", 500)
    .attr("height", 300)
    .attr("fill", "red");

let circle = canvas.append("circle")
    .attr("cx", 250)
    .attr("cy", 250)
    .attr("r", 50)
    .attr("fill", "blue");