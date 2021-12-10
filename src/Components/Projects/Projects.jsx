import React, { useState } from 'react'
import '../Projects/Projects.css'
import ProjectsData from './projects_data'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export default function Projects() {
  const [projectItems, setItems] = useState(ProjectsData);

  const filterItem = (category, btn_id) => {
    if(category === 'All'){
      setItems(ProjectsData);
    }
    else{
      const updatedPortfolio = ProjectsData.filter((curItem) => {
        return curItem.tag === category;
      });
  
      setItems(updatedPortfolio);
    }
    //Select filter button
    for(let i=1; i<= 4; i++){
      document.getElementById(`btn${i}`).classList.remove("filter-active");
    }
    document.getElementById(btn_id).classList.add("filter-active");
   
  }

  var settings = {
    dots: true,
    arrows: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  
  return (
    <div className="projects-section" id="portfolio">
      <div className="container">
        <h2 className="section-title center portfolio-h2">Our Latest Projects</h2>
        <p className="paragraph center portfolio-p"> When unknow printer took a gallery of type and scramblted it to makea type specimen book</p>

        <div className="filter-button-area">
          <button id="btn1" className="filter-button filter-active" onClick={() => filterItem('All', 'btn1')}> All </button>
          <button id="btn2" className="filter-button" onClick={() => filterItem('Development', 'btn2')}> Development </button>
          <button id="btn3" className="filter-button" onClick={() => filterItem('Web Design', 'btn3')}> Web Design </button>
          <button id="btn4" className="filter-button" onClick={() => filterItem('Marketing', 'btn4')}> Marketing </button>
        </div>

        <Slider {...settings} className="portfolio-slider">
          {
            projectItems.map((item, index) =>{
              const {image, title, tag} = item;

              return(
                <div key={index} className="portfolio-item">
                  {image}
                  <h4>{title}</h4>
                  <p>{tag}</p>

                </div>
              );
            })
          }
        </Slider>

      </div>
    </div>
  );
}
