// import logo from './logo.svg';
import './App.css';
// import mycs from './mycss.module.css'
// import './home.css'
import './css/all.min.css'
// const obj = {
//   color: "blue"
// }


function App() {
  return (
    // <div className="App">
    //   <div style={{color:"red"}}>Hello</div>
    //   <div style={obj}>good morning</div>
    //   <div class="demo">How are you?</div>
    //   <div class={mycs.test}>hello</div>
    //   <div class="abc"></div>
    //   <img src={require('./image/1.jpg')} class="img"></img>

    // </div>





    // ----------------------------------------------cdmi.in----------------------------

    // ------------------------------------start header top---------------------------------------
    <>
      <section class="header_top">
        <div class="container">
          <div class="flex1">
            <div class="flex">
              <div class="flex">
                <i class="fa-solid fa-envelope"></i>
                <p class="padding">info@cdmi.in</p>
              </div>
              <div class="flex start">
                <i class="fa-solid fa-certificate"></i>
                <p class="padding">Verify Certificate</p>
              </div>
            </div>
            <div>
              <p>HAVE ANY QUESTION ? +91 90333 16003</p>
            </div>
            <div class="flex icon">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-google-plus-g"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------end header top--------------------------------------- */}
      {/* ------------------------------------start header bottom--------------------------------------- */}

      <section class="header_bottom">
        <div class="container flex1">
          <div>
            <img class="logo_dark" src="https://www.cdmi.in/assets/front/images/creative-logo-blue.svg" alt="Creative Design &amp; Multimedia Institute" title="Creative Design &amp; Multimedia Institute">
            </img>
          </div>
          <ul class="flex main">
            <li><a href="">HOME</a></li>
            <li><a href="">COURSES<i class="fa-solid fa-angle-down"></i></a></li>
            <li><a href="">COLLAGE COURSES</a></li>
            <li><a href="">ACTIVIES<i class="fa-solid fa-angle-down"></i></a>
              <ul class="sub">
                <li><a href="">Gallery</a></li>
                <li><a href="">Events</a></li>
              </ul>
            </li>
            <li><a href="">BLOG</a></li>
            <li><a href="">KNOWN US<i class="fa-solid fa-angle-down"></i></a>
              <ul class="sub">
                <li><a href="">About us</a></li>
                <li><a href="">Success stories</a></li>
                <li><a href="">Placemenet partner</a></li>
              </ul>
            </li>
            <li><a href="">GET IN TOUCH</a></li>
            <li><a href="">STUDENT ZONE<i class="fa-solid fa-angle-down"></i></a>
              <ul class="sub">
                <li><a href="">Student Login</a></li>
                <li><a href="">Showcase</a></li>
              </ul>
            </li>
          </ul>

        </div>

      </section>
      {/* ------------------------------------end header bottom--------------------------------------- */}
      {/* ----------------------------start slider section----------------------------------------------- */}

      <section>
        <div class="main_img">
          <img src={require('./image/slider.jpeg')}></img>
        </div>
        <div>
        <a href="#" class="scrollup" title="Go to top">
        <i class="fa-solid fa-angle-up"></i></a>
        </div>
        <div class="msg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" height="32px" width="32px" role="img" alt="Chat icon" class="chat"><path fill-rule="evenodd" clip-rule="evenodd" d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"></path></svg>
        </div>
        
      </section>
      {/* ----------------------------end slider section----------------------------------------------- */}
      {/* ----------------------------start courses section----------------------------------------------- */}
      <section class="spacer_y courses">
        <div class="container">
          <div class="head_main flex_center">
            <span class="sub_head">Creative Course</span>
          </div>
          <h2 class="main_head flex_center">Offered Courses</h2>
          <div class="flex">
            <div class="box_main">
              <video autoplay="true" muted loop>
                <source src="https://cdmi.in/course_category/multimedia-training-institute.mp4" type="video/mp4"></source>
              </video>
              <div class="content_desc">
                <h4 class="content_title">
                  <a href="https://cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">Multimedia Courses</a>
                </h4>
              </div>
              <div class="content_footer">
                <div class="rating_stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div class="price">
                  <a class="btn btn_com" href="https://cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">Know More..!</a>
                </div>
              </div>
            </div>
            <div class="box_main">
              <video autoplay="true" muted loop>
                <source src="https://cdmi.in/course_category/graphics-animation-course.mp4" type="video/mp4"></source>
              </video>
              <div class="content_desc">
                <h4 class="content_title">
                  <a href="https://cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">UI/UX & Graphics Design</a>
                </h4>
              </div>
              <div class="content_footer">
                <div class="rating_stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div class="price">
                  <a class="btn btn_com" href="https://cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">Know More..!</a>
                </div>
              </div>
            </div>
            <div class="box_main">
              <video autoplay="true" muted loop>
                <source src="https://cdmi.in/course_category/it-training-institute.mp4" type="video/mp4"></source>
              </video>
              <div class="content_desc">
                <h4 class="content_title">
                  <a href="https://cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">Programming IT</a>
                </h4>
              </div>
              <div class="content_footer">
                <div class="rating_stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div class="price">
                  <a class="btn btn_com" href="https://cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">Know More..!</a>
                </div>
              </div>
            </div>
          </div>


          <div class="flex">
            <div class="box_main">
              <video autoplay="true" muted loop>
                <source src="https://cdmi.in/course_category/letest-technology-course.mp4" type="video/mp4"></source>
              </video>
              <div class="content_desc">
                <h4 class="content_title">
                  <a href="https://cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">Trendy Courses</a>
                </h4>
              </div>
              <div class="content_footer">
                <div class="rating_stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div class="price">
                  <a class="btn btn_com" href="https://cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">Know More..!</a>
                </div>
              </div>
            </div>
            <div class="box_main">
              <video autoplay="true" muted loop>
                <source src="https://cdmi.in/course_category/civil-engineering-course.mp4" type="video/mp4"></source>
              </video>
              <div class="content_desc">
                <h4 class="content_title">
                  <a href="https://cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">Civil-Mech. Engineering</a>
                </h4>
              </div>
              <div class="content_footer">
                <div class="rating_stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div class="price">
                  <a class="btn btn_com" href="https://cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">Know More..!</a>
                </div>
              </div>
            </div>
            <div class="box_main">
              <video autoplay="true" muted loop>
                <source src="https://cdmi.in/course_category/mechanical-engineering-course.mp4" type="video/mp4"></source>
              </video>
              <div class="content_desc">
                <h4 class="content_title">
                  <a href="https://cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">Business Development</a>
                </h4>
              </div>
              <div class="content_footer">
                <div class="rating_stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div class="price">
                  <a class="btn btn_com" href="https://cdmi.in/courses/multimedia-course-training" title="Multimedia Courses">Know More..!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn1_main">
          <a href="https://cdmi.in/courses/computer-training-course" class="btn1 btn_com" title="View all courses">View All Courses <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </section>

      {/* ----------------------------end courses section----------------------------------------------- */}
      {/* ----------------------------start about us section----------------------------------------------- */}

      <section class="about">
        <div class="flex">
          <div class="w_60">
            <div class="head_right">
              <span class="sub_head">ABOUT US</span>
              <h1 class="main_right">IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h1>
              <p class="about_content">
                Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 8 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
              </p>
              <a href="https://cdmi.in/courses/computer-training-course" class="btn1 btn_com" title="View all courses">Enroll Now...! <i class="fa-solid fa-arrow-right"></i></a>
            </div>

          </div>
          <div class="w-40">
            <div class="v_icon">
              <a href="https://www.youtube.com/watch?v=Vnap7ADkQKA" title="View on youtube" class="video_popup video_play">
                <i class="fa-solid fa-play"></i>
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* ----------------------------end about us section----------------------------------------------- */}
      {/* ----------------------------start number u section----------------------------------------------- */}

      <section class="number">
        <div class="number_img">
          <div class="container flex">
            <div class="">
              <div class="number_icon"></div>
              <h3 class="counter_text">
                8000+
              </h3>
              <p class="counter_sub">HAPPY STUDENTS</p>
            </div>
            <div class="counter">
              <div class="number_icon1"></div>
              <h3 class="counter_text ">
                10+
              </h3>
              <p class="counter_sub">CERTIFICATION APPROVAL
              </p>
            </div>
            <div class="counter">
              <div class="number_icon2"></div>
              <h3 class="counter_text">
                60+
              </h3>
              <p class="counter_sub">CERTIFIED TEACHERS</p>
            </div>
            <div class="counter">
              <div class="number_icon3"></div>
              <h3 class="counter_text">
                4000+
              </h3>
              <p class="counter_sub">STUDENTS PLACED</p>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------------end number  section----------------------------------------------- */}
      {/* ----------------------------start testmonial  section----------------------------------------------- */}

      <section class="testi">
        <div class="container flex">
          <div class="w-50">
            <div class="head_main flex">
              <span class="sub_head">HAPPY STUDENTS</span>
            </div>
            <h2 class="main_head flexr">ALUMNI SPEAK</h2>
            <div class="testi_icon">
              <input type="button" id="pre" value="<">
              </input>
              <input type="button" id="next" value=">"></input>
            </div>
            <p class="testi_content">I really enjoyed learning Game Development at Creative Design &amp; Multimedia Institute(CDMI). The faculties here helped me gain knowledge and guided me to improve my skills. The Placement department and management made sure that all the students got placed in good jobs. Thanks to Creative Design &amp; Multimedia Institute(CDMI).&nbsp;
            </p>
            <div class="flex">
              <div class="testi_img">
                <img src={require('./image/testi.jpeg')}></img>
              </div>
              <div class="m_l">
                <h6 class="testi_head">Hirpara rushik</h6>
                <div class="flex">
                  <span class="testi_sub">Game Developer</span>
                  <span class="testi_sub1">@ Viaxor</span>
                </div>
              </div>
            </div>
          </div>

          <div class="w-50">
            <div class="happy">
              <img src={require('./image/shape.png')}></img>
              <div class="back">
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------------end testimonial  section----------------------------------------------- */}
      {/* ----------------------------start why choose  section----------------------------------------------- */}
      <section class="spacer_y1 why">
        <div class="container">
          <div class="head_main flex_center">
            <span class="sub_head">READ OUR DIFFERENCE</span>
          </div>
          <h2 class="main_head flex_center">WHY CHOOSE CREATIVE</h2>
          <div class="flex">
            <div class="why_box">
              <div class="why_img"></div>
              <h3 class="why_main">Industry Experts As Trainers</h3>
              <p class="why_sub">
                Our trainers have 5+ years of industry<br></br> experience coupled with extensive<br></br> research and analysis.
              </p>
            </div>

            <div class="why_box">
              <div class="why_img1"></div>
              <h3 class="why_main">Latest Curriculum</h3>
              <p class="why_sub">
                We Provides latest curriculum for all  <br></br> courses which designed in such a way <br></br>that Students will get full knowledge time.
              </p>
            </div>

            <div class="why_box">
              <div class="why_img2"></div>
              <h3 class="why_main">Latest Technology</h3>
              <p class="why_sub">
                We strive to let you have a solid<br></br> foundational knowledge of technologies<br></br> shaping the IT World today.
              </p>
            </div>
          </div>


          <div class="flex">
            <div class="why_box">
              <div class="why_img3"></div>
              <h3 class="why_main">Interview Assistance</h3>
              <p class="why_sub">
                At the end of each training,our training <br></br>instructor will go through the possible<br></br> technical questions you may be asked.
              </p>
            </div>

            <div class="why_box">
              <div class="why_img4"></div>
              <h3 class="why_main">Free Upgradation</h3>
              <p class="why_sub">
                We will be provided free upgradation for<br></br> any newer version of the course you<br></br> have.
              </p>
            </div>

            <div class="why_box">
              <div class="why_img5"></div>
              <h3 class="why_main">Lifetime Support</h3>
              <p class="why_sub">
                We will provide you lifetime support on <br></br>all the courses you learned from us.
              </p>
            </div>
          </div>
        </div>

      </section>
      {/* ----------------------------end why choose  section----------------------------------------------- */}
      {/* ----------------------------start placement  section----------------------------------------------- */}
      <section class="spacer_y1">
        <div class="container">
          <div class="head_main flex_center">
            <span class="sub_head">STUDENT PLACEMENT</span>
          </div>
          <h2 class="main_head flex_center">OUR RECRUITMENT PARTNERS</h2>

          <div class="flex student">
            <img src={require('./image/stu1.png')}></img>
            <img src={require('./image/stu2.png')}></img>
            <img src={require('./image/stu3.png')}></img>
            <img src={require('./image/stu4.png')}></img>
            <img src={require('./image/stu5.png')}></img>
            <img src={require('./image/stu6.jpeg')}></img>
          </div>
        </div>
      </section>
      {/* ----------------------------end placement section----------------------------------------------- */}
      {/* ----------------------------start demand section----------------------------------------------- */}

      <section class="demand_course">
        <div class="container">
          <h5 class="demand">Our Demanded Course -</h5>
          <div class="tags">
            <a href="https://www.cdmi.in/wordpress-training-in-surat" title="wordpress training institute in varachha" class="text-capitalize">wordpress training institute in varachha</a>
            <a href="https://www.cdmi.in/courses/computer-institute-in-surat" title="computer institutes in katargam" class="text-capitalize">computer institutes in katargam</a>
            <a href="https://www.cdmi.in/courses/mechanical-engineering-training" title="mechanical engineering training course" class="text-capitalize">mechanical engineering training course</a>
            <a href="https://www.cdmi.in/c-programming-course" title="C programming language training institute in varachha" class="text-capitalize">C programming language training institute in varachha</a>
            <a href="https://www.cdmi.in/adobe-illustrator-course" title="Illustrator training in katargam" class="text-capitalize">Illustrator training in katargam</a>
            <a href="https://www.cdmi.in/ccc-course-in-surat" title="Learn Basic Computer Course from the best computer institute in surat" class="text-capitalize">Learn Basic Computer Course from the best computer institute in surat</a>
            <a href="https://www.cdmi.in/react-js-training-in-surat" title="react js training course" class="text-capitalize">react js training course</a>
            <a href="https://www.cdmi.in/coreldraw-training-surat" title="coreldraw training course" class="text-capitalize">coreldraw training course</a>
            <a href="https://www.cdmi.in/lumion-course-surat" title="Lumion civil training course" class="text-capitalize">Lumion civil training course</a>
            <a href="https://www.cdmi.in/courses/graphics-design-training" title="Animation training institute in katargam" class="text-capitalize">Animation training institute in katargam</a>
            <a href="https://www.cdmi.in/wordpress-training-in-surat" title="Wordpress company in surat" class="text-capitalize">Wordpress company in surat</a>
            <a href="https://www.cdmi.in/laravel-training-in-surat" title="Laravel training institute in adajan" class="text-capitalize">Laravel training institute in adajan</a>
            <a href="https://www.cdmi.in/photoshop-course-in-surat" title="Photoshop training institute" class="text-capitalize">Photoshop training institute</a>
            <a href="https://www.cdmi.in/php-training-in-surat" title="PHP company in surat" class="text-capitalize">PHP company in surat</a>
            <a href="https://www.cdmi.in/graphic-design-course-surat" title="Graphics Design Course in Surat" class="text-capitalize">Graphics Design Course in Surat</a>
            <a href="https://www.cdmi.in/react-js-training-in-surat" title="Best react js training institute" class="text-capitalize">Best react js training institute</a>
            <a href="https://www.cdmi.in/php-training-in-surat" title="PHP Project Training in Surat" class="text-capitalize">PHP Project Training in Surat</a>
            <a href="https://www.cdmi.in/autodesk-maya-training" title="Maya 3d animation training institute in surat" class="text-capitalize">Maya 3d animation training institute in surat</a>
            <a href="https://www.cdmi.in/android-training-surat" title="Android training in katargam" class="text-capitalize">Android training in katargam</a>
            <a href="https://www.cdmi.in/adobe-xd-training-surat" title="Adobe xd design training institute in adajan" class="text-capitalize">Adobe xd design training institute in adajan</a>

          </div>
          <a href="https://www.cdmi.in/adobe-xd-training-surat" class="show_more" title="View more courses">Show More</a>
        </div>
      </section>

      {/* ----------------------------end demand section----------------------------------------------- */}
      {/* ----------------------------start footer section----------------------------------------------- */}

      <section class="footer spacer_y1">
        <div class="container">
          <div class="flex">
            <div class="footer_part">
              <div class="logo_f">
                <img alt="Best Web Design Institute in Surat" title="Best Web Design Institute in Surat" src="https://cdmi.in/assets/front/images/creative-logo-white.svg"></img>
              </div>
              <p class="logo_con">Creative Design and Multimedia Institute<br></br> is leading computer training institute in<br></br> surat. We offers government approved <br></br>computer training courses in Surat.</p>
              <h5 class="follow">FOLLOW US ON</h5>
              <ul class="flex footer_icon">
                <li><a href="https://www.facebook.com/CreativeMultimediaInstituteSurat" rel="nofollow" target="_blank" title="Follow us on facebook" class="footer_i">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                </li>
                <li><a href="https://www.facebook.com/CreativeMultimediaInstituteSurat" rel="nofollow" target="_blank" title="Follow us on twitter"
                  class="footer_i">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                </li>
                <li><a href="https://www.facebook.com/CreativeMultimediaInstituteSurat" rel="nofollow" target="_blank" title="Follow us on facebook" class="footer_i">
                  <i class="fa-brands fa-google-plus-g"></i>
                </a>
                </li>
                <li><a href="https://www.facebook.com/CreativeMultimediaInstituteSurat" rel="nofollow" target="_blank" title="Follow us on linkedin" class="footer_i">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                </li>
                <li><a href="https://www.facebook.com/CreativeMultimediaInstituteSurat" rel="nofollow" target="_blank" title="Follow us on instagram" class="footer_i" >
                  <i class="fa-brands fa-instagram"></i>
                </a>
                </li>
                <li><a href="https://www.facebook.com/CreativeMultimediaInstituteSurat" rel="nofollow" target="_blank" title="Follow us on youtube" class="footer_i">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                </li>
                <li><a href="https://www.facebook.com/CreativeMultimediaInstituteSurat" rel="nofollow" target="_blank" title="Follow us on whatsapp" class="footer_i">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
                </li>
              </ul>
            </div>

            <div class="footer2  footer_part">
              <h6 class="link">FEATURE LINKS</h6>
              <ul class="link_inner">
                <li><a href="https://cdmi.in/about-us" title="Know about Creative Multimedia institute">About Us</a></li>
                <li><a href="https://cdmi.in/about-us" title="Know about Creative Multimedia institute"> Blogs</a></li>
                <li><a href="https://cdmi.in/about-us" title="Know about Creative Multimedia institute">Join Us</a></li>
                <li><a href="https://cdmi.in/about-us" title="Know about Creative Multimedia institute">Company Login</a></li>
                <li><a href="https://cdmi.in/about-us" title="Know about Creative Multimedia institute">Certificate Verification</a></li>
              </ul>
            </div>


            <div class="footer_part footer2">
              <h6 class="link">TRENDY COURSES</h6>
              <ul class="link_inner">
                <li><a href="https://cdmi.in/about-us" title="Know about Creative Multimedia institute">Phthon course training</a></li>
                <li><a href="https://cdmi.in/about-us" title="Know about Creative Multimedia institute"> Node JS course training</a></li>
                <li><a href="https://cdmi.in/about-us" title="Know about Creative Multimedia institute"> Angular JS course<br></br> training</a></li>
                <li><a href="https://cdmi.in/about-us" title="Know about Creative Multimedia institute"> React JS course training</a></li>
                <li><a href="https://cdmi.in/about-us" title="Know about Creative Multimedia institute">Unity 3D course training</a></li>
                <li><a href="https://cdmi.in/about-us" title="Know about Creative Multimedia institute">Ethical Hacking course<br></br> training</a></li>
                <li><a href="https://cdmi.in/about-us" title="Know about Creative Multimedia institute">React Native course<br></br> training</a></li>
                <li><a href="https://cdmi.in/about-us" title="Know about Creative Multimedia institute">Desktop App <br></br> Development course<br></br> training</a></li>
                <li><a href="https://cdmi.in/about-us" title="Know about Creative Multimedia institute">Advanced ASP.net<br></br> development course<br></br> training</a></li>
              </ul>
            </div>

            <div class="footer_part footer2">
              <h6 class="link">OUR BRANCHES</h6>
              <div>
                <h5 class="branch">HEAD OFFICE - YOGICHOWK</h5>
                <p class="branch_con ">401-404, 4th Floor, City Center Complex, Nr. Yogichowk, <br></br>Varachha, Surat</p>
                <p class="mo">Mo :<span class="mo_dark">  +91 90333 16003,</span></p>
              </div>

              <div>
                <h5 class="branch">BRANCH 1 - KATARGAM</h5>
                <p class="branch_con ">327-334, 3rd Floor, Laxmi Enclave, Opp. Gajera School, <br></br>Katargam, Surat</p>
                <p class="mo">Mo :<span class="mo_dark">  +91 90333 35009,</span></p>
              </div>

              <div>
                <h5 class="branch">BRANCH 1 - MOTA  VARACHHA</h5>
                <p class="branch_con ">B 201-203, 2nd Floor, Aditya Complex, VIP Circle, Utran<br></br>Mota Varachha,Surat</p>
                <p class="mo">Mo :<span class="mo_dark">   +91 945 945 9673</span></p>
              </div>
              <div class="last_btn">
              <span class="flex">
              <i class="fa-solid fa-binoculars"></i>
              Get Virtual Tour
              </span>
            </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* ----------------------------end footer section----------------------------------------------- */}
      {/* ----------------------------start footer-bottom section----------------------------------------------- */}
      <section class="bottom">
          <div class="container">
            <p class="bo_con">© 2022 All Rights Reserved by Creative Design & Multimedia Institute.</p>
          </div>
      </section>
      {/* ----------------------------end footer -bottom section----------------------------------------------- */}

















    </>
  );
}

export default App;





