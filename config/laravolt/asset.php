<?php

return [

    // Configuration for the default group. Feel free to add more groups.
    // Each group can have different settings.
    'default' => [

        /**
         * Regex to match against a filename/url to determine if it is an asset.
         *
         * @var string
         */
        'asset_regex' => '/.\.(css|js)$/i',

        /**
         * Absolute path to the public directory of your App (WEBROOT).
         * Required if you enable the pipeline.
         * No trailing slash!.
         *
         * @var string
         */
        'public_dir' => public_path(),

        /**
         * Directory for local CSS assets.
         * Relative to your public directory ('public_dir').
         * No trailing slash!.
         *
         * @var string
         */
        'css_dir' => 'css',

        /**
         * Directory for local JavaScript assets.
         * Relative to your public directory ('public_dir').
         * No trailing slash!.
         *
         * @var string
         */
        'js_dir' => 'js',

        /**
         * Available collections.
         * Each collection is an array of assets.
         * Collections may also contain other collections.
         *
         * @var array
         */
        'collections' => [

            'redactor' => [
                'redactor/redactor.min.css',
                'redactor/redactor.min.js',
                'redactor/_plugins/alignment/alignment.min.js',
                'redactor/_plugins/fullscreen/fullscreen.min.js',
                'redactor/_plugins/video/video.min.js',
                'redactor/_plugins/fontcolor/fontcolor.min.js',
                'redactor/_plugins/table/table.min.js',
                'redactor/_plugins/specialchars/specialchars.min.js',
                'redactor/init.js',
            ],
        ],

        /**
         * Preload assets.
         * Here you may set which assets (CSS files, JavaScript files or collections)
         * should be loaded by default even if you don't explicitly add them on run time.
         *
         * @var array
         */
        'autoload' => [
            // 'jquery-cdn',
        ],

    ], // End of default group
];
