<div class=" col-md-12">
    <div class="pac_tab" role="tabpanel">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#social" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true">Social Media</a></li>
            <li role="presentation" class=""><a href="#digital" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false">Digital Marketing</a></li>
            <li role="presentation" class=""><a href="#Content-Generation" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false">Content Generation Packages</a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content tabs">
            <div role="tabpanel" class="tab-pane fade active in" id="social">
                <div class="row justify-content-center">
                   <?php include 'includes/social-media-packages.php'; ?>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="digital">
                <div class="row justify-content-center">
                   <?php include 'includes/digital-marketing-packages.php'; ?>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="Content-Generation">
                <div class="row justify-content-center">
                   <?php include 'includes/Content-Generation-Packages.php'; ?>
                </div>
            </div>
        </div>
    </div>
</div>