create table profiles (
  id uuid references auth.users not null primary key,
  display_name text
);

 create table notes (
	id bigint primary key generated always as identity,
	profile_id uuid references public.profiles,
	title text
 );

alter table profiles enable row level security;

alter table notes enable row level security;

create policy "Public profiles are viewable by everyone"
on profiles
for select
using ( true );

create policy "User can see their own notes only."
on notes
for select 
using ( profile_id = auth.uid() );
