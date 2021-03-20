---
pageClass: no-toc
---

# :rocket: 5 minutes quick start

[[toc]]

:muscle: Create an export class in `app/Exports`

You may do this by using the `make:export` command.

```
php artisan make:export UsersExport --model=User
```

The file can be found in `app/Exports`:

:::vue
.
├── app
│   ├── `Exports`
│   │   ├── UsersExport.php
│ 
└── composer.json
:::

If you prefer to create the export manually, you can create the following in `app/Exports`:

```php
<?php

namespace App\Exports;

use App\User;
use Nikazooz\Simplesheet\Concerns\FromCollection;

class UsersExport implements FromCollection
{
    public function collection()
    {
        return User::all();
    }
}
```

:fire: In your controller you can call this export now:

```php

use App\Exports\UsersExport;
use App\Http\Controllers\Controller;
use Nikazooz\Simplesheet\Facades\Simplesheet;

class UsersController extends Controller
{
    public function export()
    {
        return Simplesheet::download(new UsersExport, 'users.xlsx');
    }
}
```

:page_facing_up: Find your `users.xlsx` in your downloads folder!
