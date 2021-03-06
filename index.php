<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <title>Agathe Plunian Portfolio</title>
        <link rel="icon" type="image/png" sizes="19x19" href="img/banner/portrait-Agathe-Plunian.png">
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="stylesheet" href="css/styles.css" /> 
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        
        <!--OG data-->
        <meta property="og:site_name" content="Agathe Plunian portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.agathe-plunian.com" />
        <meta property="og:title" content="Agathe Plunian Portfolio" />
        <meta property="og:description" content="Portfolio développeuse front-end"/>
        <meta property="og:image" content= "https://agathe-plunian.com/img/banner/meta-img.jpg" />

    </head>

    <body>
    
        <!--NAVBAR-->
        <nav>
            <div class="main-nav large-nav-menu">
                <div class="logo-container"><img src="img/banner/portrait-Agathe-Plunian.png"></div>
                <div>
                    <ul class="nav-list">
                        <li id="nav-a-propos" class="nav-item">À propos</li>
                        <li id="nav-services" class="nav-item">Mes services</li>
                        <li id="nav-portfolio" class="nav-item">Mes travaux</li>
                        <li id="nav-competences" class="nav-item">Compétences</li>
                        <li id="nav-contact" class="nav-item">Contact</li>
                    </ul>
                </div>
            </div>


            <div class="small-nav-menu display-none" id="full-screen">
                <div class="logo-container"><img src="img/banner/portrait-Agathe-Plunian.png"></div>
                <div id="burger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div id="toggle-menu" class="small-menu-list display-none-menu">
                    <ul> 
                        <li id="s-nav-a-propos">À propos</li>
                        <li id="s-nav-services">Mes services</li>
                        <li id="s-nav-portfolio">Mes travaux</li>             
                        <li id="s-nav-competences">Compétences</li>
                        <li id="s-nav-contact">Contact</li>
                    </ul> 
                </div>
            </div>

            
        </nav>

        <!--BANNER-->
        <div class="banner">
            <div id="text-banner" role="heading" aria-level="1"></div>
            <div class="etoile-1"></div>
            <div class="etoile-2"></div>
            <div class="etoile-3"></div>
            <div class="etoile-4"></div>
            <div class="etoile-5"></div>
            <div class="etoile-6"></div>
            <div class="etoile-7"></div>
            <div class="etoile-8"></div>
            <div class="etoile-9"></div>
            <div class="etoile-10"></div>
            <div class="etoile-11"></div>
            <div class="portrait-banner"><img src="img/banner/portrait-Agathe-Plunian.png" alt="avatar Agathe Plunian"></div>
            <div class="planete-1"><img src="img/banner/planete1.png" alt="Planète"></div>
            <div class="planete-2"><img src="img/banner/planete2.png" alt="Planète"></div>
            <div class="planete-3"><img src="img/banner/planete3.png" alt="Planète"></div>
            <div class="planete-4"><img src="img/banner/planete4.png" alt="Planète"></div>
            <div class="chien"><img src="img/banner/chien.png" alt="Planète"></div>
            <div class="arrow-down" id="arrow-down"><img src="img/picto/arrow.png" alt="Planète"></div>
        </div>

    

        <div class="a-propos" id="a-propos">
            <div class="a-propos-rond-texte">
                <div class="rond-a-propos"></div>
                <h2>À propos</h2>
                <p>
                    Après plusieurs années en tant qu’illustratrice et autrice jeunesse free-lance,  j'ai décidé il y a deux ans, de me former au métier de développeuse Front-end.<br> (The Hacking Project puis école ESECAD).
                    <br><br>Amatrice de technologies, je souhaite mettre à profit mes compétences en arts graphiques et développement web. Je me suis donc récemment inscrite à la formation de développeur front-end chez OpenClassRooms en alternance afin de poursuivre mon apprentissage !
                </p>
            </div>
            <div class="icones-container a-propos-icone">
                <a class="svg-container" href="https://github.com/AgathePlunian" target="_blank"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 130.204 126.951">
                        <path id="Icon_awesome-github" data-name="Icon awesome-github" d="M43.55,102.783c0,.525-.6.945-1.365.945-.866.079-1.47-.341-1.47-.945,0-.525.6-.945,1.365-.945C42.868,101.76,43.55,102.18,43.55,102.783ZM35.386,101.6c-.184.525.341,1.129,1.129,1.286a1.231,1.231,0,0,0,1.628-.525c.158-.525-.341-1.129-1.129-1.365A1.347,1.347,0,0,0,35.386,101.6Zm11.6-.446c-.761.184-1.286.683-1.208,1.286.079.525.761.866,1.549.683.761-.184,1.286-.683,1.208-1.208C48.459,101.418,47.75,101.077,46.989,101.156ZM64.262.563C27.852.563,0,28.2,0,64.615c0,29.112,18.323,54.024,44.5,62.792,3.36.6,4.541-1.47,4.541-3.176,0-1.628-.079-10.605-.079-16.118,0,0-18.376,3.938-22.234-7.823,0,0-2.993-7.639-7.3-9.608,0,0-6.011-4.121.42-4.043a13.857,13.857,0,0,1,10.133,6.773c5.749,10.133,15.383,7.219,19.137,5.486a14.59,14.59,0,0,1,4.2-8.847c-14.674-1.628-29.48-3.754-29.48-29.007,0-7.219,2-10.842,6.2-15.462-.683-1.706-2.914-8.742.683-17.824,5.486-1.706,18.113,7.088,18.113,7.088a62.015,62.015,0,0,1,32.971,0s12.627-8.82,18.113-7.088c3.6,9.109,1.365,16.118.683,17.824,4.2,4.646,6.773,8.269,6.773,15.462,0,25.332-15.462,27.353-30.136,29.007,2.415,2.074,4.463,6.011,4.463,12.18,0,8.847-.079,19.793-.079,21.946,0,1.706,1.208,3.78,4.541,3.176,26.251-8.715,44.049-33.627,44.049-62.74C130.2,28.2,100.672.563,64.262.563ZM25.516,91.1c-.341.263-.263.866.184,1.365.42.42,1.024.6,1.365.262.341-.262.263-.866-.184-1.365C26.461,90.944,25.857,90.761,25.516,91.1Zm-2.835-2.126c-.184.341.079.761.6,1.024a.781.781,0,0,0,1.129-.184c.184-.341-.079-.761-.6-1.024C23.285,88.634,22.865,88.713,22.681,88.975Zm8.505,9.345c-.42.341-.263,1.129.341,1.628.6.6,1.365.683,1.706.263.341-.341.184-1.129-.341-1.628C32.315,97.98,31.527,97.9,31.186,98.321Zm-2.993-3.859c-.42.263-.42.945,0,1.549s1.129.866,1.47.6a1.2,1.2,0,0,0,0-1.628C29.3,94.383,28.613,94.121,28.193,94.462Z" transform="translate(0 -0.563)" fill="#222288"/>
                    </svg>
                </a>
                <a class="svg-container" href="https://www.linkedin.com/in/agathe-plunian/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 27.479 27.479">
                        <path id="Icon_awesome-linkedin-in" data-name="Icon awesome-linkedin-in" d="M6.151,27.48H.454V9.133h5.7ZM3.3,6.631A3.315,3.315,0,1,1,6.6,3.3,3.327,3.327,0,0,1,3.3,6.631ZM27.473,27.48H21.789V18.549c0-2.128-.043-4.858-2.962-4.858-2.962,0-3.416,2.312-3.416,4.7V27.48H9.72V9.133h5.464v2.5h.08a5.986,5.986,0,0,1,5.39-2.963c5.766,0,6.826,3.8,6.826,8.728V27.48Z" transform="translate(0 0)" fill="#222288"/>
                    </svg>
                </a>
                <a class="svg-container" href="https://www.instagram.com/agatheplunianillustration/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 31.518 31.51">
                        <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z" transform="translate(0.005 -2.238)" fill="#222288"/>
                    </svg>
                </a>    
            </div>

        </div>

        <div class="services">
            <h2>Mes services</h2>
            <div class="services-ronds-container">
                <div class="card-service">
                    <div class="rond-card-service card-rond-webdev">
                        <img src="img/picto/web-dev.png" alt="Web développement">
                    </div>
                    <h3 class="title-card-service">Web développement</h3>
                    <p class="p-margin-bottom">Développement d'applications web front-end, sites vitrines</p>
                    <p class="title-card-rond">Langages utilisés</p>
                    <p>HTML, CSS, SASS, Javascript, PHP</p>      
                </div>

        
                <div class="card-service">
                    <div class="rond-card-service card-rond-webdesign">
                        <img src="img/picto/conception-reactive.png" alt="Web design">
                    </div>
                    <h3 class="title-card-service">Web design</h3>
                    <p class="p-margin-bottom">Conception de wireframes et création de maquettes de sites web</p>
                    <p class="title-card-rond">Outils utilisés</p>
                    <p>Figma, Adobe XD, Indesign, Photoshop</p>      
                </div>

                <div class="card-service">
                    <div class="rond-card-service card-rond-illu">
                        <img src="img/picto/pencil.png" alt="Illustration">
                    </div>
                    <h3 class="title-card-service">Illustration</h3>
                    <p class="p-margin-bottom">Écriture de scénarios, création d'illustrations et de logos</p>
                    <p class="title-card-rond">Outils utilisés</p>
                    <p>Photoshop, Illustrator, Peinture, crayons</p>      
                </div>
            </div>
        </div>

        <div class="mes-travaux">

            <div class="bg-pop-up pop-up-display-none">
                <div class="pop-up" class="pop-up-display-none"></div>
            </div>

            <h2>Mes travaux</h2>
            <div>
                <ul class="works-nav">
                    <li id="btn-dev" class="btn-choice clicked">Développement Web</li>
                    <li id = "btn-design" class="btn-choice">Web Design</li>
                    <li id="btn-illu" class="btn-choice">Illustration</li>
                    <span id="bg-menu-works" class=" bg-menu-dev"></span>        
                </ul>
            </div>

            
            <div id="works-area">
                <!--PORTFOLIO ILLUSTRATIONS-->
                <div class="display-none illustrations">
                    <div class="container-illustrations">
                        <div class="one illustration-portfolio"><img src="img/portfolio/Illustrations/feu.png" alt="Illustration feu de camp">
                            <div class="hover-card-illustration">
                                <img class="avoid loupe" src="img/picto/icone-loupe.png" alt="zoom sur l'illustration">
                            </div>
                        </div>
                        <div class="two illustration-portfolio"><img src="img/portfolio/Illustrations/croco-enfant.png" alt="Illustration enfant sur crocodile">
                            <div class="hover-card-illustration">
                                <img class="avoid loupe" src="img/picto/icone-loupe.png">
                            </div>
                        </div>
                        <div class="three illustration-portfolio"><img src="img/portfolio/Illustrations/cerf-v.jpeg" alt="Illustration petite fille avec cerf-volant">
                            <div class="hover-card-illustration">
                                <img class="avoid loupe" src="img/picto/icone-loupe.png">
                            </div>
                        </div>
                        <div class="four illustration-portfolio"><img src="img/portfolio/Illustrations/orage.jpeg" alt="Illustration petit vieux avec chien sous la pluie">
                            <div class="hover-card-illustration">
                                <img class="avoid loupe" src="img/picto/icone-loupe.png">
                            </div>
                        </div>
                        <div class="five illustration-portfolio"><img src="img/portfolio/Illustrations/espace.jpg" alt="Personnages sur dragon dans l'espace">
                            <div class="hover-card-illustration">
                                <img class="avoid loupe" src="img/picto/icone-loupe.png">
                            </div>
                        </div>
                        <div class="six illustration-portfolio"><img src="img/portfolio/Illustrations/lama.jpeg" alt="Petite fille avec son lama dans la montagne">
                            <div class="hover-card-illustration">
                                <img class="avoid loupe" src="img/picto/icone-loupe.png">
                            </div>
                        </div>
                        <div class="seven illustration-portfolio"><img src="img/portfolio/Illustrations/inuit.png" alt="Enfant inuit avec chien qui pèche du poisson">
                            <div class="hover-card-illustration">
                                <img class="avoid loupe" src="img/picto/icone-loupe.png">
                            </div>
                        </div>
                        <div class="eight illustration-portfolio"><img src="img/portfolio/Illustrations/nuit.png" alt="Image de nuit">
                            <div class="hover-card-illustration">
                                <img class="avoid loupe" src="img/picto/icone-loupe.png">
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="link-insta-illu">Et plus encore sur mon <a class="link" href="https://www.instagram.com/agatheplunianillustration/">Instagram</a> !</p>
                    </div>
                </div>

                <!--PORTFOLIO WEB DESIGN-->
                <div class="WebDesign-portfolio display-none">
                    <div class="card-portfolio resileyes"><img src="img/portfolio/Webdev/resileyes.png" alt="card site ResilEyes">
                        <a id="wdesign-resileyes" class="hover-card">
                            <p class="title-hover avoid">Site vitrine ResilEyes</p>
                            <div class="see-more-container avoid">
                                <p class="see-more avoid">En voir plus</p>
                                <img class="avoid" src="img/picto/arrow-right.png">
                            </div>
                        </a>
                    </div>

                    <div class="card-portfolio maquette-e-commerce"><img src="img/portfolio/WebDesign/maquette-e-commerce.jpg" alt="card site e-commerce">
                        <a id="wdesign-ecommerce" class="hover-card">
                            <p class="title-hover avoid">Maquette site e-commerce</p>
                            <div class="see-more-container avoid">
                                <p class="see-more avoid">En voir plus</p>
                                <img class="avoid" src="img/picto/arrow-right.png">
                            </div>
                        </a>
                    </div>
                </div>

                <!--PORTFOLIO WEBDEV-->

                <div class="webDev-portfolio">

                    <!--RESILEYES-->
                    <div class="card-portfolio"><img src="img/portfolio/Webdev/resileyes.png" alt="card site ResilEyes">
                        <a id="wdev-resileyes" class="hover-card">
                            <p class="title-hover avoid">Site vitrine ResilEyes</p>
                            <div class="see-more-container avoid">
                                <p class="see-more avoid">En voir plus</p>
                                <img class="avoid" src="img/picto/arrow-right.png">
                            </div>
                        </a>
                    </div>
                    
                    <!--OHMMYFOOD-->
                    <div class="card-portfolio"><img src="img/portfolio/Webdev/OhMyFood.jpg" alt="card sit OhMyFood">
                        <a id="wdev-ohMyFood" class="hover-card">
                            <p class="title-hover avoid">Site vitrine OhMyFood</p>
                            <div class="see-more-container avoid">
                                <p class="see-more avoid">En voir plus</p>
                                <img class="avoid" src="img/picto/arrow-right.png">
                            </div>
                        </a>
                    </div>

                    <!--FISHEYE-->
                    <div class="card-portfolio"><img src="img/portfolio/Webdev/fisheyes.jpg" alt="card site Fisheyes">
                        <a id="wdev-fisheye" class="hover-card">
                            <p class="title-hover avoid">Front-end site web Fisheye</p>
                            <div class="see-more-container avoid">
                                <p class="see-more avoid">En voir plus</p>
                                <img class="avoid" src="img/picto/arrow-right.png">
                            </div>
                        </a>
                    </div>
                    <div class="card-portfolio"><img src="img/portfolio/Webdev/reservia.png" alt="card site Reservia"> 
                        <a id="wdev-reservia" class="hover-card">
                            <p class="title-hover avoid">Frond-end site web Reservia</p>
                            <div class="see-more-container avoid">
                                <p class="see-more avoid">En voir plus</p>
                                <img class="avoid" src="img/picto/arrow-right.png">
                            </div>
                        </a>
                    </div>
                    <!--GAME ON-->
                    <div class="card-portfolio"><img src="img/portfolio/Webdev/game-on.png" alt="card site Game On">
                        <a id="wdev-gameon" class="hover-card">
                            <p class="title-hover avoid">Création de formulaire</p>
                            <div class="see-more-container avoid">
                                <p class="see-more avoid">En voir plus</p>
                                <img class="avoid" src="img/picto/arrow-right.png">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!--COMPÉTENCES-->
        <div class="skills">
            <h2>Compétences</h2>

            <div class="skills-container">
                <h3 class="title-skills">Compétences en développement</h3>
                
                <div class="pourcentage-text"><p>HTML-CSS</p><p>95%</p></div>
                <div class="dev-competences">
                    <div class="bg-bar"><div class="pourcentage-bar html-css"></div></div>
                </div>
                
                <div class="pourcentage-text"><p>Javascript</p><p>70%</p></div>
                <div class="dev-competences">
                    <div class="bg-bar"><div class="pourcentage-bar js"></div></div>
                </div>

                <div class="pourcentage-text"><p>PHP</p><p>25%</p></div>
                <div class="dev-competences">
                    <div class="bg-bar"><div class="pourcentage-bar php"></div></div>
                </div>

                <div class="pourcentage-text"><p>MYSQL - SQL</p><p>20%</p></div>
                <div class="dev-competences">
                    <div class="bg-bar"><div class="pourcentage-bar sql"></div></div>
                </div>
            </div>


            <div class="skills-container">
                <h3 class="title-skills">Compétences en conception graphique</h3>
                <div class="pourcentage-text"><p>Photoshop</p><p>95%</p></div>
                <div class="dev-competences">
                    <div class="bg-bar"><div class="pourcentage-bar photoshop"></div></div>
                </div>
                
                <div class="pourcentage-text"><p>Indesign</p><p>90%</p></div>
                <div class="dev-competences">
                    <div class="bg-bar"><div class="pourcentage-bar indesign"></div></div>
                </div>

                <div class="pourcentage-text"><p>Illustrator</p><p>80%</p></div>
                <div class="dev-competences">
                    <div class="bg-bar"><div class="pourcentage-bar illustrator"></div></div>
                </div>

                <div class="pourcentage-text"><p>Adobe XD</p><p>65%</p></div>
                <div class="dev-competences">
                    <div class="bg-bar"><div class="pourcentage-bar adobeXD"></div></div>
                </div>

                <div class="pourcentage-text"><p>Figma</p><p>60%</p></div>
                <div class="dev-competences">
                    <div class="bg-bar"><div class="pourcentage-bar figma"></div></div>
                </div>
            </div>

            <a  href="img/cv/Agathe-Plunian-CV.pdf"
            download="Agathe-Plunian-CV" class="btn">Télécharger mon CV</a>
        </div>

        <!--FORM CONTACT-->
        	    

        <section id="contact" class="form-contact">

            
            <h2>Me contacter</h2>
            
            <div id="resultMessage">

            <?php  if(($_SERVER["REQUEST_METHOD"] == "POST")) {

            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
            $lastName = htmlspecialchars($_POST['lastname']);
            $firstName = htmlspecialchars($_POST['firstname']);
            $email = htmlspecialchars($_POST['email']);
            $subject = htmlspecialchars($_POST['subject']);
            $msg = htmlspecialchars($_POST['message']);
            
             $to      = 'agathe.plunian@gmail.com';
            $subject = $subject;
            $message ="<html><p>Message : $msg </p><p>Email : $email</p><p>Nom: $lastName $firstName</p></html>";
        
            $successMessage = "Votre message à bien été envoyé, merci et à bientôt !";
            $failureMessage = "Oups, une erreur est survenue lors de l'envoie de votre message, n'hésitez pas à me contacter par mail";
            
            if(mail($to, $subject, $message, $headers)) {
                echo '<div class="message-success"><p>'.$successMessage.'</p></div>' ;
            
            }
            else {
                echo '<div class="message-failure"><p class="message-failure">'.$failureMessage.'</p></div>' ;
            
            }
            
        }
        ?>

            </div>
            <div class="form-section">
                <div class="text-form">
                    <p>N'hésitez pas à mon contacter via ce formulaire, ou par  <a class="link" href="mailto:agathe.plunian@gmail.com">mail</a>  &#128522; ! </p>
                    <div class="illu-contact"><img src="img/contact/illustration-contact.png" alt="Illustration boite au lettre contact"></div>
                </div>
            
                <form class="formulaire" action="#contact" method="post" id = "form" name="sendmail"
                        onsubmit="return validate(event);">

                    <div class="names-input">
                        <div class="form-input form-lastname  formData">
                            <label>Nom</label>
                            <input class="text-control" type="text" id="lastname" name="lastname" placeholder="Nom">
                        </div>
                        <div class="form-input form-firstname formData">
                            <label>Prénom</label>
                            <input class="text-control" type="text" id="firstname" name="firstname" placeholder="Prénom">
                        </div>
                    </div>

                    <div class="form-input formData">
                        <label>Email</label>
                        <input  class="text-control" type="text" id="email" name="email" placeholder="Email">
                    </div>
                    <div class="form-input formData">
                        <label>Sujet</label>
                        <input class="text-control" type="text" id="subject" name="subject" placeholder="Sujet">
                    </div>
                    <div class="form-input formData">
                        <label>Votre message</label>
                        <textarea class="message text-control" id="message" name="message" placeholder="Votre message"></textarea> 
                    </div>

                    <button id="submit-message-form"  name="sendmail" value="sendmail" class="submit-message" type="submit">Envoyer mon message</button>
                </form>
            </div>
        </section>

        <footer class="main-footer">
        
            <div class="icones-container">
                <a class="svg-container" href="https://github.com/AgathePlunian" target="_blank"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 130.204 126.951">
                        <path id="Icon_awesome-github" data-name="Icon awesome-github" d="M43.55,102.783c0,.525-.6.945-1.365.945-.866.079-1.47-.341-1.47-.945,0-.525.6-.945,1.365-.945C42.868,101.76,43.55,102.18,43.55,102.783ZM35.386,101.6c-.184.525.341,1.129,1.129,1.286a1.231,1.231,0,0,0,1.628-.525c.158-.525-.341-1.129-1.129-1.365A1.347,1.347,0,0,0,35.386,101.6Zm11.6-.446c-.761.184-1.286.683-1.208,1.286.079.525.761.866,1.549.683.761-.184,1.286-.683,1.208-1.208C48.459,101.418,47.75,101.077,46.989,101.156ZM64.262.563C27.852.563,0,28.2,0,64.615c0,29.112,18.323,54.024,44.5,62.792,3.36.6,4.541-1.47,4.541-3.176,0-1.628-.079-10.605-.079-16.118,0,0-18.376,3.938-22.234-7.823,0,0-2.993-7.639-7.3-9.608,0,0-6.011-4.121.42-4.043a13.857,13.857,0,0,1,10.133,6.773c5.749,10.133,15.383,7.219,19.137,5.486a14.59,14.59,0,0,1,4.2-8.847c-14.674-1.628-29.48-3.754-29.48-29.007,0-7.219,2-10.842,6.2-15.462-.683-1.706-2.914-8.742.683-17.824,5.486-1.706,18.113,7.088,18.113,7.088a62.015,62.015,0,0,1,32.971,0s12.627-8.82,18.113-7.088c3.6,9.109,1.365,16.118.683,17.824,4.2,4.646,6.773,8.269,6.773,15.462,0,25.332-15.462,27.353-30.136,29.007,2.415,2.074,4.463,6.011,4.463,12.18,0,8.847-.079,19.793-.079,21.946,0,1.706,1.208,3.78,4.541,3.176,26.251-8.715,44.049-33.627,44.049-62.74C130.2,28.2,100.672.563,64.262.563ZM25.516,91.1c-.341.263-.263.866.184,1.365.42.42,1.024.6,1.365.262.341-.262.263-.866-.184-1.365C26.461,90.944,25.857,90.761,25.516,91.1Zm-2.835-2.126c-.184.341.079.761.6,1.024a.781.781,0,0,0,1.129-.184c.184-.341-.079-.761-.6-1.024C23.285,88.634,22.865,88.713,22.681,88.975Zm8.505,9.345c-.42.341-.263,1.129.341,1.628.6.6,1.365.683,1.706.263.341-.341.184-1.129-.341-1.628C32.315,97.98,31.527,97.9,31.186,98.321Zm-2.993-3.859c-.42.263-.42.945,0,1.549s1.129.866,1.47.6a1.2,1.2,0,0,0,0-1.628C29.3,94.383,28.613,94.121,28.193,94.462Z" transform="translate(0 -0.563)" fill="#fff"/>
                    </svg>
                </a>
                <a class="svg-container" href="https://www.linkedin.com/in/agathe-plunian/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 27.479 27.479">
                        <path id="Icon_awesome-linkedin-in" data-name="Icon awesome-linkedin-in" d="M6.151,27.48H.454V9.133h5.7ZM3.3,6.631A3.315,3.315,0,1,1,6.6,3.3,3.327,3.327,0,0,1,3.3,6.631ZM27.473,27.48H21.789V18.549c0-2.128-.043-4.858-2.962-4.858-2.962,0-3.416,2.312-3.416,4.7V27.48H9.72V9.133h5.464v2.5h.08a5.986,5.986,0,0,1,5.39-2.963c5.766,0,6.826,3.8,6.826,8.728V27.48Z" transform="translate(0 0)" fill="#fff"/>
                    </svg>
                </a>
                <a class="svg-container" href="https://www.instagram.com/agatheplunianillustration/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 31.518 31.51">
                        <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z" transform="translate(0.005 -2.238)" fill="#fff"/>
                    </svg>
                </a>
            
            </div>
            <p>Agathe Plunian</p>
        </footer>
    
            <script src="js/index.js"></script>
            <script src="js/portfolio.js"></script>
            <script src="js/form-validate.js"></script>
    </body>
</html>     