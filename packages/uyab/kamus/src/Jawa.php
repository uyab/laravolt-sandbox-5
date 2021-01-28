<?php

namespace Uyab\Kamus;

class Jawa
{
    public static function translate(string $word): string
    {
        return match ($word) {
            'satu' => 'siji',
            default => sprintf('Translasi untuk kata "%s" belum ada', $word),
        };
    }
}
