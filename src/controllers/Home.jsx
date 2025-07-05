import React, { useState } from 'react'
import { FaBook, FaBookOpen, FaGithub, FaGoogle, FaGraduationCap, FaInstagram, FaLinkedin, FaLinkedinIn, FaPhone, FaSearch, FaStar, FaTelegramPlane } from 'react-icons/fa';
import { FaBookAtlas, FaBookOpenReader, FaPerson } from 'react-icons/fa6';
import { FiCheckCircle } from 'react-icons/fi';


const logos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9NaJhf6A9KnZB_TCIdZ93l_yxg1cZ6rs4w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSccc0WDxF3Gfa-f4cm8OoG5wkJkUqIkRCBEQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbir5_73YUVXQ7PS0aqnhJ7IICCotZT2rbJw&s",
    "https://seeklogo.com/images/N/novey-logo-DD1617FC78-seeklogo.com.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjKrM_yvRP-j_PV6hTGxe_9i2SQ9A6jueew&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8tZPt-mIr-OaEv-42SFuWPxSqvHsWaxXhuw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQclyUDBuZg8MsxylVZFn95v0i3s0jXP1B6xw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5z3nfT5oexkh3mKW-otg7Gn4z9fa9XGzUQ&s",
    'https://marketing.uz/uploads/articles/5030/article-original.jpg',
    'https://www.iskooldenim.com/wp-content/uploads/2015/12/ISKO_new-logo-x-web-400x120.png'
];

const mentorData = [
    { id: 1, img: 'https://static.vecteezy.com/system/resources/thumbnails/047/462/777/small_2x/positive-man-on-clean-background-photo.jpg', name: 'Ali Rasulov', info: 'Senior UI Desigin' },
    { id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8o2dR2udeVGJUUJzrVGyYkCYmkVu7xxlGQ&s', name: 'Shaxboz Eshmatov', info: 'Senior UI Desigin' },
    { id: 3, img: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'Amir Bektemirov', info: 'Senior UI Desigin' },
    { id: 4, img: 'https://randomuser.me/api/portraits/women/4.jpg', name: 'Gulnora Azimova', info: 'Senior UI Desigin' },
    { id: 5, img: 'https://randomuser.me/api/portraits/men/5.jpg', name: ' Rasul Aliyev', info: 'Senior UI Desigin' },
    { id: 6, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d9NHEPKKpNCX3U4qT0cotgdOitoMiq2pbg&s', name: 'Aliya Rasulova', info: 'Senior UI Desigin' },
    { id: 7, img: 'https://randomuser.me/api/portraits/men/7.jpg', name: 'Gorg bektemirov', info: 'Senior UI Desigin' },
    { id: 8, img: 'https://randomuser.me/api/portraits/women/8.jpg', name: 'Aziza begimqulova', info: 'Senior UI Desigin' },
    { id: 9, img: 'https://randomuser.me/api/portraits/men/9.jpg', name: 'Temur Amirov ', info: 'Senior UI Desigin' },
];


export default function Home() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [showlogim, setlogim] = useState(false)
    const allLogos = [...logos, ...logos];
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const totalPages = Math.ceil(mentorData.length / itemsPerPage);
    const currentMentors = mentorData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);



    const handleChange = () => {
        setToggleMenu(!toggleMenu);
    };

    const handlePopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };
    const hadlelogin = () => {
        setlogim(true)
    }
    const closelogin = () => {
        setlogim(false)
    }

    return (
        <>
            <div className='father_container'>
                <section id="header">
                    <div className="header_container">
                        <div className="header">
                            <div className="logo">
                                <img src="src/img/image copy.png" alt="" />
                            </div>
                            <div className="links">
                                <a href="#info-section">Home</a>
                                <a href="#cours">Courses</a>
                                <a href="#training">Training</a>
                                <a href="#goal">Goal</a>
                                <a href="#mentor">Mentor</a>
                                <a href="#expert">Expert</a>
                                <a href="#why">Why</a>
                                <a href="#profit">Profit</a>
                                <a href="#">Coll</a>
                            </div>
                            <div className="sign_in">
                                <button onClick={handlePopup}>Sign In</button>
                                <button onClick={hadlelogin}>Login</button>
                            </div>
                            <div className="hamburger" onClick={handleChange}>
                                ☰
                            </div>
                        </div>
                    </div>

                    {toggleMenu && (
                        <div className="hamburger_overlay">
                            <div className="hamburger_menu">
                                <span className="close_btn" onClick={handleChange}>×</span>
                                <div className="links">
                                    <a href="#info-section">Home</a>
                                    <a href="#cours">Courses</a>
                                    <a href="#training">Training</a>
                                    <a href="#goal">Goal</a>
                                    <a href="#mentor">Mentor</a>
                                    <a href="#expert">Expert</a>
                                    <a href="#why">Why</a>
                                    <a href="#profit">Profit</a>
                                    <a href="#">Coll</a>
                                </div>
                                <div className="sign_in">
                                    <button onClick={handlePopup}>Sign In</button>
                                    <button onClick={hadlelogin} >Login</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {showPopup && (
                        <div className="popup_overlay">
                            <div className="popup_content">
                                <span className="popup_close" onClick={closePopup}>×</span>
                                <h2>E-learning</h2>
                                <div className="input_card">
                                    <button> Sing UP<a className='icon' href="#" target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a></button>
                                    <button> Sing UP<a className='icon' href="#" target="_blank" rel="noopener noreferrer">
                                        <FaGoogle />
                                    </a></button>
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <button>Sing UP</button>
                                    <p>By creating an account you are agree with our Privacy and Policy</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {showlogim && (
                        <div className="popup_overlay">
                            <div className="popup_content">
                                <span className="popup_close" onClick={closelogin}>×</span>
                                <h2>E-learning</h2>
                                <div className="input_card">
                                    <input type="text" />
                                    <input type="text" />
                                    <button>Login</button>
                                    <p>By creating an account you are agree with our Privacy and Policy</p>
                                </div>
                            </div>n
                        </div>
                    )}
                </section>

                <section id='info-section'>
                    <div className="access-container">
                        <div className="access">
                            <div className="info_compania">
                                <h1>
                                    1 OYDA KOMPANIYANGIZDA
                                    <span className='info_span'>
                                        ICHKI AKADEMIYANI
                                    </span>
                                    YO‘LGA QO‘YIB BERAMIZ
                                </h1>
                                <p>
                                    <span className='info_span_p'>
                                        Smartfon orqali
                                    </span>
                                    adaptasiya, malaka oshirish,bilimni baholash, rag‘batlantirish                                </p>
                                <div className="search_container">
                                    <input
                                        type="text"
                                        className="search_input"
                                        placeholder="search courses..."
                                    />
                                    <div className="search_button">
                                        <FaSearch />
                                    </div>
                                </div>
                                <div className="chek_info">
                                    <FiCheckCircle size={30} color="#00cfff" />
                                    <h4>
                                        Flexible
                                    </h4>
                                    <FiCheckCircle size={30} color="#00cfff" />
                                    <h4>
                                        Learning path
                                    </h4>
                                    <FiCheckCircle size={30} color="#00cfff" />
                                    <h4>
                                        Community
                                    </h4>
                                </div>
                            </div>
                            <div className="img_compania">
                                <img src="https://news.fullerton.edu/app/uploads/2020/11/Online-Learning-800x500.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section >
                    <div className="partners_container">
                        <div className="logo-slider">
                            <h1>BIZGA ISHONCH BILDIRGAN MIJOZLARIMIZ    </h1>

                            <div className="logo-wrapper">
                                <div className="logo-track">
                                    {allLogos.map((src, i) => (
                                        <img src={src} alt={`logo-${i}`} key={i} />
                                    ))}
                                </div>
                            </div>
                            <div className="line"></div>
                        </div>
                    </div>
                </section>

                <section id='cours'>
                    <div className="info_second">
                        <div className="courses_container">
                            <div className="courses">
                                <div className="courses_name">
                                    <h1>
                                        Popular courses.
                                    </h1>
                                </div>
                                <div className="courses_link">
                                    <a href="#">Explore courses  </a>
                                </div>
                            </div>
                            <div className="cours_card_wrapper">
                                <div className="cours_box">
                                    <div className="img_box">
                                        <div className="img-wrapper">
                                            <img src="https://themewagon.github.io/E-learning//images/courses/coursethree.png" alt="Asosiy" class="main-img" />
                                            <div className="overlay_logo">
                                                <h3>Best Selller</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cours_name">
                                        <h1 className="course_title">
                                            Design banner with
                                            <span className='title'>
                                                Figma
                                            </span>
                                        </h1>
                                        <p>Colt stelle</p>
                                    </div>
                                    <div className="course_reating">
                                        <div className="reating">
                                            <h3>
                                                4.2
                                            </h3>
                                            <div className="reyting_score">
                                                <button><FaStar /></button>
                                                <button><FaStar /></button>
                                                <button><FaStar /></button>
                                                <button><FaStar /></button>
                                                <button className='score'><FaStar /></button>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <h3>
                                                20$
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="line_reyting">
                                    </div>
                                    <div className="classes_info">
                                        <div className="classes">
                                            <div className="icon_class">
                                                <FaBookOpen />
                                            </div>
                                            <h3>
                                                12
                                                classes
                                            </h3>
                                        </div>
                                        <div className="students">
                                            <div className="icon_students">
                                                <FaGraduationCap />
                                            </div>
                                            <h3>
                                                150 students
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="cours_box">
                                    <div className="img_box">
                                        <div className="img-wrapper">
                                            <img src="https://themewagon.github.io/E-learning//images/courses/coursetwo.png" alt="Asosiy" class="main-img" />
                                            <div className="overlay_logo">
                                                <h3>Best Selller</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cours_name">
                                        <h1 className="course_title">
                                            We Launch Delia
                                            <span className='title'>
                                                Webflow this Week!
                                            </span>
                                        </h1>
                                        <p>Colt stelle</p>
                                    </div>
                                    <div className="course_reating">
                                        <div className="reating">
                                            <h3>
                                                5
                                            </h3>
                                            <div className="reyting_score">
                                                <button><FaStar /></button>
                                                <button><FaStar /></button>
                                                <button><FaStar /></button>
                                                <button><FaStar /></button>
                                                <button     ><FaStar /></button>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <h3>
                                                20$
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="line_reyting">
                                    </div>
                                    <div className="classes_info">
                                        <div className="classes">
                                            <div className="icon_class">
                                                <FaBookOpen />
                                            </div>
                                            <h3>
                                                12
                                                classes
                                            </h3>
                                        </div>
                                        <div className="students">
                                            <div className="icon_students">
                                                <FaGraduationCap />
                                            </div>
                                            <h3>
                                                150 students
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="cours_box">
                                    <div className="img_box">
                                        <div className="img-wrapper">
                                            <img src="https://themewagon.github.io/E-learning//images/courses/courseone.png" alt="Asosiy" class="main-img" />
                                            <div className="overlay_logo">
                                                <h3>Best Selller</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cours_name">
                                        <h1 className="course_title">
                                            Full stack
                                            <span className='title'>
                                                modern javascrip
                                            </span>
                                        </h1>
                                        <p>Colt stelle</p>
                                    </div>
                                    <div className="course_reating">
                                        <div className="reating">
                                            <h3>
                                                5
                                            </h3>
                                            <div className="reyting_score">
                                                <button><FaStar /></button>
                                                <button><FaStar /></button>
                                                <button><FaStar /></button>
                                                <button><FaStar /></button>
                                                <button><FaStar /></button>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <h3>
                                                20$
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="line_reyting">
                                    </div>
                                    <div className="classes_info">
                                        <div className="classes">
                                            <div className="icon_class">
                                                <FaBookOpen />
                                            </div>
                                            <h3>
                                                12
                                                classes
                                            </h3>
                                        </div>
                                        <div className="students">
                                            <div className="icon_students">
                                                <FaGraduationCap />
                                            </div>
                                            <h3>
                                                150 students
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id='training'>
                    <div className="training_container">
                        <div className="training">
                            <h1 className='traning_info'>
                                NIMA UCHUN KOMPANIYALAR
                                KOMPANIYALAR ONLAYN TA‘LIMNI YO‘LGA QO‘YADILAR?</h1>
                            <div className="training_img">
                                <div className="img_box">
                                    <img src="https://news.fullerton.edu/app/uploads/2020/11/Online-Learning-800x500.jpg" alt="" />
                                    <h1>Yangi xodimlarni 2 karra tezroq kompaniyaga adaptatsiya qilish</h1>
                                </div>
                                <div className="img_box">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6D_ITKpBPCM-Nlq_TeAhgpNVY0hzFvJlbw&s" alt="" />
                                    <h1>Yuqori malakali xodimlar bilimini butun jamoaga tatbiq qilish</h1>
                                </div>
                                <div className="img_box">
                                    <img src="https://st3.depositphotos.com/1071909/12584/i/450/depositphotos_125845328-stock-photo-costs-optimization-business-concept.jpg" alt="" />
                                    <h1>Xodimlarni rivojlantirishga ajratilgan sarmoyani 3 karra qisqartirish imkoni</h1>
                                </div>
                                <div className="img_box">
                                    <img src="https://kimberlineducation.com/wp-content/uploads/2021/05/media-students-and-teacher-in-classroom-JACCL95-1.jpg" alt="" />
                                    <h1>Turli viloyatlardagi xodimlarga qulay formatda bilim yetkazish</h1>
                                </div>
                                <div className="img_box">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjccXkEKnL5fM6bJh5yNgI4qYDWjjl0o7vHQ&s" alt="" />
                                    <h1>Xodimlar vaqtini tejash. Istalgan vaqt,istalgan joydan bilim olish imkoni</h1>
                                </div>
                                <div className="img_box">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3T5b0RJHZQ2m_zbbDSx-4OmyFVVLGg0WGspqQxtcQMo6LLcdVD-_gxTC0sCdA2wyATxA&usqp=CAU" alt="" />
                                    <h1>Tizimli ta’limni yo’lga qo’yish orqali xodimlar samaradorligini oshirish</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='goal'>
                    <div className="goal_container">
                        <div className="goal_logo">
                            <img src="/src/img/image copy.png" alt="" />
                            <p>
                                Jamoangizni rivojlantiring
                            </p>
                        </div>
                        <div className="goal">
                            <div className="goal_info">
                                <h1>
                                    MAQSADIMIZ
                                </h1>
                                <h4>
                                    Korporativ ta’limni qulaylashtirish orqali,xodimlar rivojlanishiga hissa qo’shish
                                </h4>
                                <h3>
                                    Jamiyat rivojida bizneslarning o’rni katta.
                                    Biznes rivojlanishida esa, jamoa eng muhim omildir.Biz kompaniyalar xodimlarini rivojlantirish orqali,
                                    bizneslar rivojiga hissa qo’shish uchun yo’lga chiqdik.
                                </h3>
                                <h2>
                                    Habibulloh Karimov, EDUCORP MChJ rahbari
                                </h2>
                            </div>
                            <div className="goal_img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnMBsPhxH9Xc7GIKkZECpqU4CQxR_UMwsYA&s" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id='mentor'>
                    <div className="mentor_container">
                        <h1 className="mentor_heading">Meet with our mentors</h1>
                        <div className="mentor_list">
                            {currentMentors.map((mentor) => (
                                <div className="mentor_img" key={mentor.id}>
                                    <img className="imge" src={mentor.img} alt={mentor.name} />
                                    <div className="imetor_icon"><FaLinkedin /></div>
                                    <h1 className="mentor_name">{mentor.name}</h1>
                                    <h1 className="mentor_info">{mentor.info}</h1>
                                </div>
                            ))}
                        </div>

                        <div className="dots">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentPage ? 'active' : ''}`}
                                    onClick={() => setCurrentPage(index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section id='expert'>
                    <div className="expert_container">
                        <div className="info_rxpert">
                            <h1>LOYIHANGIZ BO‘YICHA
                                ISHLAYDIGAN MUTAXASSISLAR</h1>
                        </div>
                        <div className="expert">
                            <div className="expert_img">
                                <img src="https://media.istockphoto.com/id/1830042746/photo/document-management-system-dms-with-arrange-folder-and-files-icons-man-setup-storage-backup.jpg?s=612x612&w=0&k=20&c=t8oAAO16j6fMhleAYJEXm5pSXFIDZrEG6sYJkv_Sdos=" alt="" />
                                <h1>
                                    Metodolog
                                </h1>
                                <p>
                                    Darslik metodologiyasini tuzadi.
                                    Qisqa, lo’nda, tushunarli bo’lishini ta’minlaydi
                                    Video syomkada spikerga savollar berib turadi
                                </p>
                            </div>
                            <div className="expert_img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7m2t6P5RH39HDC22By-l2gJc0z3oYr_SLLA&s" alt="" />
                                <h1>
                                    LMS Menejer
                                </h1>
                                <p>
                                    Online platforma o’rnatadi, sozlaydi,xodim va bo’limlarni tuzadi
                                    Darslik va testlarni joylaydi
                                    Kurslarni platformada xodimlar
                                    o’qishiga qulay qilib tuzib chiqadi
                                </p>
                            </div>
                            <div className="expert_img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UwRFNhvr3Rd0IGAWmvD7SU5ndB6IGgV-5w&s" alt="" />
                                <h1>
                                    Video Operator
                                </h1>
                                <p>
                                    Darsliklar video syomkasini amalga oshiradi
                                </p>
                            </div>
                            <div className="expert_img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvY4igwYwYdBnrPSV7U-MxydUgIjxIwI0hkQ&s" alt="" />
                                <h1>
                                    Montaj Mutaxasisi
                                </h1>
                                <p>
                                    3 bosqichda montaj qiladi. Natijada darsliklar tushunarli, qisqa, lo’nda
                                    bo’ladi
                                </p>
                            </div>
                            <div className="expert_img">
                                <img src="https://i.work.ua/cdn-cgi/image/f=jpeg/article/232b.jpg?v=1713862809" alt="" />
                                <h1>
                                    Kopirayter
                                </h1>
                                <p>
                                    Har bir darslikka skriptlar yozib
                                    beradi
                                    Darsliklarga test va ochiq savollar tuzadi
                                </p>
                            </div>
                            <div className="expert_img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9xXq9l5f8-AISI_oUv9B9wSrawAUZ8eWBQ&s" alt="" />
                                <h1>
                                    Senarist
                                </h1>
                                <p>
                                    Mutahassis bilan birgalikda darsliklar ssenariysini tuzadi
                                </p>
                            </div>
                            <div className="expert_img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjU0hTBTXg2MLdlutMG6Gsls7XQUNXG0tOLw&s" alt="" />
                                <h1>
                                    Diktor
                                </h1>
                                <p>
                                    Ovozlashtirish kerak bo’lgan darsliklarga diktorlik qiladi
                                </p>
                            </div>
                            <div className="expert_img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJa0032eULOHN9KK-a59YhgRmhRvpENN4akg&s" alt="" />
                                <h1>
                                    Dizayner
                                </h1>
                                <p>
                                    Onlayn platforma kompaniya
                                    stilistikasiga mos bo’lishi uchun dizayn ishlarini bajarad
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='why'>
                    <div className="why_container">
                        <div className="Why_logo">
                            <img src="src/img/image copy.png" alt="" />
                        </div>
                        <div className="why">
                            <h1><span>
                                NIMA UCHUN EDUCORP?
                            </span>
                                <br />
                                KOMPANIYANGIZGA QANDAY QIYMAT KELTIRAMIZ?</h1>
                            <div className="why_box">
                                <div className="box">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsdfO8b9AE9mNRtNeIlAS49MKmTxI2dTBxg&s" alt="" className="box_img" />
                                    <h1>TAJRIBALI JAMOA</h1>
                                    <p>
                                        Vaqtingiz va pulingizni
                                        tejaymiz. Androgogika
                                        (kattalarni o’qitish)
                                        qoidasiga mos darsliklar
                                        tayyorlaymiz
                                    </p>
                                    <ul>
                                        <li>4yil+ tajriba</li>
                                        <li>1000+ topshirilgan
                                            darsliklar</li>
                                        <li>Xalqaro kompaniyalar
                                            bilan hamkorlik</li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlYngt_4uJkqWxXQt2TrlOe5D0ximueCX3V2P-L_bdtc7th1FXdJTpZf_EVeDVDQ-gtE&usqp=CAU" alt="" className="box_img" />
                                    <h1>"ПОД КЛЮЧ" XIZMAT</h1>
                                    <p>
                                        Kompaniyada korporativ
                                        onlayn ta’limni yo’lga
                                        qo’yishda barcha
                                        xizmatlarimiz mavjud:
                                    </p>
                                    <ul>
                                        <li>Darslik metodologiyasi</li>
                                        <li>ideo syomka</li>
                                        <li>Video montaj</li>
                                        <li>Test va keys tuzish</li>
                                        <li>LMSda yig’ib berish</li>
                                        <li>T&D tizimni o’rnatish</li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <img src="https://mpost.io/wp-content/uploads/IMG_1357-1024x548.jpg" alt="" className="box_img" />
                                    <h1>TAYYOR KURSLAR BAZASI</h1>
                                    <p>
                                        Kutubxonamizda xodimlar
                                        samaradorligini oshiruvchi
                                        kurslar mavjud.
                                        Bu esa sarmoyangizni
                                        3karra tejalishiga yordam
                                        beradi
                                    </p>

                                </div>
                                <div className="box">
                                    <img src="https://img.freepik.com/free-photo/people-working-call-center_23-2149288188.jpg" alt="" className="box_img" />
                                    <h1>QO‘LLAB TURISH XIZMATI </h1>
                                    <p>
                                        latformani
                                        ishlatishda yuzaga
                                        keladigan
                                        muammolarni vaqtida
                                        bartaraf qilish uchun,
                                        yil davomida texnik
                                        bo’limimiz xizmat
                                        ko’rsatadi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='profit'>
                    <div className="profit">
                        <div className="profit_box">
                            <div className="profint_img">
                                <img src="src/img/image copy.png" alt="" />
                            </div>
                            <div className="profit_info">
                                <h1>
                                    Qanday Kompaniyalar uchun foydali bo'ladi ?
                                </h1>
                                <ul>
                                    <li>80% dan yuqori xodimlar bir lavozimda   (distribyutor ,restorant...) </li>
                                    <li>Tekuchka kotta kompaniyalar  (yiliga 15+ xodim) </li>
                                    <li>Turli xudutlarda xizmat ko'rsatuvchi kompaniyalar </li>
                                    <li>bir necha fililli kompaniyalar </li>
                                    <li>Texnalogik bizneslar  (biznes xodim tajribasiga bog'liq bo'lganlar) </li>
                                    <li>Tez o'sishni ko'zlagan kompaniya </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer_container">
                    <div className="footer_logo">
                        <img src="src/img/image copy.png" alt="Educorp Logo" />
                        <p className="footer_slogan">Jamoangizni rivojlantiring!</p>
                    </div>

                    <div className="footer_links">
                        <div className="social_icons">
                            <a href=""> <FaInstagram /></a>
                            <a href=""> <FaTelegramPlane /> </a>
                        </div>

                        <p className="site_link">educorp.uz</p>

                        <div className="phone">
                            <FaPhone />
                            <span>78 113-98-58</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
