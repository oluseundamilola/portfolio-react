import "./testimonials.scss"

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Ashley Matew",
      title:"Cheif of exo",
      img: "assets/profile.jpg",
      icon:"assets/twitter.png",
      desc: "Licing elit. Impedit eius tenetur enim ea voluptatem explicabo molestias illum! Nisi, commodi istuaerat cum eveniet dolorum!"
    },
    {
      id: 2,
      name: "Sekani Adris",
      title:"Staff",
      img: "assets/profile.jpg",
      icon:"assets/linkedin.png",
      desc: "Licing elit. Impedit eius tenetur enim ea voluptatem explicabo molestias illum! Nisi, commodi istuaerat cum eveniet dolorum!",
      featured: true,
    },
    {
      id: 3,
      name: "Mark James",
      title:"Cheif of HOD",
      img: "assets/profile.jpg",
      icon:"assets/youtube.png",
      desc: "Licing elit. Impedit eius tenetur enim ea voluptatem explicabo molestias illum! Nisi, commodi istuaerat cum eveniet dolorum!"
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img src={d.img} alt="" className="user" />
            <img src={d.icon} alt="" className="right" />
          </div>
          <div className="center">
            {d.desc} 
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>

        ))}
      </div>
    </div>
  )
}

export default Testimonials