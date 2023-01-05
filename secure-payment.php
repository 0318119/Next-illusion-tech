<title> Logo Mastery| Custom_payment</title>
<meta name="description" content="Hold a strong and confident presence in the virtual world that comes with professionally designed and executed websites of Designs Avenue.">

<?php 

include 'includes/header.php';

$get_id = isset($_REQUEST['lc_py']) ? $_REQUEST['lc_py']:'';
$lead_id_getting = explode("z", $get_id);
$lead_id = isset($lead_id_getting[1])?$lead_id_getting[1]:'';
$error_getting = 0;

        if($lead_id) {
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

            $sql_lead = "SELECT * FROM custom_leads WHERE id = ".$lead_id;
            $result_lead = $conn_logodb->query($sql_lead);
            $row_lead = $result_lead->fetch_array(MYSQLI_ASSOC);
            
            if ($row_lead) {
                $payment_method = isset($row_lead['payment_method']) ? $row_lead['payment_method']:'';

                if ($payment_method == "Stripe") { ?>

<link rel="stylesheet" href="<?=BaseUrl?>/assets/css/normalize.css" />
<link rel="stylesheet" href="<?=BaseUrl?>/assets/css/global.css" />

<?php
                }

                $email_book = isset($row_lead['email']) ? $row_lead['email']:'';
                $package_id = isset($row_lead['package_id']) ? $row_lead['package_id']:'88888';
                $package_name_custom = isset($row_lead['custom_package_name']) ? $row_lead['custom_package_name']:'';
                if ($package_name_custom) {
                    $package_name = $package_name_custom;
                    $price = isset($row_lead['price']) ? $row_lead['price']:'';
                } else {
                    $getpackage_sql = "SELECT * FROM packages WHERE id = '$package_id'";
                    $getpackage_result = $conn_logodb->query($getpackage_sql);
                    $getpackage_detail = $getpackage_result->fetch_array(MYSQLI_ASSOC);
                    $package_name = $getpackage_detail['name'];
                    $price = isset($row_lead['price']) ? $row_lead['price']:'';
                }
                $sql = "SELECT * FROM users WHERE email = '$email_book'";
                $result = $conn_logodb->query($sql);
                $row = $result->fetch_array(MYSQLI_ASSOC);
                
                if ($row) {

                    $email_user = $row['email'];
                    $first_name = $row['first_name'];
                    $last_name = $row['last_name'];
                    $phone_no = $row_lead['phone_no'];
                
                } else {
                
                $email_user = $email_book;
                $custom_name = $row_lead['customer_name'];
                $nameget = explode(" ", $custom_name);
                $first_name = $nameget[0];
                $last_name = isset($nameget[1])?$nameget[1]:'';
                $phone_no = $row_lead['phone_no'];
                $opassword = 'logochemist'.rand(00000,99999);
                $password = password_hash($opassword, PASSWORD_DEFAULT);
                 $sql = "INSERT INTO users (`first_name`,`last_name`,`email`,`password`,`phone_no`) VALUES('$first_name','$last_name','$email_user','$password','$phone_no')";
                if ($conn_logodb->query($sql) === TRUE) {
                    
                    $status=false;
                    $htmlStr = "";
                    $htmlStr .= "Congrats New User Signup<br /><br />";
            
                    $htmlStr .= "<b>First Name: </b>" . $first_name . "<br />";
                    $htmlStr .= "<b>Last Name: </b>" . $last_name . "<br />";
                    $htmlStr .= "<b>Email: </b>" . $email_user . "<br />";
                    $htmlStr .= "<b>Phone: </b>" . $phone_no . "<br /><br />";
                    $htmlStr .= "Kind regards,<br />";
                    $htmlStr .= "Team Logo Chemist";
            
                    //for thankyoupage redirection
                    $_SESSION['email_login'] = $email_user;
                    $_SESSION['fname'] = $first_name;
                    $_SESSION['lname'] = $last_name;
                    $_SESSION['phone_no'] = $phone_no;

                    $name = "Team Logochemist";
                    $email_sender = "team@logochemist.com";
                    $subject = "Register Info";
                    
                    $recipient_email = $email_sender;
                    
                    $headers  = "MIME-Version: 1.0\r\n";
                    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
                    $headers .= "From: {$name} <{$email_sender}> \n";
            
                    $body = $htmlStr;
                    if( mail($recipient_email, $subject, $body, $headers) ){
                        $status=true;
                    }
                    if($status==true){
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
                                                            <span style="font-size:13px;color:#302b2b;font-family:Arial, Helvetica, sans-serif;">Dear '.$first_name.',</span><p>Thank you for joining LogoChemist. We are excited to work with you. Our team will make sure your Project is handled professionally.</p> <p>If you have any query regarding your project reply to this mail and we will be more than happy to help you.</p><p>Your Login Info <br /> <b>Email: </b>' . $email_user . '<br /> <br /> <b>Password: </b>' . $opassword . '</td></tr>
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
                                        
                                        $recipient_email = $email_user;
                                        
                                        $headers  = "MIME-Version: 1.0\r\n";
                                        $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
                                        $headers .= "From: {$name} <{$email_sender}> \n";
                              
                                        $body = $html_new_customer;
                                        if( mail($recipient_email, $subject, $body, $headers) ){

                                        echo "<script>
                                        $(document).ready(function () {
                                            function open_win() {
                                                 setTimeout(window.open('thankyou.php'),1000);
                                            }
                                            open_win();
                                        });
                                        </script>";

                                        }
                    }
                } else {
                    echo "Error: " . $sql . "<br>" . $conn_logodb->error;
                }
                }
            } else { 
                echo "<script>window.location.href='https://www.logochemist.com/404.php';</script>";
                exit;
            }
        } else {
            echo "<script>window.location.href='https://www.logochemist.com/404.php';</script>";
            exit;
        }
        if ($error_getting == 0) { ?>
<main>
    <section class="banner">
        <div class="banner-img">
            <img src="img/banner_web.jpg" alt="banner">
        </div>
        <div class="banner-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <div class="row">
                            <div class="service-desc">
                                <h2>
                                    <?php if ($payment_method == "Stripe") { 
                                        $payment_text="Credit/Debit Card";
                                    } else { 
                                        $payment_text="PayPal";
                                    } ?>
                                    PAY USING <?php echo $payment_text; ?>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="paymentSection">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="boardCard">
                        <div class="card">
                            <div class="card-header">
                                <h3>PAY USING <?php echo $payment_text; ?></h3>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <th><img src="./img/icon-tabel.png" alt="icon-tabel" class="mr-2">Items:
                                                </th>
                                                <td><?=$package_name?></td>
                                            </tr>
                                            <tr>
                                                <th><img src="./img/icon-tabel1.png" alt="icon-tabel"
                                                        class="mr-2">Amount:</th>
                                                <td><?="$". $price?></td>
                                            </tr>
                                            <tr>
                                                <th><img src="./img/icon-tabel2.png" alt="icon-tabel"
                                                        class="mr-2">Email:</th>
                                                <td><?=$email_user?></td>
                                            </tr>
                                            <tr>
                                                <th><i class="tickiconcss fa fa-check" aria-hidden="true"></i></th>
                                                <td><a class="linkcolor"
                                                        href="https://www.logochemist.com/order/terms.php"
                                                        target="_blank">Terms and Condition</a> (Accepted)</td>
                                            </tr>
                                            <div class="card-type">
                                                <tr>
                                                    <th>First Name</th>
                                                    <td><input type="text" class="form-control" name="first_name"
                                                            value="<?=$first_name?>"></td>
                                                </tr>
                                                <tr>
                                                    <th>Last Name</th>
                                                    <td><input type="text" class="form-control" name="last_name"
                                                            value="<?=$last_name?>"></td>
                                                </tr>
                                            </div>
                                        </tbody>
                                    </table>
                                </div>
                                <?php $url = 'https://www.logochemist.com'; 
                                    if($payment_method == "PayPal"){ ?>
                                <form action="<?=PAYPALURL?>" method="post" target="_top" style="background-color: #f3f3f380;">
                                    <input type='hidden' name='business' value='<?=PaypalEmail?>'>
                                    <input type='hidden' name='amount' value="<?=$price?>">
                                    <input type='hidden' name='item_number' value="<?=$package_id?>">
                                    <input type='hidden' name='item_name' value="<?=$package_name?>">
                                    <input type='hidden' name='currency_code' value='USD'>
                                    <input type="hidden" name="custom" value="<?=$phone_no.SplitString.$phone_no?>" />
                                    <input type="hidden" name="payer_email" value="<?=$email_book?>" />
                                    <input type='hidden' name='notify_url' value='<?=$url?>/notify.php'>
                                    <input type='hidden' name='rm' value='2'>
                                    <input type='hidden' name='cancel_return' value='<?=$url?>/cancel.php'>
                                    <input type='hidden' name='return' value='<?=$url?>/order_thankyou2.php'>
                                    <input type="hidden" name="cmd" value="_xclick">
                                    <input type="submit" name="pay_now" id="pay_now" class="btn btn-rounded btn-white-outline active btn-block grad-btn-t" Value="Pay Now">
                                </form>
                                <?php } else if ($payment_method == "Stripe") { ?>
                                <form id="payment-form" class="sr-payment-form">
                                    <input type='hidden' id='packageId' name='packageId' value='<?=$getpackage_detail['id']?>'>
                                    <input type='hidden' id='email' name='email' value='<?=$email_book?>'>
                                    <input type='hidden' id='amount' name='amount' value='<?=$price?>'>
                                    <input type='hidden' id='packagename' name='packagename' value="<?=$package_name?>">
                                    <input type='hidden' id='phone' name='phone' value="<?=$phone_no?>">
                                    <input type='hidden' id='userpassword' name='userpassword' value="<?=$phone_no?>">
                                    <div class="sr-combo-inputs-row">
                                        <input type='text' id='fullname' name='fullname' required placeholder="full name">
                                    </div>
                                    <hr />
                                    <div class="sr-combo-inputs-row">
                                        <div class="sr-input sr-card-element" id="card-element"></div>
                                    </div>
                                    <div class="sr-field-error" id="card-errors" role="alert"></div>
                                    <button id="submit">
                                        <div class="spinner hidden" id="spinner"></div>
                                        <span id="button-text">Pay</span><span id="order-amount"></span>
                                    </button>
                                </form>
                                <?php } else { ?>

                                <?php } } ?>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 offset-lg-1 d-none d-md-block">
                    <img src="./img/pic-table.jpg" alt="pic-table" class="img-fluid">
                    <div class="row" style="margin-top:25px;">
                                <div class="col-md-12 d-flex center" > 
                                	<div class="col-md-4 center"> 
                                	    <img src="img/trustpilot.svg" alt="Trustpilot grade" style="width:130px;" title="" /> 
                                	</div>
                                 	<div class="col-md-4 center" > 
                                	    <img src="img/google-reviews.svg" alt="Google Customer Reviews grade" style="width:130px;" title="" /> 
                                	</div>
                                	<div class="col-md-4 center"> 
                                	    <img src="img/bbb-rating.svg" alt="BBB Accerdited Business A+ Rating" style="width:130px;" title="" />
                                	</div> 
                                </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <?php include 'includes/footer.php';

    if($payment_method == "Stripe") {

    ?>
    <!-- Stripe JavaScript library -->
    <script src="https://js.stripe.com/v3/"></script>
    <script src="<?=BaseUrl?>/assets/js/stripe.js" defer></script>
    <script>
    </script>
    <?php } ?>