<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include 'config.php';
$payment_method = isset($_POST['payment_method']) ? $_POST['payment_method']:'Stripe';
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
    $agent_name = isset($_POST['agent_name']) ? $_POST['agent_name']:'';
    $customer_name = isset($_POST['cust_name']) ? $_POST['cust_name']:'';
    $email = isset($_POST['email']) ? $_POST['email']:'';
    $phone_no = isset($_POST['cust_phone']) ? $_POST['cust_phone']:'';
    $package_id = isset($_POST['package_id']) ? $_POST['package_id']:'88888';
    $custom_package_name = isset($_POST['cust_logo_package']) ? $_POST['cust_logo_package']:'';
    $invoice = isset($_POST['invoice']) ? $_POST['invoice']:'';
    
    if ($custom_package_name) {
        $package_name = $custom_package_name;
        $price = isset($_POST['price']) ? $_POST['price']:'';
    } else {
        $package_id = $package_id * 1;
        $getpackage_sql = "SELECT * FROM packages WHERE id = $package_id";
        $getpackage_result = $conn_logodb->query($getpackage_sql);
        $getpackage_detail = $getpackage_result->fetch_array(MYSQLI_ASSOC);
        $package_name = $getpackage_detail['name'];
        $price = isset($_POST['price']) ? $_POST['price']:'';
    }
    
    $sql = "INSERT INTO custom_leads (`customer_name`,`email`,`phone_no`,`package_id`,`custom_package_name`,`price`,`invoice`, `payment_method`, `agent_name`) VALUES('$customer_name','$email','$phone_no',$package_id,'$custom_package_name','$price','$invoice', '$payment_method', '$agent_name')";
    
    if ($conn_logodb->query($sql) === TRUE) {
        $lead_id = $conn_logodb->insert_id;
        $rand_a = rand(1000,99999999);
        $payment_keyword = 'lc_py=ywuz'.$lead_id.'zuwi'.$rand_a;
        $payment_link = 'https://www.logochemist.com/secure-payment.php?'.$payment_keyword;
        $lead_update = "UPDATE custom_leads SET `payment_link`='$payment_link',`payment_keyword`='$payment_keyword' WHERE id=".$lead_id;
        $conn_logodb->query($lead_update);
        
        $status=false;
            $htmlStr = "";
            $htmlStr .= "Dear Admin,<br /><br />";
            
            $htmlStr .= "<b>Agent Name: </b>" . $agent_name . "<br />";
            $htmlStr .= "<b>Customer Name: </b>" . $customer_name . "<br />";
            $htmlStr .= "<b>Package Name: </b>" . $package_name . "<br />";
            $htmlStr .= "<b>Email: </b>" . $email . "<br />";
            $htmlStr .= "<b>Phone: </b>" . $phone_no . "<br />";
            $htmlStr .= "<b>Price: </b>$" . $price . "<br />";
            $htmlStr .= "<b>Payment Link: </b><a href='".$payment_link."' target='_blank'>" . $payment_link . "</a><br /><br />";
            $htmlStr .= "Kind regards,<br />";
            $htmlStr .= "Team Logo Chemist";
    
    
            $name = "Team Logochemist";
            $email_sender = "team@logochemist.com";
            $subject = "Custom Payment Link";
            
            $recipient_email = $email_sender;
            
            $headers  = "MIME-Version: 1.0\r\n";
            $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
            $headers .= "From: {$name} <{$email_sender}> \n";
    
            $body = $htmlStr;
            if(mail($recipient_email, $subject, $body, $headers)){
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
                                                            <span style="font-size:13px;color:#302b2b;font-family:Arial, Helvetica, sans-serif;">Dear '.$customer_name.',</span><p>Thank you for choosing LogoChemist. We are excited to work with you.</p><p>Please proceed your Payment : <a href="'.$payment_link.'" target="_blank">' . $payment_link . '</a></p></td></tr>
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
                                        $subject = "Secure Payment Link - LogoChemist";
                                        
                                        $recipient_email = $email;
                                        
                                        $headers  = "MIME-Version: 1.0\r\n";
                                        $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
                                        $headers .= "From: {$name} <{$email_sender}> \n";
                                        $body = $html_new_customer;
                                        mail($recipient_email, $subject, $body, $headers);
                                        //redirect to thankyou page here..... 
                                        echo "<script>window.location.href='".$payment_link."';</script>";
                                        exit;
                    }
            
    } else {
        echo "Error: " . $sql . "<br>" . $conn_logodb->error;
    }
}

// if($status==true){

// }