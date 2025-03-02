# vue-fundamentals

Manejo de ramas

# Extensiones Vs Code

- [Vue oficial](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

Si no funciona la auto importación se debe hacer: Ctrl+Shift+p > reload window

- [Vue3 Snippets](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets)

Usados en el proyecto: [vueinit]

# Recomendaciones

- Siempre usar setup en script para que se detecte como un componente de Vue

- router-link es usado porque a diferencia de <a, este hace la solicitud completa y el otro trabaja como SPA

- En el router se importa dinámicamente para que la solitud de una ruta nueva sea bajo demanda

- Uso de useRouter para obtener los params de la página

- Para rutas dinámicas [unplugin vue router](https://uvr.esm.is/)

```sql
drop table if exists projects;
drop type if exists current_status;

create type current_status as enum ('in-progress', 'completed');

create table projects(
  id bigint primary key generated always as identity not null,
  created_at timestamp default now() not null,
  name text not null,
  slug text unique not null,
  status current_status default 'in-progress' not null,
  collaborators text array default array[]::varchar[] not null
);

insert into projects (name, slug) values ('project one', 'project-one');
```

- Ctrl + D para reemplazar varios valores

- Cómo trabajar con supabase

  1. Se debe de crear un archivo migrate con el código sql para la creación de una nueva tabla

  ```sql
  npm run db:migrate:new NOMBRE_SCHEMA
  npm run db:reset
  ```

  2. Se debe de actualizar los tipos de supabase

  ```sql
  npm run supabase:types
  ```

  3. Se actualiza el archivo database/seed.js con la nueva tabla

  ```sql
  npm run db:seed
  ```
