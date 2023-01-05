<!DOCTYPE html>
<html lang="en">

<?php include 'includes/header-one.php'; ?>

    <title>Contact Us | Logo Mastery</title>
    <meta name="description"
        content="Contact us for your digital needs and we shall devise a strategic plan for your business. Build and influence digitally.">
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">


<?php include 'includes/header-two.php'; ?>


<section class="slider-banner" style="background-image:url(assets/images/main-banner.webp);">
    <div class="slider-carousel-1">
        <div class="item">
            <div class="container">
                <div class="row justify-content-between no-gutters">
                    <div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-right" data-aos-duration="2000">
                        <div class="slider-text">
                            <!-- <h3><span>We Create AWE-INSPIRING</span></h3> -->
                            <h4><span>Get In Touch <br /> With Us</span></h4>
                            <p>Are there any questions regarding our services? We'd be more than happy to assist you
                                anytime.
                            </p>
                            <a class="btn btn-lg button mt-2" data-toggle="modal" data-target="#popup_form" href="#">
                                <span>GET STARTED</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 slider-img">
                        <img src="assets/images/inner-banner/banner-right/contact-right.png" alt=""
                            class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="main-service contact-banner-img">
    <span></span>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12" data-aos="fade-right" data-aos-duration="2000"  style="border-left: 4px solid #2E44F6; padding-bottom: 20px; border-bottom: 4px solid #FC716A; padding-right: 20px;">
                <div class="row">
                    <div class="col-md-12">
                        <div class="lets-talk-sec">
                            <h5>Let's Discuss.</h5>
                            <p>Our happy to help customer support representatives are always available with the
                                information you need.</p>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="call-us-box">
                            <div class="call-main-box">
                                <img src="assets/images/phone-icon-img.png" alt="phone-icon-img"
                                    class="img-fluid"/>
                                <div class="call-info">
                                    <p>call us at</p>
                                    <a href="tel:+1 (214) 907-6877">+1 (214) 907-6877</a>
                                </div>
                            </div>
                            <hr />
                            <p>24/7 Live Chat Support! We are just one ping away.</p>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="call-us-box chat-us-box">
                            <div class="call-main-box chat-us-main-box">
                                <img src="assets/images/chat-icon-img.png" alt="phone-icon-img" class="img-fluid" />
                                <div class="call-info chat-info">
                                    <a href="javascript:;" class="chatt">
                                        <p>let's chat now</p>
                                        <h5 href="javascript:;">live chat</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12" data-aos="fade-left" data-aos-duration="2000">
                <div class="main-form" data-form-type="contact_form" style="border-top: 4px solid #2E44F6; padding-top: 20px;">
                    <form class="signupForm" method="post" enctype="multipart/form-data" action="lead-get.php">

                        <div class="contact-form"  style="border-right: 4px solid #FC716A; padding-right: 20px;">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="contact-form-control">
                                        <input type="text" class="form-control" placeholder="First Name *"
                                            name="customer_name" required="" aria-required="true">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="contact-form-control">
                                        <input type="text" class="form-control" placeholder="Phone *" maxlength="15"
                                            name="phone_number" data-validation="required">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="contact-form-control">
                                        <input type="text" class="form-control" placeholder="Email Address *"
                                            name="email_address" data-validation="required">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="contact-form-control">
                                        <textarea name="description" id="description" placeholder="Requirement *"
                                            required="" rows="5"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div id="formResult"></div>
                                    <button class="btn btn-default portfolio-btn contact-btn-sbt" type="submit"
                                        id="signupBtn" name="submit"> Send Now</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
<?php include 'includes/modal-popup-form.php'; ?>
</body>

</html>