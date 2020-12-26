const sources = [{src:"https://www.sakicorp.com/wp-content/themes/saki_corporation/assets/images/top_img5.jpg",
                 link: "https://showroom.sakicorp.com/p/sxCS56vi"},
                {src: "https://www.sakicorp.com/wp-content/themes/saki_corporation/assets/movie/movie.mp4", link: null},
                {src: "https://www.sakicorp.com/wp-content/themes/saki_corporation/assets/images/top_img2.jpg", link: null},
                {src: "https://www.sakicorp.com/wp-content/themes/saki_corporation/assets/images/top_img3.jpg", link: null},
                {src: "https://www.sakicorp.com/wp-content/themes/saki_corporation/assets/images/top_img4.jpg", link: null}];

d3.selectAll("#slider")
    .selectAll("div")
    .data(sources)
    .enter()
    .append("div")
    .text(d => d.src.split(".").pop());

                
                
                