<?php

if (! function_exists('to_jawa')) {
    function to_jawa($word): string
    {
        return \Uyab\Kamus\Jawa::translate($word);
    }
}
