# Queued reading

[[toc]]

### Explicit queued imports

You can explicitly queue the import by using `::queueImport`.

```
Simplesheet::queueImport(new UsersImport, 'users.xlsx');
```

When using the `Importable` trait you can use the `queue` method:

```
(new UsersImport)->queue('users.xlsx');
```

:::warning
The `ShouldQueue` is always required.
:::

### Implicit queued imports

When `ShouldQueue` is used, the import will automatically be queued.

```
Simplesheet::import(new UsersImport, 'users.xlsx');
```

## Handling failures in queued imports

When queuing imports you might want a way to handle failed imports. You can do this by using the `ImportFailed` event.

```php
namespace App\Imports;

use App\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Nikazooz\Simplesheet\Concerns\ToModel;
use Nikazooz\Simplesheet\Concerns\WithEvents;

class UsersImport implements ToModel, ShouldQueue, WithEvents
{
    public function __construct(User $importedBy)
    {
        $this->importedBy = $importedBy;
    }

    public function registerEvents(): array
    {
        return [
            ImportFailed::class => function(ImportFailed $event) {
                $this->importedBy->notifiy(new ImportHasFailedNotification);
            },
        ];
    }
}
```

## Appending jobs

When queuing an import an instance of Laravel's `PendingDispatch` is returned. This means you can chain extra jobs that will be added to the end of the queue and only executed if all import jobs are correctly executed.

```php
(new UsersImport)->queue('users.xlsx')->chain([
    new NotifyUserOfCompletedImport(request()->user()),
]);
```

```php
namespace App\Jobs;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;

class NotifyUserOfCompletedImport implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function handle()
    {
        $this->user->notify(new ImportReady());
    }
}
```

## Custom queues

Because `PendingDispatch` is returned, we can also change the queue that should be used.

```php
(new UsersImport)->queue('users.xlsx')->allOnQueue('imports');
```

## Multi-server setup

If you are dealing with a multi-server setup (using e.g. a loadbalancer), you might want to make sure the temporary file is the same for each job. You can achieve this by configuring a remote temporary file in the config.

In `config/simplesheet.php`

```php
'temporary_files' => [
    'remote_disk' => 's3',
],
```
