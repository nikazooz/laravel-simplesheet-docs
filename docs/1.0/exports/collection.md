# Exporting collections

[[toc]]

The easiest way to start an export is to create a custom export class. We'll use an invoices export as example.

Create a new class called `InvoicesExport` in `App/Exports`:

```php
namespace App\Exports;

use App\Invoice;
use Nikazooz\Simplesheet\Concerns\FromCollection;

class InvoicesExport implements FromCollection
{
    public function collection()
    {
        return Invoice::all();
    }
}
```

In your controller we can now download this export:

```php
public function export()
{
    return Simplesheet::download(new InvoicesExport, 'invoices.xlsx');
}
```

Or store it on a (e.g. s3) disk:

```php
public function storeSheet()
{
    return Simplesheet::store(new InvoicesExport, 'invoices.xlsx', 's3');
}
```

:bulb: More about storing exports can be found in the [storing exports on disk page](/1.0/exports/store.html).

:::tip
If you want to use relationships in Collection, combine with [Mapping Data](/1.0/exports/mapping.html)
:::

## Using custom structures

If you are not using Eloquent or having another datasource (e.g. an API, MongoDB, Cache, ...) you can also return a custom collection:

```php
namespace App\Exports;

use App\Invoice;
use Illuminate\Support\Collection;
use Nikazooz\Simplesheet\Concerns\FromCollection;

class InvoicesExport implements FromCollection
{
    public function collection()
    {
        return new Collection([
            [1, 2, 3],
            [4, 5, 6]
        ]);
    }
}
```

## Using arrays

If you prefer to use plain arrays over Collections, you can use the `FromArray` concern:

```php
namespace App\Exports;

use App\Invoice;
use Nikazooz\Simplesheet\Concerns\FromArray;

class InvoicesExport implements FromArray
{
    public function array(): array
    {
        return [
            [1, 2, 3],
            [4, 5, 6]
        ];
    }
}
```

If you need to pass data from the controller to your export, you can use the constructor to do so:

```php
namespace App\Exports;

use App\Invoice;
use Nikazooz\Simplesheet\Concerns\FromArray;

class InvoicesExport implements FromArray
{
    protected $invoices;

    public function __construct(array $invoices)
    {
        $this->invoices = $invoices;
    }

    public function array(): array
    {
        return $this->invoices;
    }
}
```

In your controller you can now use the constructor of the export class:

```php
public function export()
{
    $export = new InvoicesExport([
        [1, 2, 3],
        [4, 5, 6]
    ]);

    return Simplesheet::download($export, 'invoices.xlsx');
}
```

## Dependency injection

In case your export needs dependencies, you can inject the export class:

```php
namespace App\Exports;

use Nikazooz\Simplesheet\Concerns\FromCollection;

class InvoicesExport implements FromCollection
{
    public function __construct(InvoicesRepository $invoices)
    {
        $this->invoices = $invoices;
    }

    public function collection()
    {
        return $this->invoices->all();
    }
}
```

```php
public function export(Simplesheet $simplesheet, InvoicesExport $export)
{
    return $simplesheet->download($export, 'invoices.xlsx');
}
```

## Storing raw contents

If you want to receive the raw contents of the exported file, you can use the `raw()` method:

```php
$contents = Simplesheet::raw(new InvoicesExport, Simplesheet::XLSX);
```
