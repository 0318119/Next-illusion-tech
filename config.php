<?php

// Local

define('SplitString','==--||--==');

$live = false;

if($live){
    // Live
    // define('DBUSER','logocist_logo');
    // define('DBPWD','9J13ymMcF2e^');
    // define('DBHOST','localhost');
    // define('DBNAME','logochemist');
    // define('BaseUrl','');
    // define('STRIPE_API_KEY','');
    // define('STRIPE_PUBLISHABLE_KEY','');
    // define('STRIPE_API_KEY','sk_test_S5bLciu2WM9B4dXNtJ5fRFhV00zE1yINGM');
    // define('STRIPE_PUBLISHABLE_KEY','pk_test_h3gr5MPb9YfnlaHvDOPaU86a00qewxkOcw');
    // define('PaypalEmail','accounts@logochemist.com');
    // define("USE_SANDBOX", 1);
    // if(USE_SANDBOX == true) {
    //     $paypal_url = "https://www.sandbox.paypal.com/cgi-bin/webscr";
    // } else {
    //     $paypal_url = "https://www.paypal.com/cgi-bin/webscr";
    // }
    // $paypal_url = "https://www.paypal.com/cgi-bin/webscr";
    // define("PAYPALURL", $paypal_url);
}
else {
    define('DBUSER','root');
    define('DBPWD','');
    define('DBHOST','localhost');
    define('DBNAME','creativewebdesign85542{}');
    define('BaseUrl','');
    // define('STRIPE_API_KEY','sk_test_S6MWHdYdilrkngNncj3lGrkC00X67y4i6q');
    // define('STRIPE_PUBLISHABLE_KEY','pk_test_BWrZdnXZWUm1yETMP7g6N6hB00tf7kOvRB');
    // define('PaypalEmail','');
    // define("USE_SANDBOX", 1);
    if(USE_SANDBOX == true) {
        $paypal_url = "https://www.sandbox.paypal.com/cgi-bin/webscr";
    } else {
        $paypal_url = "https://www.paypal.com/cgi-bin/webscr";
    }
    define("PAYPALURL", $paypal_url);
}
?>