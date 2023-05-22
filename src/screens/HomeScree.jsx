import '../styles/home.css';
import icon from '../assets/mountain.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HomeScreen() {
    return (
        <div className="container">
            <div className='first'>
                <header>
                    <img src={icon} alt="" />
                    <ul>
                        <a href="#second"><li>01. history</li></a>
                        <a href="#third"><li>02. team</li></a>
                    </ul>
                </header>
            </div>
            <SecondScreen />
            <div>
                <section className='climb'>
                    <div>
                        <h1>01.<span>CLIMB</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus molestias necessitatibus totam, odio porro deserunt velit ea dolore.</p>
                    </div>
                </section>
            </div>
            <div className='mount'>
                <ul>
                    <li>MOUNTAIN 1</li>
                    <li>MOUNTAIN 2</li>
                </ul>
            </div>

            <ThirdScreen />
            <footer><div>
                    <img src={icon} alt="" />
                    <h1>
                    losangeles<br></br>mountains
                </h1>
                </div>
                <p>copyright 2016, all rights reserved</p>
            </footer>
        </div>
    )
}

function SecondScreen() {
    return (
        <div id='second'>
            <header>
                <div>
                    <img src={icon} alt="" />
                    <h1>
                    losangeles<br></br>mountains
                </h1>
                </div>
                <ul>
                    <a href='#second'><li>01. history</li></a>
                    <a href='#third'><li>02. teams</li></a>
                </ul>
            </header>
            <section className='history'>
                <div>
                <h1>01.<span>HISTORY</span></h1>
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti consectetur quae asperiores earum quo veritatis non, placeat voluptas voluptatibus laboriosam provident quis nobis aliquam debitis quaerat, numquam doloribus repellendus voluptates?
                    Nesciunt harum ullam officiis id. Quo porro saepe perspiciatis obcaecati.
                </p>
            </section>
            <div className='carousel-box'>
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{ delay: 4090 }}
            pagination = {true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {Carousel()}
            {Carousel()}
            {Carousel()}
            {Carousel()}
          </Swiper>
            </div>
        </div>
    )
}

function ThirdScreen() {
    return (
       <div id='third'>
        <section>
            <div className='box'>
                <h1>SCHEDULES</h1>
                <section>
                <div>
                    <p>25 Nov 2016</p>
                    <p>28 Nov 2016</p>
                    <p>18 Dec 2016</p>
                    <p>7 Jan 2017</p>
                </div>
                <div>
                    <p>Vestibulum viverra</p>
                    <p>Vestibulum viverra</p>
                    <p>Vestibulum viverra</p>
                    <p>Vestibulum viverra</p>
                </div>
                </section>
            </div>
        </section>
       </div> 
    )
}

function Carousel() {
    return (
        <SwiperSlide>
        <section className='carousel'>
            <div className='box1'></div>
            <div className='box2'></div>
            <div className='box1'></div>
            <div className='box2'></div>
        </section>
        </SwiperSlide>
    )
}

export default HomeScreen;