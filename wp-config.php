<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'Wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Pe4wVtetoaZoGJm4bLj3tf7myF6lwbqokDNiQk3h7H82zm6aZ9QaI1Lw1gLBy23K' );
define( 'SECURE_AUTH_KEY',  'aihaCLzao7mxpK0ihCKm4EsL9kSUGRInDqR8fuTJ58PwlWqgtWIS3wnMscf0j9TF' );
define( 'LOGGED_IN_KEY',    '0eK3WVDyNPo8FmnEq16B1sjKSt66RjFonSFfijCR1BNKx783Dprlk3q8cmU1xjuF' );
define( 'NONCE_KEY',        'k9gkEYKdxuNhxh1LgPL5RuISDsYKLYCKBeIuHMvIXfTodR6wrZ5F7IBBq9hBSOqr' );
define( 'AUTH_SALT',        'nhlAw0uLLwc8YkalI3USN1BX4fIDmjhpobsacyOXYSz3z2znukRhoz5Zv11kqzaO' );
define( 'SECURE_AUTH_SALT', 'qqpQojdiZyAYpnkVbf5HJvt4s3svXEV5b9cRGj7cZwfGVc4exGDUGpwoBSJ3YjUa' );
define( 'LOGGED_IN_SALT',   '8akwfqO4iIQJfOaYEAiUBu9gdzOXC3UeeN1R6RgQ4ilKBE5tl2o3dvKSBoQzgwn7' );
define( 'NONCE_SALT',       'kuqvWpMvCLog6zGYlfYtC6voTVCYGOzWhGCiUhCxb6W3ULJmfsFUISL4ngYFpkoP' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
