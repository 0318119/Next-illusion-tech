<?php 

ini_set('display_errors', 1);

ini_set('display_startup_errors', 1);

error_reporting(E_ALL);



    if(!isset($_SESSION)){

        session_start();

    }



?>



<!DOCTYPE html>

<html lang="en">

<?php include 'includes/header-one.php'; ?>

<title>We are here for you 24/7 | Contact us</title>

<meta name="description" content="Our support assistance team is available 24/7 for your support and consultancy. Feel free to reach out to us.">

<link rel="canonical" href="https://www.logochemist.com/thankyou.php">

<?php include 'includes/header-two.php'; ?>



<?php



        if(count($_POST) > 0) {



            $servername = DBHOST;

            $username = DBUSER;

            $password = DBPWD;

            $dbname = DBNAME;

            // Create connection

            $conn_logodb = new mysqli($servername, $username, $password, $dbname);

            // Check connection

            if ($conn_logodb->connect_error) {

                die("Connection failed: " . $conn_logodb->connect_error);

            } 



    

            $first_name = $_POST['first_name'];

            $last_name = $_POST['last_name'];

            $email_book = $_POST['email_book'];

            $password = $_POST['password'];

            $countryid = $_POST['countryid'];

            $phone_book = $_POST['phone_book'];

            $password = password_hash($password, PASSWORD_DEFAULT);



            $sqlselect = "SELECT * FROM users WHERE email = '$email_book'";

            $result = $conn_logodb->query($sqlselect);

            $email_exist = mysqli_num_rows($result);



            if ($email_exist == TRUE) {

                $status = false;

                $heading = 'Error';

                $msg = 'Email Already Exist Please try Again.';

            } else {



                //if(empty($_SESSION['captcha_code'] ) || strcasecmp($_SESSION['captcha_code'], $_POST['captcha_code']) != 0){

                if (!isset($_SESSION['captcha_code'])) {



                    $msg = 'Captcha verification is in-correct. Kindly go <a href="javascript:history.back();">back</a> and try again.<br>'; //$_SESSION['captcha_code']

                    $status = false;



                

                } else {

                    

                    $sql = "INSERT INTO users (`first_name`,`last_name`,`email`,`password`,`phone_no`,`country_id`) VALUES('$first_name','$last_name','$email_book','$password','$phone_book','$countryid')";



                    if ($conn_logodb->query($sql) === TRUE) {



                        $status=false;

                        $htmlStr = "";

                        $htmlStr .= "Congrats New User Signup<br /><br />";            



                        $htmlStr .= "<b>First Name: </b>" . $first_name . "<br />";

                        $htmlStr .= "<b>Last Name: </b>" . $last_name . "<br />";

                        $htmlStr .= "<b>Email: </b>" . $email_book . "<br />";

                        $htmlStr .= "<b>Phone: </b>" . $phone_book . "<br /><br />";



                        $htmlStr .= "Kind regards,<br />";

                        $htmlStr .= "Team Logo Chemist";



                        $name = "Team Logochemist";

                        $email_sender = "team@logochemist.com";

                        $subject = "User Register Info";



                        $recipient_email = $email_sender;



                        $headers  = "MIME-Version: 1.0\r\n";

                        $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

                        $headers .= "From: {$name} <{$email_sender}> \n";



                        $body = $htmlStr;



                        if( mail($recipient_email, $subject, $body, $headers) ){

                            $status=true;

                        }



                        if($status==true){



                            $_SESSION['email_login'] = $email_book;

                            $_SESSION['fname'] = $first_name;

                            $_SESSION['lname'] = $last_name;

                            $_SESSION['phone_no'] = $phone_book;

                            

                            $html_new_customer = '<html><body>';

                            $html_new_customer .='<table width="650" border="0" align="center" cellpadding="0" cellspacing="0" style="background:#ffffff;border:#f6f6f6 4px solid;">



                                <tbody>

                                    <tr>

                                        <td align="center" valign="top">

                                            <table width="650" border="0" align="center" cellpadding="0" cellspacing="0">

                                                <tbody>

                                                    <tr>

                                                        <td align="center" valign="top" bgcolor="#131211">



                                                        <table width="80" border="0" cellspacing="0" cellpadding="0">



                                                            <tbody>



                                                                <tr><td height="10" align="center" valign="top"></td></tr>



                                                                <tr><td align="center" valign="top"><img src="http://www.logochemist.com/assets/img/logo_chemist.png" alt="logochemist.com" width="171" height="81"></td></tr>



                                                                <tr><td height="10" align="center" valign="top"></td></tr>

                                                            </tbody>



                                                        </table>



                                                        </td>



                                                    </tr>



                                                    <tr><td height="5" align="center" valign="middle" bgcolor="#eb2c33"></td></tr>



                                                </tbody>



                                            </table>



                                        </td>



                                    </tr>



                                    <tr>



                                        <td width="620" height="259" align="center" valign="top">



                                            <table width="596" border="0" align="center" cellpadding="0" cellspacing="0" style="font:normal 13px Arial, Helvetica, sans-serif;color:#0d0d0d;padding:0px 0;">



                                                <tbody>



                                                    <tr><td height="20" align="center" valign="middle"></td></tr>



                                                    <tr><td height="20" align="left" valign="middle"></td></tr>



                                                    <tr><td height="73" align="left" valign="middle">



                                                        <span style="font-size:13px;color:#302b2b;font-family:Arial, Helvetica, sans-serif;">Dear '.$first_name.',</span><p>Thank you for joining LogoChemist. We are excited to work with you. Our team will make sure your Project is handled professionally.</p> <p>If you have any query regarding your project reply to this mail and we will be more than happy to help you.</p></td></tr>



                                                    <tr><td height="20" align="left" valign="middle">&nbsp;</td></tr>



                                                </tbody>



                                            </table>



                                        </td>



                                    </tr>



                                    <tr><td align="center" valign="middle"></td></tr>



                                    <tr><td height="98" valign="middle" bgcolor="#f6f6f6">



                                        <table width="596" border="0" align="center" cellpadding="0" cellspacing="0" style="font:normal 13px Arial, Helvetica, sans-serif;color:#0d0d0d;padding:0px 0;">



                                            <tbody>



                                                <tr><td width="574" height="73" align="left" valign="middle"><span style="font-size:13px;color:#302b2b;font-family:Arial, Helvetica, sans-serif;">Thank you<br>Customer Care Department<br>LogoChemist</span></td></tr>



                                            </tbody>



                                        </table>



                                    </td>



                                    </tr>



                                </tbody>



                            </table>';



                            $html_new_customer .= "</body></html>";              



                            $name = "Team Logochemist";

                            $email_sender = "team@logochemist.com";

                            $subject = "Welcome to LogoChemist";

                            $recipient_email = $email_book;



                            $headers  = "MIME-Version: 1.0\r\n";

                            $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

                            $headers .= "From: {$name} <{$email_sender}> \n";



                            $body = $html_new_customer;



                            if( mail($recipient_email, $subject, $body, $headers) ){



                            }                     



                        }



                    } else {



                        echo "Error: " . $sql . "<br>" . $conn_logodb->error;

                    }

                }



            }

            $conn_logodb->close();



        } else {

            //if(!isset($email_exist)){

                $status=true; 

            //}

            //$status=true;

        }



    ?>



<div class="errorPage py-5" style="min-height: 480px;">



    <div class="container">



        <div class="row align-items-center">



            <div class="col-md-8">



                <div class="errorDesc text-center">



                    <h2><?php $heading = isset($heading)?$heading:'Thank You!'; echo $heading; ?></h2>



                    <!-- <h4>We Are Sorry</h4> -->



                    <p>



                        <?php $msg = isset($msg)?$msg:'Thanks for Signup !'; echo $msg; ?>



                    </p>



                </div>



            </div>



            <div class="col-md-2 offset-md-2 d-none d-md-block">

                <img src="assets/images/brokenLink.png" alt="broken link" class="img-fluid">

            </div>

        </div>

    </div>



</div>

<?php

if($status==true){

    echo "<script>

    setTimeout(function(){

        window.location.replace('dashboard.php');

    }, 5000) 

    </script>";

}

?>

<?php include 'includes/footer.php'?>