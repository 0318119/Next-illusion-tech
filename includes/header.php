<html lang="en">

    <head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-179443988-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-179443988-1');
</script>
        <?php

        if(!isset($_SESSION)){

            session_start();            

        }

          //or, if you DO want a file to cache, use:

          header("Cache-Control: max-age=31536000"); 

          include ('config.php');

        ?>

        <meta charset="UTF-8">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <link rel="canonical" href="" >

<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Top Digital Marketing | Website Design and Development Company" />
<meta property="og:description" content="Our web development and marketing company is an all-rounder which comprises highly professional and creative developers, marketers and designers." />
<meta property="og:url" content="https://logomastery.com/" />
<meta property="og:site_name" content="Logomastery" />
<meta property="article:publisher" content="https://www.facebook.com/logochemist1/" />
<meta property="article:modified_time" content="2020-11-14T14:58:03+00:00" />
<meta property="og:image" content="https://www.logochemist.com/img/6.gif" />
<meta property="og:image:width" content="840" />
<meta property="og:image:height" content="448" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://www.logomastery.com/img/cacq.png" />
<meta name="twitter:creator" content="@logochemist1" />
<meta name="twitter:site" content="@logochemist1" />
<meta name="twitter:label1" content="Written by">
<meta name="twitter:data1" content="admin1">
<meta name="twitter:label2" content="Est. reading time">
<meta name="twitter:data2" content="4 minutes">
<meta property="og:title" content="summary">
<meta property="og:type" content="summary">
<meta property="og:site_name" content="logochemist.com">
<meta property="og:description" content="summary">
<meta property="og:image" content="summary">
<meta property="og:url" content="https://www.logomastery.com/">

        <script type="application/ld+json">
        {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Logo Chemist",
            "url": "https://www.logochemist.com/",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.logochemist.com/?s={search_term_string}{search_term_string}required name=search_term_string",
                "query-input": "required name=search_term_string"
        }
        }
        </script>
        

    </head>
    <?php 
        $class_home = '';
        if ($_SERVER['REQUEST_URI'] == '/index.php' || $_SERVER['REQUEST_URI'] == '/') {
            $class_home = 'index';
        }
    ?>
    <body class="siteLoading <?php echo $class_home; ?>">

        <input type="hidden" id="baseUrl" value="<?=BaseUrl?>" />
        
        <script src="https://www.google.com/recaptcha/api.js?render=6LesoekUAAAAAEPqqnyeV8ds3zFz9Eok7pXRNhJi"></script> 
        