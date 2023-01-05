<?php

	if(!isset($_SESSION)){

            session_start();            

    }

	//session_start();

	include("./phptextClass.php");	

	

	/*create class object*/

	$phptextObj = new phptextClass();	

	/*phptext function to genrate image with text*/

	$phptextObj->phpcaptcha('#FA410B','#fff',120,40,10,25);	

 ?>