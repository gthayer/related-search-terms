<?php

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

$search = $request[0];

$url = "https://www.google.com/search?q=" . $search;

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
$output = curl_exec($curl);
curl_close($curl);

$dom = new DOMDocument;
$dom->loadHTML($output);

$xpath = new DOMXPath($dom);

$keywords = array();

foreach( $xpath->query('//p[contains(attribute::class, "_Bmc")]') as $e ) {
    array_push( $keywords, $e->textContent );
}

echo json_encode( $keywords );
exit;
