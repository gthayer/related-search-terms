<?php

header( 'Content-Disposition: attachment; filename=export.csv' );
header( 'Content-Type: text/csv; charset=UTF-8' );

$fp = fopen('php://output', 'w');

$fields = array('gary', 'kara', 'ronan');

fputcsv($fp, $fields);

fclose($fp);

exit;