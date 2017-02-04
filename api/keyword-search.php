<?php

$search = $_GET['term'];

if ( empty( $search ) ) {
    ?>
    <form>
        <input type="text" name="term">
        <input type="submit">
    </form>
    <?php
}


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

foreach ( $keywords as $keyword ) {
    $slug = str_replace(' ', '-', $keyword);
    echo '<p><a href="?term=' . $slug . '">' . $keyword . '</a></p>';
}