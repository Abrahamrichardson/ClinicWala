import React, { useEffect, useState } from "react";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { Container, Row, Col, Button, Modal ,Form } from "react-bootstrap";
import me1 from "../assets/telemedicine.mp4"
import me2 from "../assets/our_team.jpg";
import me3 from "../assets/43.jpg";
import me4 from "../assets/4.jpg";
import me5 from "../assets/5.jpg";
import me6 from "../assets/6.jpg";
import me7 from "../assets/7.jpg";
import me8 from "../assets/8.jpg";
import me9 from "../assets/9.jpg";
import me10 from "../assets/10.jpg";
import me11 from "../assets/11.jpg";
import me12 from "../assets/12.jpg";
import me13 from "../assets/13.jpg";
import me14 from "../assets/25.jpg";
import me15 from "../assets/eclinic.png";
import me16 from "../assets/school.png";
import me17 from "../assets/gym.png";
import me18 from "../assets/corporate.png";
import me19 from "../assets/recipes.png";
import me20 from "../assets/diet_plan.png";
import me21 from "../assets/advisor.png";
import me22 from "../assets/indian.png";
import me23 from "../assets/31.png";
import me24 from "../assets/7.png";
import me25 from "../assets/32.png";
import me26 from "../assets/33.png";
import me27 from "../assets/ayurveda.png";
import me28 from "../assets/homeopathy.png";
import me29 from "../assets/naturopathy.png";
import me30 from "../assets/unanimedicine.png";
import me31 from "../assets/acupuncture.png";
import me32 from "../assets/aromatherapy.png";
import me33 from "../assets/eyecare.png";
import me34 from "../assets/haircare.png";
import me35 from "../assets/skincare.png";
import me36 from "../assets/medicinalplants.png";
import me37 from "../assets/remedies.png";
import me38 from "../assets/yoga.png";
import me39 from "../assets/map.png";
import me40 from "../assets/camp.png";
import "./Home.css";
import { useTranslation } from 'react-i18next';



const Home = () => {
  const words = ["HOSPITALS", "DOCTORS", "LABS"];
  const [index, setIndex] = useState(0);
   const { t } = useTranslation();

   const navigate = useNavigate();

 

  // ✅ STATES (PASTE HERE)
  const [showContact, setShowContact] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = contactForm;

    if (!name || !email || !phone || !message) {
      alert("❌ Please fill all fields");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("❌ Enter valid 10-digit phone number");
      return;
    }

    setSuccessMsg(true);

    setContactForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setSuccessMsg(false);
      setShowContact(false);
    }, 2000);
  };

  



  // change words every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500);
     AOS.init({ duration: 1000 });
    return () => clearInterval(interval);

    
  }, []);
  

const [showModal, setShowModal] = useState(false);
const [selectedDoctor, setSelectedDoctor] = useState(null);

const handleDoctorClick = (doctor) => {
  setSelectedDoctor(doctor);
  setShowModal(true);
};





  return (

    // {.../section 1/...}
    
    <section className="section-animation">
    <div className="video-section">
      {/* Background Video */}
      <video
        className="background-video"
        src={me1}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Text Overlay */}
      <div className="overlay">
        <div className="Words" data-aos="fade-right">
          <h1 className="heading">
            BEST <span className="word-swap">{words[index]}</span>
          </h1>

          <p className="fade-text">
            Clinicwala is leading the way in telemedicine innovation across
            India, delivering a comprehensive range of services including online
            doctor consultations, eClinic franchise opportunities, electronic
            health record (EHR) management, and personalized appointments with
            certified dietitians. We are committed to transforming healthcare by
            making it more accessible, efficient, and patient-centric.
          </p>

          <Button className="btn-jump" onClick={() => navigate("/services")}>
  Our Services →
</Button>

        </div>
      </div>
    </div>  

   
    <Container
  fluid
  id="second-section"
  className="welcome-section mt-5 mb-5"
  style={{
    width: "83%",
    paddingRight: "calc(1.5rem * 0.5)",
    paddingLeft: "calc(1.5rem * 0.5)",
    marginRight: "auto",
    marginLeft: "auto",
  }}
  data-aos="fade-left"
>
  <Row className="align-items-center">
    <Col md={7}>
      <h5 className="text-primary mb-3">— WELCOME TO CLINICWALA.COM</h5>
      <h4><strong>Innovation. Integrity. Excellence.</strong></h4>

      <p className="mt-3">
        Clinicwala.com, a division of Medical Network Pvt. Ltd., is committed
        to delivering next-generation healthcare solutions. Our comprehensive
        suite of services includes Pathology, Telemedicine, Electronic Health
        Record (EHR) management, Dietary Consultation, and specialized
        software tools for medical professionals.
      </p>

      <p>
        We also facilitate online doctor appointments and offer healthcare
        referral programs, making quality healthcare more accessible and
        efficient. As we continue to grow, our mission is to extend our
        reach, broaden our service offerings, and consistently deliver
        exceptional, patient-centric care.
      </p>
    </Col>

    <Col md={5} className="text-center">
      <img
        src={me2}
        alt="Clinicwala Doctors"
        className="img-fluid rounded"
      />
    </Col>
  </Row>
</Container>




      {/* section 3 */}
<Container
  fluid
  id="our-services"
  className="departments-section py-5"
  style={{
    width: "83%",
    paddingRight: "calc(1.5rem * 0.5)",
    paddingLeft: "calc(1.5rem * 0.5)",
    marginRight: "auto",
    marginLeft: "auto",
  }}
  data-aos="fade-right"
>
  <Row className="justify-content-center">
    <Col md={10} className="text-center" style={{ width: "100%" }}>
      <h6 className="text-primary mb-3">
        <span className="line"></span> OUR DEPARTMENTS
      </h6>

      {/* Tabs */}
      <div className="dept-tabs d-flex justify-content-center flex-wrap">
        <button
          className="dept-btn active"
          onClick={() => navigate("/telemedicine")}
        >
          Tele Medicine
        </button>

        <button
          className="dept-btn"
          onClick={() => navigate("/pathology")}
        >
          Pathology
        </button>

        <button
          className="dept-btn"
          onClick={() => navigate("/health-records")}
        >
          Health Records
        </button>

        <button
          className="dept-btn"
          onClick={() => navigate("/food-diet")}
        >
          Food & Diet
        </button>

        <button
          className="dept-btn"
          onClick={() => navigate("/referral")}
        >
          Referral
        </button>
      </div>

      {/* Content Box */}
      <div className="dept-content text-start" style={{ marginTop: "1px" }}>
        <h4>Telemedicine</h4>
        <p>
          Clinicwala’s Telemedicine platform enables seamless access to
          specialists and super-specialists, regardless of their geographical
          location. Using our advanced software equipped with audio-visual
          capabilities and integrated medical devices, we bridge the gap between
          patients at our healthcare centers and expert doctors at remote
          locations. This technology-driven service enhances healthcare delivery
          by offering timely, remote consultations, real-time health monitoring,
          and digital management of medications and symptoms. Through online
          consultations and mobile health apps, Telemedicine improves
          accessibility, convenience, and clinical outcomes, making quality care
          more efficient and patient-centric.
        </p>

        <Button
          variant="light"
          className="dept-btn-learn"
          onClick={() => navigate("/telemedicine")}
        >
          Telemedicine →
        </Button>
      </div>
    </Col>
  </Row>
</Container>


      





{/* SECTION 4 */}
<Container fluid id="online-appointment" className="doctor-section py-5"style={{
    width: "83%",
    paddingRight: "calc(1.5rem * 0.5)",
    paddingLeft: "calc(1.5rem * 0.5)",
    marginRight: "auto",
    marginLeft: "auto",
  }} data-aos="flip-left">

  <Row className="justify-content-center mb-4">
    <Col md={10} className="text-center gap-4 d-flex justify-content-between">
      <h4 className="text-primary fw-bold">ONLINE DOCTOR APPOINTMENT</h4>
      <Button className="meet-btn" onClick={() => navigate("/doctors")}>
  Meet Doctors →
</Button>

    </Col>
  </Row>

  <Row className="justify-content-center">

    {/* Doctor 1 */}
    <Col xs={6} md={3} lg={2} className="text-center mb-4">
      <div
  className="doctor-card"
  style={{ display: "block", cursor: "pointer" }}
  onClick={() =>
    handleDoctorClick({
      id: 1,
      name: "DR. Anitha Ramesh",
      speciality: "DIABETOLOGIST",
      image: me3,
    })
  }
>
  <img src={me3} alt="Dr. R.P. Sinha" className="doctor-img" />
  <h6 className="mt-3 fw-bold">DR.Anitha Ramesh</h6>
  <p className="text-primary small fw-semibold mt-1">DIABETOLOGIST</p>
</div>

    </Col>

    {/* Doctor 2 */}
    <Col xs={6} md={3} lg={2} className="text-center mb-4">
      <div
  className="doctor-card"
  style={{ display: "block", cursor: "pointer" }}
  onClick={() =>
    handleDoctorClick({
      id: 2,
      name: "DR. Karthik S",
      speciality: "OBS & GYN",
      image: me4,
    })
  }
>
  <img src={me4} alt="Dr. Jyoti Gupta" className="doctor-img" />
  <h6 className="mt-3 fw-bold">DR. Karthik S</h6>
  <p className="text-primary small fw-semibold mt-1">OBS & GYN</p>
</div>

    </Col>

    {/* Doctor 3 */}
    <Col xs={6} md={3} lg={2} className="text-center mb-4">
     <div
  className="doctor-card"
  style={{ display: "block", cursor: "pointer" }}
  onClick={() =>
    handleDoctorClick({
      id: 3,
      name: "DR. Priya B",
      speciality: "OTOLARYNGOLOGIST",
      image: me5,
    })
  }
>
  <img src={me5} alt="Dr. Sonu Kumar Singh" className="doctor-img" />
  <h6 className="mt-3 fw-bold">DR. Priya B</h6>
  <p className="text-primary small fw-semibold mt-1">OTOLARYNGOLOGIST</p>
</div>

    </Col>

    {/* Doctor 4 */}
    <Col xs={6} md={3} lg={2} className="text-center mb-4">
      <div
  className="doctor-card"
  style={{ display: "block", cursor: "pointer" }}
  onClick={() =>
    handleDoctorClick({
      id: 4,
      name: "DR. RAJNEESH KUMAR RA",
      speciality: "PAEDIATRICIAN",
      image: me6,
    })
  }
>
  <img src={me6} alt="Dr. Rishika Verma" className="doctor-img" />
  <h6 className="mt-3 fw-bold">DR. RAJNEESH KUMAR RA</h6>
  <p className="text-primary small fw-semibold mt-1">PAEDIATRICIAN</p>
</div>

    </Col>

    {/* Doctor 5 */}
    <Col xs={6} md={3} lg={2} className="text-center mb-4">
      <div
  className="doctor-card"
  style={{ display: "block", cursor: "pointer" }}
  onClick={() =>
    handleDoctorClick({
      id: 5,
      name: "DR. Meena G",
      speciality: "ENT",
      image: me7,
    })
  }
>
  <img src={me7} alt="Dr. Rajneesh Kumar" className="doctor-img" />
  <h6 className="mt-3 fw-bold">DR. Meena G</h6>
  <p className="text-primary small fw-semibold mt-1">ENT</p>
</div>

    </Col>

    {/* Doctor 6 */}
    <Col xs={6} md={3} lg={2} className="text-center mb-4">
      <div
  className="doctor-card"
  style={{ display: "block", cursor: "pointer" }}
  onClick={() =>
    handleDoctorClick({
      id: 6,
      name: "DR. Arvind T",
      speciality: "CARDIOLOGIST",
      image: me8,
    })
  }
>
  <img src={me8} alt="Dr. Om Prakash Kumar" className="doctor-img" />
  <h6 className="mt-3 fw-bold">DR. Arvind T</h6>
  <p className="text-primary small fw-semibold mt-1">CARDIOLOGIST</p>
</div>

    </Col>

    {/* Doctor 7 */}
    <Col xs={6} md={3} lg={2} className="text-center mb-4">
      <div
  className="doctor-card"
  style={{ display: "block", cursor: "pointer" }}
  onClick={() =>
    handleDoctorClick({
      id: 7,
      name: "DR. Kavitha S",
      speciality: "GENERAL PHYSICIAN",
      image: me9,
    })
  }
>
  <img src={me9} alt="Dr. Manish Raj" className="doctor-img" />
  <h6 className="mt-3 fw-bold">DR. Kavitha S</h6>
  <p className="text-primary small fw-semibold mt-1">GENERAL PHYSICIAN</p>
</div>

    </Col>

    {/* Doctor 8 */}
    <Col xs={6} md={3} lg={2} className="text-center mb-4">
      <div
  className="doctor-card"
  style={{ display: "block", cursor: "pointer" }}
  onClick={() =>
    handleDoctorClick({
      id: 8,
      name: "DR. Vignesh P",
      speciality: "OBSTETRIC & GYNAEC",
      image: me10,
    })
  }
>
  <img src={me10} alt="Dr. Pratibha Kumari" className="doctor-img" />
  <h6 className="mt-3 fw-bold">DR. Vignesh P</h6>
  <p className="text-primary small fw-semibold mt-1">OBSTETRIC & GYNAEC</p>
</div>

    </Col>

    {/* Doctor 9 */}
    <Col xs={6} md={3} lg={2} className="text-center mb-4">
      <div
  className="doctor-card"
  style={{ display: "block", cursor: "pointer" }}
  onClick={() =>
    handleDoctorClick({
      id: 9,
      name: "DR. Deepak R",
      speciality: "ORTHOPEDIST & SPINI",
      image: me11,
    })
  }
>
  <img src={me11} alt="Dr. Rakesh Kumar" className="doctor-img" />
  <h6 className="mt-3 fw-bold">DR. Deepak R</h6>
  <p className="text-primary small fw-semibold mt-1">ORTHOPEDIST & SPINI</p>
</div>

    </Col>

    {/* Doctor 10 */}
    <Col xs={6} md={3} lg={2} className="text-center mb-4">
      <div
  className="doctor-card"
  style={{ display: "block", cursor: "pointer" }}
  onClick={() =>
    handleDoctorClick({
      id: 10,
      name: "DR. Snjay M",
      speciality: "UROLOGIST",
      image: me12,
    })
  }
>
  <img src={me12} alt="Dr. Nitesh Kumar" className="doctor-img" />
  <h6 className="mt-3 fw-bold">DR. Sanjay M</h6>
  <p className="text-primary small fw-semibold mt-1">UROLOGIST</p>
</div>

    </Col>

    {/* Doctor 11 */}
    <Col xs={6} md={3} lg={2} className="text-center mb-4">
     <div
  className="doctor-card"
  style={{ display: "block", cursor: "pointer" }}
  onClick={() =>
    handleDoctorClick({
      id: 11,
      name: "DR. Monica A",
      speciality: "ENT SPECIALIST",
      image: me13,
    })
  }
>
  <img src={me13} alt="Dr. Renu Kumari" className="doctor-img" />
  <h6 className="mt-3 fw-bold">DR. Monica A</h6>
  <p className="text-primary small fw-semibold mt-1">ENT SPECIALIST</p>
</div>

    </Col>

    {/* Doctor 12 */}
    <Col xs={6} md={3} lg={2} className="text-center mb-4">
     <div
  className="doctor-card"
  style={{ display: "block", cursor: "pointer" }}
  onClick={() =>
    handleDoctorClick({
      id: 12,
      name: "DR. Ramesh B",
      speciality: "GENERAL PHYSICIAN",
      image: me14,
    })
  }
>
  <img src={me14} alt="Dr. PP Gupta" className="doctor-img" />
  <h6 className="mt-3 fw-bold">DR. Ramesh B</h6>
  <p className="text-primary small fw-semibold mt-1">GENERAL PHYSICIAN</p>
</div>

    </Col>

  </Row>
   <Row className="justify-content-center "style={{marginTop:"-15px",width:"83%"}}>
        <Col md={10} className="text-left">
        <Button className="load-btn mt-3" onClick={() => navigate("/doctors")}>
  Load More →
</Button>

          <p className="text-muted lh-lg">
            Online doctor appointment services have seen rapid growth across India in recent years,
            transforming how patients access healthcare. These platforms allow users to search for
            doctors by specialty, location, and availability through intuitive web or mobile
            applications. By simplifying the process of booking consultations, these services offer
            convenience, reduced waiting times, and greater access to medical professionals.
          </p>
          <p className="text-muted lh-lg">
            However, it is essential that patients use reliable platforms and ensure that the healthcare
            providers they consult are certified, qualified, and authorized to deliver medical care. At
            <strong> Clinicwala</strong>, we prioritize trust, safety, and quality—connecting patients only
            with verified, experienced doctors for a seamless and secure healthcare experience.
          </p>
          
        </Col>
      </Row>
</Container>


{/* SECTION 5*/}
<Container fluid id="eclinic-franchise" className="eclinic-section py-5"style={{
    width: "83%",
    paddingRight: "calc(1.5rem * 0.5)",
    paddingLeft: "calc(1.5rem * 0.5)",
    marginRight: "auto",
    marginLeft: "auto",
  }} data-aos="flip-up">

  <Row className="justify-content-center align-items-center">
    <Col md={6}>
      <h4 className="text-primary fw-bold mb-3">
        ECLINIC FRANCHISE – CLINICWALA.COM
      </h4>
      <p className="text-muted lh-lg">
        An eClinic Franchise by Clinicwala is a modern healthcare solution that
        empowers providers to deliver virtual healthcare services with ease and
        efficiency. Our franchise model equips partners with a robust suite of
        software tools and digital infrastructure for conducting online
        consultations, managing patient records, and automating administrative
        tasks.For patients, eClinics offer the convenience of remote access to quality
        healthcare—anytime, anywhere. For franchise owners, it presents an
        opportunity to run a future-ready clinic with streamlined operations,
        reduced overheads, and increased revenue potential.
        Join the healthcare revolution with Clinicwala’s eClinic Franchise and
        be a part of transforming how care is delivered across India.
      </p>

     <Button className="btn-jump mt-4" onClick={() => navigate("/eclinic")}>
  EClinic →
</Button>

    </Col>

    <Col md={5} className="text-center">
      <img
        src={me15} 
        alt="EClinic Franchise"
        className="img-fluid rounded"
        style={{ maxHeight: "350px", objectFit: "cover" }}
      />
    </Col>
  </Row>

  
</Container>



{/* SECTION 6 */}
<Container fluid id="health-wellness"style={{
    width: "83%",
    paddingRight: "calc(1.5rem * 0.5)",
    paddingLeft: "calc(1.5rem * 0.5)",
    marginRight: "auto",
    marginLeft: "auto",
  }} className="health-programs-section py-5">

  <Row className="justify-content-center mb-4">
    <Col md={10} className="text-center">
      <h4 className="text-primary fw-bold mb-4"> ──── Health & Wellness Initiatives</h4>
      
    </Col>
  </Row>

  <Row className="justify-content-center">
    <Col md={3} className="text-center mb-4" data-aos="flip-up" data-aos-duration="2000">
    <h6 className="ealth-programs d-flex justify-content-center fw-bold mb-4" style={{color:"#007bff"}}>Health Programs for Schools</h6>
      <img src={me16} alt="School Health" className="img-fluid mb-3" />
      <p className="text-muted">
        In the realm of education, nurturing holistic development is paramount. Our Health Programs for Schools instill lifelong well-being habits in students.
      </p>
      <Button variant="light" className="small-btn" onClick={() => navigate("/services")}>
  View Details
</Button>

    </Col>

    <Col md={3} className="text-center mb-4" data-aos="fade-down" data-aos-duration="2000">
    <h6 className="ealth-programs d-flex justify-content-center fw-bold mb-4" style={{color:"#007bff"}}>Promoting Wellness in Gyms</h6>
      <img src={me17} alt="Gym Wellness" className="img-fluid mb-3" />
      <p className="text-muted">
        Gyms are not just about exercise; they are about wellness. Our approach empowers gym-goers to achieve their fitness goals through nutritional guidance.
      </p>
      <Button variant="light" className="small-btn" onClick={() => navigate("/services")}>
  View Details
</Button>

    </Col>

    <Col md={3} className="text-center mb-4" data-aos="fade-up" data-aos-duration="2000">
    <h6 className="ealth-programs d-flex justify-content-center fw-bold mb-4" style={{color:"#007bff"}}>Corporate Health Initiatives</h6>
      <img src={me18} alt="Corporate Wellness" className="img-fluid mb-3" />
      <p className="text-muted">
        In the corporate landscape, employee well-being is paramount. Our initiatives reduce stress and foster a healthier, happier workplace.nutritional guidance.
      </p>
      <Button variant="light" className="small-btn" onClick={() => navigate("/services")}>
  View Details
</Button>

    </Col>
  </Row>
</Container>

{/* SECTION 7  */}
 <Container fluid id="diet-foods" style={{
    width: "83%",
    paddingRight: "calc(1.5rem * 0.5)",
    paddingLeft: "calc(1.5rem * 0.5)",
    marginRight: "auto",
    marginLeft: "auto",
  }}className="diets-section py-5">

      <Row className="justify-content-center mb-4">
        <Col md={10} className="text-center">
          <h5 className="section-title">──── DIETS / FOOD / HEALTH ────</h5>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={3} sm={6} xs={12} className="mb-4" data-aos="flip-left" data-aos-duration="2000">
          <div className="diet-card">
            <h6 className="diet-heading d-flex justify-content-center">HEALTHY RECIPES</h6>
            <img src={me19} alt="Healthy Recipes" className="diet-img" />
            <p className="diet-text">
              Healthy Indian recipes promote well-being with whole grains, lean proteins, veggies, and healthy fats.
            </p>
            <Button variant="link" className="view-btn" onClick={() => navigate("/food-diet")}>
  View All
</Button>

          </div>
        </Col>

        <Col md={3} sm={6} xs={12} className="mb-4" data-aos="flip-left" data-aos-duration="2000">
          <div className="diet-card">
            <h6 className="diet-heading d-flex justify-content-center">DIET PLANS</h6>
            <img src={me20} alt="Diet Plans" className="diet-img" />
            
            <p className="diet-text">
              A diet plan is a personalized nutrition approach to achieve health goals and manage chronic diseases.
            </p>
            <Button variant="link" className="view-btn" onClick={() => navigate("/food-diet")}>
  View All
</Button>

          </div>
        </Col>

        <Col md={3} sm={6} xs={12} className="mb-4" data-aos="flip-left" data-aos-duration="2000">
          <div className="diet-card">
            <h6 className="diet-heading d-flex justify-content-center">FOOD ADVISOR</h6>
            <img src={me21} alt="Food Advisor" className="diet-img" />
            
            <p className="diet-text">
              The "Food Advisor" recommends the best diets for diabetes, gout, heart disease, and more.
            </p>
            <Button variant="link" className="view-btn" onClick={() => navigate("/food-diet")}>
  View All
</Button>

          </div>
        </Col>

        <Col md={3} sm={6} xs={12} className="mb-4" data-aos="flip-left" data-aos-duration="2000">
          <div className="diet-card">
            <h6 className="diet-heading d-flex justify-content-center">INDIAN FOOD GUIDE</h6>
            <img src={me22} alt="Indian Food Guide" className="diet-img" />
            
            <p className="diet-text">
              Balanced Indian diet includes foods from each group, ensuring nutrients for a healthy lifestyle.
            </p>
            <Button variant="link" className="view-btn" onClick={() => navigate("/food-diet")}>
  View All
</Button>

          </div>
        </Col>
      </Row>
    </Container>

{/* SECTION 8  */}
<Container fluid id="health-blog"style={{
    width: "83%",
    paddingRight: "calc(1.5rem * 0.5)",
    paddingLeft: "calc(1.5rem * 0.5)",
    marginRight: "auto",
    marginLeft: "auto",
  }} className="health-blog-section py-5">

      <Row className="justify-content-center mb-4">
        <Col md={10} className="text-center">
          <h4 className="section-title">──── HEALTH BLOG ────</h4>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {/* Card 1 */}
        <Col md={3} sm={6} xs={12} className="mb-4" data-aos="flip-down" data-aos-duration="2000">
          <div className="blog-card">
            <img src={me23} alt="Balanced Diet" className="blog-img" />
            <div className="blog-content">
              <h6 className="blog-title">How to maintain a good Balanced Diet</h6>
              <p className="blog-subtitle">Balanced Diet</p>
              <p className="blog-text">
                A healthy lifestyle necessitates a well-balanced diet. It supplies the body with all
                the important nutrients like vitamins, minerals, carbohydrates, proteins, and fats.
              </p>
              <Button variant="link" className="read-btn" onClick={() => navigate("/food-diet")}>
  Read More
</Button>

            </div>
          </div>
        </Col>

        {/* Card 2 */}
        <Col md={3} sm={6} xs={12} className="mb-4" data-aos="flip-down" data-aos-duration="2000">
          <div className="blog-card">
            <img src={me24} alt="Radiant Skin" className="blog-img" />
            <div className="blog-content">
              <h6 className="blog-title">Golden Rule for Radiant, Healthy Skin</h6>
              <p className="blog-subtitle">Healthy Skin</p>
              <p className="blog-text">
                 A healthy lifestyle necessitates a well-balanced diet. It supplies the body with all
                the important nutrients like vitamins, minerals, carbohydrates, proteins, and fats.
              </p>
              <Button variant="link" className="read-btn" onClick={() => navigate("/food-diet")}>
  Read More
</Button>

            </div>
          </div>
        </Col>

        {/* Card 3 */}
        <Col md={3} sm={6} xs={12} className="mb-4" data-aos="flip-down" data-aos-duration="2000">
          <div className="blog-card">
            <img src={me25} alt="Sunshine Vitamins" className="blog-img" />
            <div className="blog-content">
              <h6 className="blog-title">How Can ‘Sunshine Vitamins’ Help Your Health?</h6>
              <p className="blog-subtitle">Sunshine Vitamin</p>
              <p className="blog-text">
                 A healthy lifestyle necessitates a well-balanced diet. It supplies the body with all
                the important nutrients like vitamins, minerals, carbohydrates, proteins, and fats.
              </p>
              <Button variant="link" className="read-btn" onClick={() => navigate("/food-diet")}>
  Read More
</Button>

            </div>
          </div>
        </Col>

        {/* Card 4 */}
        <Col md={3} sm={6} xs={12} className="mb-4" data-aos="flip-down" data-aos-duration="2000">
          <div className="blog-card">
            <img src={me26} alt="Influenza Guide" className="blog-img" />
            <div className="blog-content">
              <h6 className="blog-title">A Comprehensive Guide to Influenza</h6>
              <p className="blog-subtitle">Influenza</p>
              <p className="blog-text">
                A healthy lifestyle necessitates a well-balanced diet. It supplies the body with all
                the important nutrients like vitamins, minerals, carbohydrates, proteins, and fats.
              </p>
              <Button variant="link" className="read-btn" onClick={() => navigate("/food-diet")}>
  Read More
</Button>

            </div>
          </div>
        </Col>
      </Row>

      <div className="text-center mt-4">
        <Button className="btn-articles" onClick={() => navigate("/food-diet")}>
  Health Articles →
</Button>

      </div>
    </Container>

{/* SECTION 9  */}
    <Container fluid  className="alternative-section py-5 "style={{
    width: "83%",
    paddingRight: "calc(1.5rem * 0.5)",
    paddingLeft: "calc(1.5rem * 0.5)",
    marginRight: "auto",
    marginLeft: "auto",
  }}>
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <h4 className="text-primary fw-bold mb-3 text-left">
            ALTERNATIVE MEDICINE & COMPLEMENTARY CURE
          </h4>
          <p className="text-muted lh-lg text-left">
            Alternative medicine and complementary therapies focus on natural, holistic approaches to health and wellness. These methods emphasize treating the mind, body, and spirit as an interconnected system, aiming to restore balance and support the body’s natural healing processes.

While alternative medicine refers to practices used in place of conventional Western treatments, complementary therapies are used alongside standard medical care to enhance its effectiveness. These may include herbal remedies, yoga, acupuncture, meditation, Ayurveda, and other time-tested healing systems.

As more individuals seek personalized and preventive care, these approaches are becoming increasingly popular for promoting overall well-being, managing chronic conditions, and supporting recovery.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center text-center">
        <Col xs={6} md={2} className="mb-4">
          <div className="alt-icon p-3 ">
            <img src={me27} alt="AYURVEDA" className="img-fluid mb-2 rounded-circle rounded shadow-sm" />
            <p className="fw-semibold small">AYURVEDA</p>
          </div>
        </Col>

        <Col xs={6} md={2} className="mb-4">
          <div className="alt-icon p-3  ">
            <img src={me28} alt="HOMEOPATHY" className="img-fluid mb-2 rounded-circle rounded shadow-sm" />
            <p className="fw-semibold small">HOMEOPATHY</p>
          </div>
        </Col>

        <Col xs={6} md={2} className="mb-4">
          <div className="alt-icon p-3 ">
            <img src={me29} alt="NATUROPATHY" className="img-fluid mb-2 rounded-circle rounded shadow-sm" />
            <p className="fw-semibold small">NATUROPATHY</p>
          </div>
        </Col>

        <Col xs={6} md={2} className="mb-4">
          <div className="alt-icon p-3 ">
            <img src={me30} alt="UNANI MEDICINE" className="img-fluid mb-2 rounded-circle rounded shadow-sm" />
            <p className="fw-semibold small">UNANI MEDICINE</p>
          </div>
        </Col>

        <Col xs={6} md={2} className="mb-4">
          <div className="alt-icon p-3 ">
            <img src={me31} alt="ACUPUNCTURE" className="img-fluid mb-2 rounded-circle rounded shadow-sm" />
            <p className="fw-semibold small">ACUPUNCTURE</p>
          </div>
        </Col>

        <Col xs={6} md={2} className="mb-4">
          <div className="alt-icon p-3 ">
            <img src={me32} alt="AROMATHERAPY" className="img-fluid mb-2 rounded-circle rounded shadow-sm" />
            <p className="fw-semibold small">AROMATHERAPY</p>
          </div>
        </Col>

        <Col xs={6} md={2} className="mb-4">
          <div className="alt-icon p-3 ">
            <img src={me33} alt="EYE CARE" className="img-fluid mb-2 rounded-circle rounded shadow-sm" />
            <p className="fw-semibold small">EYE CARE</p>
          </div>
        </Col>

        <Col xs={6} md={2} className="mb-4">
          <div className="alt-icon p-3 ">
            <img src={me34} alt="HAIR CARE" className="img-fluid mb-2 rounded-circle rounded shadow-sm" />
            <p className="fw-semibold small">HAIR CARE</p>
          </div>
        </Col>

        <Col xs={6} md={2} className="mb-4">
          <div className="alt-icon p-3 ">
            <img src={me35} alt="SKIN CARE" className="img-fluid mb-2 rounded-circle rounded shadow-sm" />
            <p className="fw-semibold small">SKIN CARE</p>
          </div>
        </Col>

        <Col xs={6} md={2} className="mb-4">
          <div className="alt-icon p-3 ">
            <img src={me36} alt="MEDICINAL PLANTS" className="img-fluid mb-2 rounded-circle rounded shadow-sm" />
            <p className="fw-semibold small">MEDICINAL PLANTS</p>
          </div>
        </Col>

        <Col xs={6} md={2} className="mb-4">
          <div className="alt-icon p-3 ">
            <img src={me37} alt="HOME REMEDIES" className="img-fluid mb-2 rounded-circle rounded shadow-sm" />
            <p className="fw-semibold small">HOME REMEDIES</p>
          </div>
        </Col>

        <Col xs={6} md={2} className="mb-4">
          <div className="alt-icon p-3 ">
            <img src={me38} alt="YOGA" className="img-fluid mb-2 rounded-circle rounded shadow-sm" />
            <p className="fw-semibold small">YOGA</p>
          </div>
        </Col>
      </Row>
    </Container>


{/* SECTION 10 – FRANCHISE OPPORTUNITIES */}
<Container fluid id="alternative-medicines" style={{
    width: "83%",
    paddingRight: "calc(1.5rem * 0.5)",
    paddingLeft: "calc(1.5rem * 0.5)",
    marginRight: "auto",
    marginLeft: "auto",
  }}className="alternative-section py-5" data-aos="fade-right" data-aos-duration="3000">

  <Row className="justify-content-center mb-4">
    <Col md={10}>
      <h4 className="text-primary fw-bold mb-3 text-center">
        CLINICWALA HEALTHCARE FRANCHISE OPPORTUNITIES
      </h4>
      <p className="text-muted lh-lg">
        Clinicwala offers an opportunity to join a trusted, technology-driven healthcare network with franchise support in business systems, marketing, and operations.
      </p>
    </Col>
  </Row>

  <Row className="justify-content-center">
    <Col md={5} className="mb-4">
      <div className="franchise-card bg-white rounded shadow-sm p-3 h-100">
        <h6 className="fw-bold text-primary mb-2">Franchise Network</h6>
        <img src={me39} alt="Franchise Network" className="img-fluid rounded mb-3" />
        <p className="text-muted small">
          Franchisees deliver healthcare locally through diagnostics, consultations, and pharmacy support—backed by Clinicwala’s expertise.
        </p>
      </div>
    </Col>

    <Col md={5} className="mb-4">
      <div className="franchise-card bg-white rounded shadow-sm p-3 h-100">
        <h6 className="fw-bold text-primary mb-2">Rural Health Camps</h6>
        <img src={me40} alt="Rural Health Camps" className="img-fluid rounded mb-3" />
        <p className="text-muted small">
          Clinicwala organizes rural health camps to bring essential checkups and medical care to underserved communities.
        </p>
      </div>
    </Col>
  </Row>
</Container>


{/* Floating Contact & Help */}
  <div
  className="contact-side-btn"
  role="button"
  tabIndex={0}
  onClick={() => setShowContact(true)}
  onKeyDown={(e) => e.key === "Enter" && setShowContact(true)}
>
  CONTACT US
</div>


  <div className="help-icon">🧑‍💼</div>

  <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg"
     backdrop={false}   >
  <Modal.Header closeButton>
    <Modal.Title>{selectedDoctor?.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body className="text-center">
    <img
      src={selectedDoctor?.image}
      alt={selectedDoctor?.name}
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        objectFit: "cover"
      }}
    />
    <h5 className="mt-3">{selectedDoctor?.speciality}</h5>

    <Button
      className="mt-4"
      onClick={() => navigate(`/doctor/${selectedDoctor?.id}`)}
    >
      View Full Profile →
    </Button>
  </Modal.Body>
</Modal>
<Modal
  show={showContact}
  onHide={() => setShowContact(false)}
  centered
  backdrop={false}
>
  <Modal.Header closeButton>
    <Modal.Title>New User – Contact Us</Modal.Title>
  </Modal.Header>

  <Modal.Body>

    {/* ✅ SUCCESS MESSAGE */}
    {successMsg && (
      <div className="alert alert-success text-center">
        🎉 Thank you! We will contact you soon.
      </div>
    )}

    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={contactForm.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={contactForm.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={contactForm.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          value={contactForm.message}
          onChange={handleChange}
        />
      </Form.Group>

      <Button type="submit" variant="primary" className="w-100">
        Submit
      </Button>

    </Form>
  </Modal.Body>
</Modal>


    </section>
    
  );
};

export default Home;
