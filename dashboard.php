<title>Logo Mastrey| Dashboard</title>

<meta name="description" content="">





<?php include 'includes/header.php'; ?>
<?php include 'includes/header-two.php'; ?>


<body>

    
<section class="slider-banner" style="background-image: url(assets/images/custom-banner.jpg); height: 400px !important;">
        <div class="slider-carousel-1">
            <div class="item">
                <div class="container">
                    <div class="row justify-content-between no-gutters">
                        <div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-right" data-aos-duration="2000">
                            <div class="slider-text">
                                <h3><span>Welcome to logo mastery Manage all your order From Here</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="adminBoard" style="background-color:#fff!important; margin-top: 150px; margin-bottom: 150px;">

        <div class="container">

            <div class="row">

                <div class="col-lg-3 col-md-4">

                    <div class="boardCard">

                        <div class="card">

                            <div class="card-header">

                                <h3>Dashboard</h3>

                            </div>

                            <div class="card-body">

                                <div class="accordion" id="accordionExample">

                                    <div class="accordionLink">

                                        <a href="javascript:void(0);" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                                            Actions

                                        </a>

                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">

                                            <ul>

                                                <li><a href="./dashboard.php" class="active">Home</a></li>

                                                <li><a href="./pricing.php" target="_blank">Place New Order</a></li>

                                                <li><a href="./refer_friend.php">Refer a Friend</a></li>

                                                <li><a href="#">Sign Out</a></li>

                                            </ul> 

                                        </div>

                                    </div>

                                    <div class="accordionLink">

                                        <a href="javascript:void(0);" class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">

                                            Profile Management

                                        </a>

                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">

                                            <ul>

                                                <li><a href="./update_profile.php">View/Update your Profile</a></li> 

                                                <li><a href="./update_password.php">Change Password</a></li> 

                                            </ul>

                                        </div>

                                    </div>

                                </div> 

                            </div>

                        </div>

                    </div>

                </div>

                <div class="col-lg-9 col-md-8">

                    <div>

                        <div class="tableParent">

                            <table class="table table-striped">

                                <thead>

                                    <tr>

                                        <th><i class="fa fa-bullhorn"></i>Order Id</th>

                                        <th><i class="fa fa-question-circle"></i>Package</th>

                                        <th><i class="fa fa-bookmark"></i>Amount</th>

                                        <th><i class="fa fa-bookmark"></i>Order Date</th>

                                        <th><i class=" fa fa-edit"></i>Status</th>

                                        <th><i class=" fa fa-edit"></i>Request Amendment</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <?php 
                                                            $servername = DBHOST;
                                                            $username = DBUSER;
                                                            $password = DBPWD;
                                                            $dbname = DBNAME;
                                                            // Create connection
                                                            $conn_db = mysqli_connect($servername, $username, $password, $dbname);
                                                            // Check connection
                                                            $email_address = $_SESSION['email_login'];

                                                            $sql = "SELECT * FROM users WHERE email = '$email_address'";
                                                            $result = mysqli_query($conn_db,$sql);
                                                            $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
                                                            
                                                            $sql_order = "SELECT ord.*, pack.item_name as package_name, pack.payment_amount as price FROM `orders` as ord LEFT JOIN payment as pack ON pack.id=ord.payment_id WHERE ord.user_id = '".$row['id']."' ORDER BY ord.id DESC";
                                                            $result_order = mysqli_query($conn_db,$sql_order);

                                                            if ($result_order->num_rows > 0) {
                                                                // output data of each row
                                                                while($row_order = $result_order->fetch_assoc()) { 

                                                                        if ($row_order['order_status'] == 0) {
                                                                            $order_status = 'Not Verified';
                                                                        } else if ($row_order['order_status'] == 1) {
                                                                            $order_status = 'Paid';
                                                                        } else {
                                                                            $order_status = 'Verified';
                                                                        }
                                                                    ?>

                                                                    <tr>
                                                                        <td><a href="javascript:;"><?php echo $row_order['invoice_number']; ?></a></td>
                                                                        <td class="hidden-phone"><?php echo $row_order['package_name']; ?></td>
                                                                        <td>$ <?php echo $row_order['price']; ?></td>
                                                                        <td><?php echo $row_order['added_date']; ?></td>
                                                                        <td>
                                                                        <span class="label label-danger label-mini"><?php echo $order_status; ?></span></td> 
                                                                        <td><a class="btn btn-primary btn-xs" href="mailto:team@chemist.com"><i class="fa fa-pencil"></i></a></td>  
                                                                    </tr>
                                                                <?php }
                                                            } else {
                                                                echo '<td colspan="6">No Record Found</td>';
                                                            }
                                                        ?>

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>



    

<?php include 'includes/footer.php'?>