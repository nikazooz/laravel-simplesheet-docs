# Export formats

[[toc]]

By default, the export format is determined by the extension of the file. If you want
to explicitly configure the export format, you can pass it through as 2nd parameter.

You can customize the download headers with the optional 3rd parameter `$headers`.
This way, you can customize the mime type for example.


## XLSX

```php
(new InvoicesExport)->download('invoices.xlsx', \Nikazooz\Simplesheet\Simplesheet::XLSX);
```

## CSV

```php
// mime type is guessed and results to text/plain
(new InvoicesExport)->download('invoices.csv', \Nikazooz\Simplesheet\Simplesheet::CSV);

// custom mime type text/csv
(new InvoicesExport)->download(
    'invoices.csv',
    \Nikazooz\Simplesheet\Simplesheet::CSV,
    [
        'Content-Type' => 'text/csv',
    ]
);
```

## TSV

```php
(new InvoicesExport)->download('invoices.tsv', \Nikazooz\Simplesheet\Simplesheet::TSV);
```

## ODS

```php
(new InvoicesExport)->download('invoices.ods', \Nikazooz\Simplesheet\Simplesheet::ODS);
```
