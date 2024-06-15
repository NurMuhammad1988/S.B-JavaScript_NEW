<?php
$_POST = json_decode(file_get_contents('php://input'), true);//agar js filedagi server jsondan foydalanadigan bo'lsa bu kod yoniq turishi kerak yoki jsdagi server php kodlardan foydalanadigan bo'lsa bu kod o'chiq turishi kerak
echo var_dump($_POST);
