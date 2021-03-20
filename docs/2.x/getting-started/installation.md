# Installation

[[toc]]

## Requirements

* PHP: `>=7.2`
* Laravel: `>=5.5`
* Box Spout: `^3.2`
* PHP extension `php_zip` enabled
* PHP extension `php_xml` enabled
* PHP extension `php_gd2` enabled

## Installation

Require this package in the `composer.json` of your Laravel project. This will download the package and Box Spout.

```
composer require nikazooz/laravel-simplesheet
```

The `Nikazooz\Simplesheet\SimplesheetServiceProvider` is __auto-discovered__ and registered by default, but if you want to register it yourself:

Add the ServiceProvider in `config/app.php`

```php
'providers' => [
    /*
     * Package Service Providers...
     */
    Nikazooz\Simplesheet\SimplesheetServiceProvider::class,
]
```

The `Simplesheet` facade is also __auto-discovered__, but if you want to add it manually:

Add the Facade in `config/app.php`

```php
'aliases' => [
    ...
    'Simplesheet' => Nikazooz\Simplesheet\Facades\Simplesheet::class,
]
```

To publish the config, run the vendor publish command:

```
php artisan vendor:publish --provider="Nikazooz\Simplesheet\SimplesheetServiceProvider"
```

This will create a new config file named `config/simplesheet.php`.
