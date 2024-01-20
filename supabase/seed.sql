insert into auth.users
  values ('00000000-0000-0000-0000-000000000000', '059b89cf-0417-4692-abdf-cb065496ea4c', 'authenticated', 'authenticated',
  'test1@example.com', '$2a$10$pbq2o5WRV0xvI/T7BeqFSOxUI7uNtNtdp0GiZQ8IJ.MRAIa4zUWwu', 
	'2022-12-15 17:36:17.018386+00', null, '', NULL, '', null, '', '', null, '2022-12-15 17:36:17.020686+00', '{"provider": "email", "providers": ["email"], "role": "super-admin"}', '{}', null, '2022-12-15 17:36:17.013909+00', '2022-12-15 18:36:07.166183+00',
	null, null, '', '', null, default, '', 0, NULL, '', null);

insert into auth.users
  values ('00000000-0000-0000-0000-000000000000', 'e6058751-75dc-4831-b773-dd6e0c821963', 'authenticated', 'authenticated',
  'test2@example.com', '$2a$10$pbq2o5WRV0xvI/T7BeqFSOxUI7uNtNtdp0GiZQ8IJ.MRAIa4zUWwu', 
	'2022-12-15 19:24:42.345467+00', null, '', NULL, '', null, '', '', null, '2022-12-15 19:24:42.347755+00', '{"provider": "email", "providers": ["email"]}', '{}', null, '2022-12-15 19:24:42.341975+00', '2022-12-15 19:24:42.349475+00',
	null, null, '', '', null, default, '', 0, NULL, '', null);

insert into auth.identities (id, provider, provider_id, user_id, identity_data, last_sign_in_at, created_at, updated_at) values (
    '059b89cf-0417-4692-abdf-cb065496ea4c', 'email', 'email_01',
    '059b89cf-0417-4692-abdf-cb065496ea4c', '{"provider": "email", "providers": ["email"]}', '2022-12-15 19:24:42.345467+00', '2022-12-15 19:24:42.345467+00', '2022-12-15 19:24:42.345467+00'
);

insert into auth.identities (id, provider, provider_id, user_id,
identity_data, last_sign_in_at, created_at, updated_at) values (
    'e6058751-75dc-4831-b773-dd6e0c821963', 'email', 'email_02',
    'e6058751-75dc-4831-b773-dd6e0c821963', '{"provider": "email", "providers": ["email"]}', '2022-12-15 19:24:42.345467+00', '2022-12-15 19:24:42.345467+00', '2022-12-15 19:24:42.345467+00'
);

insert into public.profiles (id, display_name)
  values ('059b89cf-0417-4692-abdf-cb065496ea4c', 'Test User 1');

insert into public.profiles (id, display_name)
  values ('e6058751-75dc-4831-b773-dd6e0c821963', 'Test User 2');

 -- Insert some sample notes
 insert into notes (profile_id, title, content)
 values
   ('059b89cf-0417-4692-abdf-cb065496ea4c', 'Great day', 'Today I created a Supabase project.'),
   ('059b89cf-0417-4692-abdf-cb065496ea4c', 'Tried something', 'I added some data and queried it from Next.js.'),
   ('059b89cf-0417-4692-abdf-cb065496ea4c', 'Outcome', 'It was awesome!'),
   ('e6058751-75dc-4831-b773-dd6e0c821963', 'Note to self 1', 'Buy milk.'),
	 ('e6058751-75dc-4831-b773-dd6e0c821963', 'Note to self 2', 'Buy eggs.'),
	 ('e6058751-75dc-4831-b773-dd6e0c821963', 'Note to self 3', 'Buy bread.');		 