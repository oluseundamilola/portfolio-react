import { useState } from "react"
import "./work.scss"

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "lorem ipsum dolor sit amet, consectetur adipisicing",
      img: "./assets/10.jpg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Design",
      desc: "lorem ipsum dolor sit amet, consectetur adipisicing",
      img: "./assets/12.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "lorem ipsum dolor sit amet, consectetur adipisicing",
      img: "./assets/17.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }

  return (
    <div className='works' id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.desc}
                </p>
                <span>Project</span>
              </div>
            </div>

            <div className="right">
              <img src="assets/17.jpg" alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" alt="" className="arrow left" onClick={()=>handleClick("left")} />
      <img src="assets/arrow.png" alt="" className="arrow right" onClick={()=>handleClick()} />

    </div>
  )
}

export default Work