# Extending

[[toc]]

## Events

The import process has a few events you can leverage to interact with the underlying
classes to add custom behaviour to the import.

You are able to hook into the parent package by using events.

The events will be activated by adding the `WithEvents` concern. Inside the `registerEvents` method, you
will have to return an array of events. The key is the Fully Qualified Name (FQN) of the event and the value is a callable event listener.
This can either be a closure, array-callable or invokable class.

```php
namespace App\Imports;

use Nikazooz\Simplesheet\Concerns\WithEvents;
use Nikazooz\Simplesheet\Events\AfterImport;
use Nikazooz\Simplesheet\Events\AfterSheet;
use Nikazooz\Simplesheet\Events\BeforeImport;
use Nikazooz\Simplesheet\Events\BeforeSheet;

class UsersImport implements WithEvents
{
    /**
     * @return array
     */
    public function registerEvents(): array
    {
        return [
            // Handle by a closure.
            BeforeImport::class => function(BeforeImport $event) {
                $creator = $event->reader->getProperties()->getCreator();
            },

            // Using a class with an __invoke method.
            BeforeSheet::class => new BeforeSheetHandler(),

            // Array callable, refering to a static method.
            AfterSheet::class => [self::class, 'afterSheet'],

        ];
    }

    public static function afterSheet(AfterSheet $event)
    {
        //
    }

}
```

Do note that using a `Closure` will not be possible in combination with queued imports, as PHP cannot serialize the closure.
In those cases it might be better to use the `RegistersEventListeners` trait.

### Auto register event listeners

By using the `RegistersEventListeners` trait you can auto-register the event listeners,
without the need of using the `registerEvents`. The listener will only be registered if the method is created.

```php
namespace App\Imports;

use Nikazooz\Simplesheet\Concerns\Importable;
use Nikazooz\Simplesheet\Concerns\RegistersEventListeners;
use Nikazooz\Simplesheet\Concerns\WithEvents;
use Nikazooz\Simplesheet\Events\AfterImport;
use Nikazooz\Simplesheet\Events\AfterSheet;
use Nikazooz\Simplesheet\Events\BeforeImport;
use Nikazooz\Simplesheet\Events\BeforeSheet;

class UsersImport implements WithEvents
{
    use Importable, RegistersEventListeners;

    public static function beforeImport(BeforeImport $event)
    {
        //
    }

    public static function afterImport(AfterImport $event)
    {
        //
    }

    public static function beforeSheet(BeforeSheet $event)
    {
        //
    }

    public static function afterSheet(AfterSheet $event)
    {
        //
    }

}
```

### Available events

| Event name | Payload | Explanation |
|---- |----| ----|
|`Nikazooz\Simplesheet\Events\BeforeImport` | `$event->reader : Reader` | Event gets raised at the start of the process. |
| `Nikazooz\Simplesheet\Events\AfterImport` | `$event->reader : Reader` | Event gets raised at the end of the  process. |
| `Nikazooz\Simplesheet\Events\BeforeSheet` | `$event->sheet : Sheet` | Event gets raised just after the sheet is created. |
| `Nikazooz\Simplesheet\Events\AfterSheet` | `$event->sheet : Sheet` | Event gets raised at the end of the sheet process. |


## Macroable

Both `Reader` and `Sheet` are "macroable" (which means they can easily be extended to fit your needs).
Both Reader and Sheet have a `->getDelegate()` method which returns the underlying PhpSpreadsheet class.
This will allow you to add custom macros as shortcuts to PhpSpreadsheet methods that are not available in this package.

### Reader

```php
use \Nikazooz\Simplesheet\Reader;

Reader::macro('setCreator', function (Reader $reader, string $creator) {
    $reader->getDelegate()->getProperties()->setCreator($creator);
});
```

### Sheet

```php
use \Nikazooz\Simplesheet\Sheet;

Sheet::macro('setOrientation', function (Sheet $sheet, $orientation) {
    $sheet->getDelegate()->getPageSetup()->setOrientation($orientation);
});
```

For PhpSpreadsheet methods, please refer to [their documentation](https://phpspreadsheet.readthedocs.io/).
