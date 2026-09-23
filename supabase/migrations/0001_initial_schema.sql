create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.destinations (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  state text not null,
  region text not null,
  image_url text,
  tagline text,
  days text,
  best_time text,
  highlights text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.heritage_sites (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  location text not null,
  description text,
  image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.itineraries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  start_date date,
  end_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.itinerary_items (
  id uuid primary key default gen_random_uuid(),
  itinerary_id uuid not null references public.itineraries(id) on delete cascade,
  destination_id uuid references public.destinations(id) on delete set null,
  destination_name text not null,
  visit_date date,
  notes text,
  position integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.saved_destinations (
  user_id uuid not null references public.profiles(id) on delete cascade,
  destination_id uuid not null references public.destinations(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, destination_id)
);

create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  created_at timestamptz not null default now()
);

create index itineraries_user_id_idx on public.itineraries(user_id);
create index itinerary_items_itinerary_id_idx on public.itinerary_items(itinerary_id);
create index saved_destinations_user_id_idx on public.saved_destinations(user_id);
create index chat_messages_user_id_created_at_idx
  on public.chat_messages(user_id, created_at);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute procedure public.set_updated_at();

drop trigger if exists destinations_set_updated_at on public.destinations;
create trigger destinations_set_updated_at
before update on public.destinations
for each row execute procedure public.set_updated_at();

drop trigger if exists heritage_sites_set_updated_at on public.heritage_sites;
create trigger heritage_sites_set_updated_at
before update on public.heritage_sites
for each row execute procedure public.set_updated_at();

drop trigger if exists itineraries_set_updated_at on public.itineraries;
create trigger itineraries_set_updated_at
before update on public.itineraries
for each row execute procedure public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'avatar_url'
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.destinations enable row level security;
alter table public.heritage_sites enable row level security;
alter table public.itineraries enable row level security;
alter table public.itinerary_items enable row level security;
alter table public.saved_destinations enable row level security;
alter table public.chat_messages enable row level security;

drop policy if exists "Profiles are visible to their owner" on public.profiles;
drop policy if exists "Users can update their own profile" on public.profiles;
drop policy if exists "Destinations are publicly readable" on public.destinations;
drop policy if exists "Heritage sites are publicly readable" on public.heritage_sites;
drop policy if exists "Users can view their own itineraries" on public.itineraries;
drop policy if exists "Users can create their own itineraries" on public.itineraries;
drop policy if exists "Users can update their own itineraries" on public.itineraries;
drop policy if exists "Users can delete their own itineraries" on public.itineraries;
drop policy if exists "Users can manage items in their itineraries" on public.itinerary_items;
drop policy if exists "Users can view their saved destinations" on public.saved_destinations;
drop policy if exists "Users can save destinations" on public.saved_destinations;
drop policy if exists "Users can remove saved destinations" on public.saved_destinations;
drop policy if exists "Users can view their chat messages" on public.chat_messages;
drop policy if exists "Users can create their chat messages" on public.chat_messages;
drop policy if exists "Users can delete their chat messages" on public.chat_messages;

create policy "Profiles are visible to their owner"
on public.profiles for select
using (auth.uid() = id);

create policy "Users can update their own profile"
on public.profiles for update
using (auth.uid() = id)
with check (auth.uid() = id);

create policy "Destinations are publicly readable"
on public.destinations for select
using (true);

create policy "Heritage sites are publicly readable"
on public.heritage_sites for select
using (true);

create policy "Users can view their own itineraries"
on public.itineraries for select
using (auth.uid() = user_id);

create policy "Users can create their own itineraries"
on public.itineraries for insert
with check (auth.uid() = user_id);

create policy "Users can update their own itineraries"
on public.itineraries for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own itineraries"
on public.itineraries for delete
using (auth.uid() = user_id);

create policy "Users can manage items in their itineraries"
on public.itinerary_items for all
using (
  exists (
    select 1 from public.itineraries
    where itineraries.id = itinerary_items.itinerary_id
      and itineraries.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.itineraries
    where itineraries.id = itinerary_items.itinerary_id
      and itineraries.user_id = auth.uid()
  )
);

create policy "Users can view their saved destinations"
on public.saved_destinations for select
using (auth.uid() = user_id);

create policy "Users can save destinations"
on public.saved_destinations for insert
with check (auth.uid() = user_id);

create policy "Users can remove saved destinations"
on public.saved_destinations for delete
using (auth.uid() = user_id);

create policy "Users can view their chat messages"
on public.chat_messages for select
using (auth.uid() = user_id);

create policy "Users can create their chat messages"
on public.chat_messages for insert
with check (auth.uid() = user_id);

create policy "Users can delete their chat messages"
on public.chat_messages for delete
using (auth.uid() = user_id);
