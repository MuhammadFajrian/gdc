<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'gdc' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'mU_p>PMu]eF$NIXr)F0UBgC#[n!2?!ua@Dfpdy8`4b,x_!F1{XT}N#i#x?P74n(1' );
define( 'SECURE_AUTH_KEY',  '^j^2z;NPOF`m@q[uW$;^xl66qQ2V)5T8Li})5OF>zo &{MLP<+!@nO $<K*I9~wM' );
define( 'LOGGED_IN_KEY',    ',a^aFLPZnhqf7<cV;Y%t1V-O{K}ETrcAh !0p}MM&!U[<!,kLsh03/u|VuO+@i1y' );
define( 'NONCE_KEY',        'j~PCs6KB(rD`_m>?,K55<B-]Y,@!IY<qT?tV6i1i$tvpWP&_% `H{0>M*9o#[b[M' );
define( 'AUTH_SALT',        'y7Fj[UyFVPw2_Xaf I-~]bI}F8u_ ,BMPoXb#XmK]75s%1Xb@}T<+5?aB0-B$_JW' );
define( 'SECURE_AUTH_SALT', 'uOF9]%2;<x=6UK.&s(E@H3!sDb_=3Hz<_bF={g6*aJP{YHY3]L$BAW`fy8$qVmt%' );
define( 'LOGGED_IN_SALT',   'iOrFl>7E,+XN,p?g)|+K u;r4q:!L>Z*|8N_3 M3Tn%/(D*-e1w?_B|!${CN&C;I' );
define( 'NONCE_SALT',       'o@{;^YQ-aY{!/ydihcjxzc J`]8X|.Z$tz.Q=U{/,gDI&yhN-$C*t%zBNQvuVz^M' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
