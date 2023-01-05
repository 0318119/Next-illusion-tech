<title>Logo Mastery| About</title>
<meta name="description" content="Logo Mastery an experienced digital branding agency with a vision that sees beyond the horizon. Learn more about what makes us the best in our industry.">

<?php include 'includes/header.php'?>
<?php include 'includes/header-one.php'?>
<?php include 'includes/header-two.php'?>
<?php 

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
        ?>


    
    <main>

    <section class="slider-banner" style="background-image: url(assets/images/custom-banner.jpg); height: 400px !important;">
        <div class="slider-carousel-1">
            <div class="item">
                <div class="container">
                    <div class="row justify-content-between no-gutters">
                        <div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-right" data-aos-duration="2000">
                            <div class="slider-text">
                                <h4><span>Custom Payment Form</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="section-padding" style="padding: 60px; background-color: #fff;">
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                        <div>
                            <div class="form-group">
                                <div class="panel panel-default credit-card-box">
                                <div class="panel-heading display-table">
                                    <div class="row display-tr">
                                            <div class="display-td">                            
                                        </div>
                                    </div>                    
                                </div>
                                <?php 
                                $invoice_id = time();
                                $invoe = 'LC_'.$invoice_id; ?>
                                <div class="panel-body">
                                    <form role="form" id="payment-form" method="POST" action="create_pay_link.php">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label for="cardNumber" class="h6 mb-3 text-dark">Agent Name</label>
                                                        <input type="name" class="form-control mb-5" name="agent_name" placeholder="Agent Name" required="" autofocus="">
                                                    </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label for="cardNumber"  class="h6 mb-3 text-dark">Customer Name</label>
                                                        <input type="name" class="form-control mb-5" name="cust_name" placeholder="Customer Name" required="" autofocus="">
                                                    </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label for="cardNumber"  class="h6 mb-3 text-dark">Customer Email</label>
                                                        <input type="email" class="form-control mb-5" name="email" placeholder="Customer Email" required="" autofocus="">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label for="phone"  class="h6 mb-3 text-dark">Phone #</label>
                                                        <input type="phone" id="phone" class="form-control mb-5" name="cust_phone" placeholder="Customer Phone" required="" autofocus="">
                                                </div>
                                            </div>
                                                    <div class="col-md-12">
                                                <div class="form-group">
                                                    <label for="invoice"  class="h6 mb-3 text-dark">Invoice</label>
                                                    
                                                        <input type="text" class="form-control mb-5" id="invoice" name="invoice" placeholder="System Generated Invoice" value="<?php echo $invoe; ?>" readonly="" autofocus="">
                                                    </div>
                                                </div>
                                                    <div class="col-md-12">
                                                <div class="form-group">
                                                    <label for="package_id"  class="h6 mb-3 text-dark">Package</label>
                                                    <select id="package_id" name="package_id" class="form-control mb-5" required>
                                                    <option value="">Select Package</option>
                                                    <option value="0" style="background-color: red !important; color:white;" title="select this only If you wont find your desire package!">Custom Package Requirement!</option>
                                                    <?php 
                                                        $packages = [
                                                            ['id' => 1, 'name' => 'Logo'],
                                                            ['id' => 2, 'name' => 'Website'],
                                                            ['id' => 3, 'name' => 'Corporate Branding'],
                                                            ['id' => 4, 'name' => 'Brand Collateral'],
                                                            ['id' => 5, 'name' => 'Social Media'],
                                                            ['id' => 6, 'name' => 'Animation'],
                                                            ['id' => 7, 'name' => 'LogoChemist Packages'],
                                                            ['id' => 8, 'name' => 'E-Commerce'],
                                                            ['id' => 9, 'name' => 'Search Engine Optimization']
                                                        ];
                                                            

                                                            //if ($result->num_rows > 0) {

                                                                foreach ($packages as $key => $value) {
                                                                    // if (in_array($value['name'], $arr_folders)) {
                                                                    //     ${'id_'.$value['name']} = $value['id'];
                                                                    // }
                                                                    $sqlselect = "SELECT * FROM packages WHERE package_type=".$value['id'];
                                                                    $result = $conn_logodb->query($sqlselect);
                                                                    //if ($value['id']==1){
                                                                        echo '<optgroup label = "Package:'.$value['name'].'">';
                                                                        echo nl2br("\r\n");
                                                                        
                                                                        while($row = $result->fetch_assoc()) {
                                                                        echo '<option data-capacity="'.$row['price'].'" value="'.$row['id']. '">'.$row['name'].'</option>';
                                                                        echo nl2br("\r\n");
                                                                        }
                                                                    //}
                                                                    
                                                                }

                                                                
                                                                
                                                                ?>
                                                            
                                                                
                                                                    
                                                                    

                                                        </select>
                                                    
                                                    </div>
                                                </div>
                                                    <div class="col-md-12">
                                                <div class="form-group" id="cuspack" style="display:none;">
                                                    <label for="cardNumber"  class="h3 mb-3 text-dark">Custom Logo Package</label>
                                                        <input type="text" class="form-control mb-5" id="cust_logo_package" name="cust_logo_package" placeholder="Custom Logo Package" autofocus="">
                                                    </div>
                                                </div>
                                                    <div class="col-md-12">
                                                <div class="form-group">
                                                    <label for="price"  class="h6 mb-3 text-dark ">Price</label>
                                                    <input type="text" class="form-control mb-5" name="price" id="price" placeholder="Price" required="" autofocus="">
                                                    </div>
                                                </div>
                                                    </div>
                                                <div class="col-md-12">
                                        </div>


                                        
                                        <div class="row">

                                            <div class="form-group d-flex align-items-center" style="margin-left: 30px;">

                                                            <input type="radio" name="payment_method" id="r1" value="PayPal" checked="checked" required="" aria-required="true"> 

                                                            <label for="r1" class="ml-3">

                                                                
                                                                    <img  class="width-auto" src="assets/images/logop.png" alt="paypal-logo" />

                                                            </label>

                                                        </div>

                                                        <div class="form-group d-flex align-items-center">

                                                            <input type="radio" name="payment_method" id="r3" value="Stripe" required=""> 

                                                            <label for="r3" class="ml-3">
                                                                    <img  class="width-auto" src="assets/images/Debit-or-Credit-card.png" alt="Credit-logo">
                                                                

                                                            </label>

                                                        </div>
                                            
                                            <div class="col-md-12">
                                                <button class="proced btn btn-success btn-lg btn-block" type="submit">Proceed</button>
                                            </div>
                                            
                                        </div>

                                        <div class="row" style="display:none;">
                                            <div class="col-md-12">
                                                <p class="payment-errors"></p>
                                            </div>
                                        </div>
                                        <!-- <div class="row" style="margin-top:15px;">
                                                <div class="col-md-8 d-flex center" > 
                                                    <div class="col-md-4 center"> 
                                                        <img src="img/trustpilot.svg" alt="Trustpilot grade" style="width:230px;" title="" /> 
                                                    </div>
                                                    <div class="col-md-4 center"> 
                                                        <img src="img/google-reviews.svg" alt="Google Customer Reviews grade" style="width:230px;" title="" /> 
                                                    </div>
                                                    <div class="col-md-4 center"> 
                                                        <img src="img/bbb-rating.svg" alt="BBB Accerdited Business A+ Rating" style="width:230px;" title="" />
                                                    </div> 
                                                </div>
                                        </div> -->
                                    </form>
                                </div>
                            </div>   
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
    </section>


    </main>
       
<?php include 'includes/footer.php'?>

<script>
    $(document).ready(function() {

        $('#package_id').change(function() {
            var optionSelected = $(this).find("option:selected");
            var valueSelected  = optionSelected.val();
            var textSelected   = optionSelected.text();
            if(valueSelected==="0"){
                console.log(valueSelected);
                $("#cuspack").fadeIn();
                $("#cust_logo_package").focus();
            } else {
                $("#cuspack").fadeOut();
            }

            var capacityValue = $('#package_id').find(':selected').data('capacity');
            $('#price').val(capacityValue);      
        });
    });
</script>    