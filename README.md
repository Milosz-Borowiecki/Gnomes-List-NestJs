#   List of gnomes in NestJS

### Before run server
Create db.sqlite file in the project directory.

Then you may type command:
```
npm run server
```
Also you need some way to send json files.
I use Postman for that.

### Authentication

If you want use all crud operations you need to create superuser
account. For this go to:

```
http://localhost:3000/auth/register
```

Then in json format send your username and password.
Like this:

```
{
    "username": yourusername,
    "password": yourpassword
}
```

For login send the same json in:
```
http://localhost:3000/auth/login
```

After that you will get token acces.
Now just put it in the header Authorization.
Like this:

```
Bearer yourtoken
```

## CRUD

Authentication not required

### Read

```
http://localhost:/gnomes
```

#### Filtering

If you want filter results by race of gnomes:

```
http://localhost:3000/gnomes/race
```

Authentication required

### Create

```
http://localhost:3000/gnomes
```

### Update

```
http://localhost:3000/gnomes/<int:id>
```

### Delete

```
http://localhost:3000/gnomes/<int:id>
```

## To Do List
* Sending png file for gnome
* Implement swagger
* Add exception handling in some places