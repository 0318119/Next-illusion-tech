
<?php 
include 'Config.php';
$select_table = "SELECT * FROM packages WHERE package_type = '5'";
$excute_qeury = mysqli_query($con, $select_table);
if(mysqli_num_rows($excute_qeury) > 0){
    while ($row = mysqli_fetch_assoc($excute_qeury)) {
?>
    <div class="col-lg-4 margin-cols">
        <div class="pricingTable">
            <div class="pricingTable-header">
                <h3 class="title"><?php echo $row['name']; ?></h3>
            </div>
            <div class="pricing-content">
                <div class="price-value">
                    <span class="amount">$<?php echo $row['price']; ?>$</span>
                    <span class="month"><del>$<?php echo $row['old_price']; ?></del><br> 50% off</span>
                </div>
                <ul>
                <?php echo $row['description']; ?>  
                </ul>
                <a href="#" class="pricingTable-signup" data-toggle="modal" data-target="#Order_form">Order Now</a>
            </div>
        </div>
    </div> 
<?php } }?>