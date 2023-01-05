<?php include 'includes/header.php'?>
<div class="errorPage py-5" style="min-height: 480px;">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-8">
                <div class="errorDesc text-center">
                    <h2><?php $heading = isset($heading)?$heading:'Thank You!'; echo $heading; ?></h2>
                    <!-- <h4>We Are Sorry</h4> -->
                    <p>
                        <?php $msg = isset($msg)?$msg:'Payment Successfully please check your email.'; echo $msg; ?>
                    </p>
                </div>
            </div>
            <div class="col-md-2 offset-md-2 d-none d-md-block">
                <img src="./img/brokenLink.png" alt="broken link" class="img-fluid">
            </div>
        </div>
    </div>
</div>
<?php include 'includes/footer.php'?>
<!-- Event snippet for All Website Purchase conversion page -->
<!-- Event snippet for All Website Purchase conversion page -->
<script>
  gtag('event', 'conversion', {
      'send_to': 'AW-599052130/4XnwCMuap70CEOKe050C',
      'value': 20.0,
      'currency': 'USD',
      'transaction_id': ''
  });
</script>
<!-- Event snippet for Logo Ads Campaign Purchase conversion page -->
<script>
  gtag('event', 'conversion', {
      'send_to': 'AW-599052130/StfQCM-C0LwCEOKe050C',
      'value': 5.0,
      'currency': 'USD',
      'transaction_id': ''
  });
</script>
<!-- Event snippet for website campaign purchase conversion page -->
<script>
  gtag('event', 'conversion', {
      'send_to': 'AW-599052130/m9aVCOa2zboCEOKe050C',
      'value': 50.0,
      'currency': 'USD',
      'transaction_id': ''
  });
</script>