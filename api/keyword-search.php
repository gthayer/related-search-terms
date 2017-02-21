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

// set error level
$internalErrors = libxml_use_internal_errors(true);

$dom->loadHTML($output);
// Restore error level
libxml_use_internal_errors($internalErrors);

$xpath = new DOMXPath($dom);

$keywords = array();

foreach( $xpath->query('//p[contains(attribute::class, "_Bmc")]') as $e ) {
    array_push( $keywords, $e->textContent );
}

echo json_encode( $keywords );
exit;
