-- Migration: 0002_add_coordinates.sql
-- Adds exact coordinates, transport connectivity, and scraped descriptions to destinations

alter table if exists public.destinations
  add column if not exists latitude numeric(8, 5),
  add column if not exists longitude numeric(8, 5),
  add column if not exists nearest_airport text,
  add column if not exists nearest_railway text,
  add column if not exists elevation text,
  add column if not exists description text,
  add column if not exists map_url text;

-- Seed / Upsert the 35 verified destinations with pinpoint landmark coordinates

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('jaipur', 'Jaipur', 'Rajasthan', 'India', 26.91546, 75.81898, 'Jaipur International Airport (JAI), 12 km', 'Jaipur Junction (JP)', 'https://www.google.com/maps/search/?api=1&query=26.91546,75.81898')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('udaipur', 'Udaipur', 'Rajasthan', 'India', 24.57872, 73.68626, 'Maharana Pratap Airport (UDR), 22 km', 'Udaipur City Railway Station (UDZ)', 'https://www.google.com/maps/search/?api=1&query=24.57872,73.68626')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('jaisalmer', 'Jaisalmer', 'Rajasthan', 'India', 27.02642, 70.77751, 'Jaisalmer Airport (JSA), 15 km', 'Jaisalmer Railway Station (JSM)', 'https://www.google.com/maps/search/?api=1&query=27.02642,70.77751')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('varanasi', 'Varanasi', 'Uttar Pradesh', 'India', 25.33565, 83.00763, 'Lal Bahadur Shastri International Airport (VNS), 25 km', 'Varanasi Junction (BSB) / Banaras (BSBS)', 'https://www.google.com/maps/search/?api=1&query=25.33565,83.00763')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('agra', 'Agra', 'Uttar Pradesh', 'India', 27.17526, 78.00982, 'Agra Airport / Kheria (AGR), 8 km', 'Agra Cantt (AGC)', 'https://www.google.com/maps/search/?api=1&query=27.17526,78.00982')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('lucknow', 'Lucknow', 'Uttar Pradesh', 'India', 26.8381, 80.9346, 'Chaudhary Charan Singh International Airport (LKO), 14 km', 'Lucknow Charbagh (LKO / LJN)', 'https://www.google.com/maps/search/?api=1&query=26.8381,80.9346')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('kerala', 'Alleppey', 'Kerala', 'India', 9.50034, 76.41234, 'Cochin International Airport (COK), 82 km', 'Alappuzha Railway Station (ALLP)', 'https://www.google.com/maps/search/?api=1&query=9.50034,76.41234')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('munnar', 'Munnar', 'Kerala', 'India', 10.087, 77.06009, 'Cochin International Airport (COK), 110 km', 'Aluva (AWY) 110 km / Ernakulam (ERS) 130 km', 'https://www.google.com/maps/search/?api=1&query=10.087,77.06009')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('kochi', 'Kochi', 'Kerala', 'India', 9.9679, 76.24444, 'Cochin International Airport (COK), 28 km', 'Ernakulam Junction (ERS) / Ernakulam Town (ERN)', 'https://www.google.com/maps/search/?api=1&query=9.9679,76.24444')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('madurai', 'Madurai', 'Tamil Nadu', 'India', 9.92612, 78.1141, 'Madurai International Airport (IXM), 12 km', 'Madurai Junction (MDU)', 'https://www.google.com/maps/search/?api=1&query=9.92612,78.1141')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('mahabalipuram', 'Mahabalipuram', 'Tamil Nadu', 'India', 12.6196, 80.19365, 'Chennai International Airport (MAA), 55 km', 'Chengalpattu Junction (CGL), 29 km', 'https://www.google.com/maps/search/?api=1&query=12.6196,80.19365')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('ooty', 'Ooty', 'Tamil Nadu', 'India', 11.41268, 76.70305, 'Coimbatore International Airport (CJB), 88 km', 'Udhagamandalam Railway Station (UAM) / Mettupalayam (MTP)', 'https://www.google.com/maps/search/?api=1&query=11.41268,76.70305')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('rohtas', 'Rohtasgarh Fort', 'Bihar', 'India', 24.62343, 83.91777, 'Gaya Airport (GAY), 140 km / Varanasi (VNS), 160 km', 'Dehri-on-Sone (DOS), 45 km / Sasaram (SSM)', 'https://www.google.com/maps/search/?api=1&query=24.62343,83.91777')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('kaimur', 'Kaimur Hills', 'Bihar', 'India', 25.07635, 83.6336, 'Lal Bahadur Shastri Airport Varanasi (VNS), 110 km', 'Bhabua Road Railway Station (BBU), 14 km', 'https://www.google.com/maps/search/?api=1&query=25.07635,83.6336')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('mundeshwari', 'Mundeshwari Temple', 'Bihar', 'India', 24.9834, 83.56469, 'Lal Bahadur Shastri Airport Varanasi (VNS), 115 km', 'Bhabua Road (BBU), 25 km / Mohania', 'https://www.google.com/maps/search/?api=1&query=24.9834,83.56469')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('dev-surya', 'Dev Surya Temple', 'Bihar', 'India', 24.65879, 84.43703, 'Gaya Airport (GAY), 75 km', 'Anugrah Narayan Road (AUBR), 25 km / Aurangabad', 'https://www.google.com/maps/search/?api=1&query=24.65879,84.43703')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('valmiki-tiger-reserve', 'Valmiki Tiger Reserve', 'Bihar', 'India', 27.40608, 84.0053, 'Gorakhpur Airport (GOP), 120 km / Patna (PAT), 280 km', 'Valmikinagar Road (VKNR) / Narkatiaganj (NKE)', 'https://www.google.com/maps/search/?api=1&query=27.40608,84.0053')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('rajgir', 'Rajgir', 'Bihar', 'India', 25.03, 85.42074, 'Jay Prakash Narayan Airport Patna (PAT), 100 km / Gaya (GAY), 78 km', 'Rajgir Railway Station (RGD)', 'https://www.google.com/maps/search/?api=1&query=25.03,85.42074')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('nalanda', 'Nalanda', 'Bihar', 'India', 25.12814, 85.44559, 'Jay Prakash Narayan Airport Patna (PAT), 90 km', 'Nalanda Railway Station (NLD) / Bakhtiyarpur (BKP)', 'https://www.google.com/maps/search/?api=1&query=25.12814,85.44559')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('vaishali', 'Vaishali', 'Bihar', 'India', 25.74917, 85.39722, 'Jay Prakash Narayan Airport Patna (PAT), 55 km', 'Hajipur Junction (HJP), 35 km', 'https://www.google.com/maps/search/?api=1&query=25.74917,85.39722')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('bodh-gaya', 'Bodh Gaya', 'Bihar', 'India', 24.69593, 84.99139, 'Gaya Airport (GAY), 10 km', 'Gaya Junction (GAYA), 13 km', 'https://www.google.com/maps/search/?api=1&query=24.69593,84.99139')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('vishnupad', 'Vishnupad Temple', 'Bihar', 'India', 24.77736, 85.00934, 'Gaya Airport (GAY), 9 km', 'Gaya Junction (GAYA), 4 km', 'https://www.google.com/maps/search/?api=1&query=24.77736,85.00934')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('patna', 'Patna', 'Bihar', 'India', 25.60932, 85.12353, 'Jay Prakash Narayan International Airport (PAT), 5 km', 'Patna Junction (PNBE) / Rajendra Nagar (RJPB)', 'https://www.google.com/maps/search/?api=1&query=25.60932,85.12353')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('pawapuri', 'Pawapuri', 'Bihar', 'India', 25.09143, 85.53889, 'Jay Prakash Narayan Airport Patna (PAT), 100 km', 'Pawapuri Road (POE) / Bakhtiyarpur (BKP)', 'https://www.google.com/maps/search/?api=1&query=25.09143,85.53889')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('kesaria', 'Kesaria Stupa', 'Bihar', 'India', 26.33419, 84.85486, 'Jay Prakash Narayan Airport Patna (PAT), 120 km', 'Chakia Railway Station (CAA), 22 km / Bapudham Motihari (MKI)', 'https://www.google.com/maps/search/?api=1&query=26.33419,84.85486')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('puri', 'Puri', 'Odisha', 'India', 19.80761, 85.82525, 'Biju Patnaik International Airport Bhubaneswar (BBI), 60 km', 'Puri Railway Station (PURI)', 'https://www.google.com/maps/search/?api=1&query=19.80761,85.82525')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('konark', 'Konark', 'Odisha', 'India', 19.88756, 86.09449, 'Biju Patnaik International Airport Bhubaneswar (BBI), 65 km', 'Puri Railway Station (PURI), 35 km', 'https://www.google.com/maps/search/?api=1&query=19.88756,86.09449')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('bhubaneswar', 'Bhubaneswar', 'Odisha', 'India', 20.2603, 85.83945, 'Biju Patnaik International Airport (BBI), 4 km', 'Bhubaneswar Railway Station (BBS)', 'https://www.google.com/maps/search/?api=1&query=20.2603,85.83945')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('chilika', 'Chilika Lake', 'Odisha', 'India', 19.68532, 85.25037, 'Biju Patnaik International Airport Bhubaneswar (BBI), 100 km', 'Balugaon Railway Station (BALU)', 'https://www.google.com/maps/search/?api=1&query=19.68532,85.25037')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('mumbai', 'Mumbai', 'Maharashtra', 'India', 19.07611, 72.8775, 'Chhatrapati Shivaji Maharaj International Airport (BOM), 15 km', 'Chhatrapati Shivaji Maharaj Terminus (CSMT) / Mumbai Central (MMCT)', 'https://www.google.com/maps/search/?api=1&query=19.07611,72.8775')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('ellora', 'Ajanta & Ellora Caves', 'Maharashtra', 'India', 20.0268, 75.1771, 'Chhatrapati Sambhajinagar Airport (IXU), 30 km', 'Chhatrapati Sambhajinagar Railway Station (AWB), 28 km', 'https://www.google.com/maps/search/?api=1&query=20.0268,75.1771')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('lonavala', 'Lonavala', 'Maharashtra', 'India', 18.75037, 73.40694, 'Pune International Airport (PNQ), 70 km / Mumbai (BOM), 90 km', 'Lonavala Railway Station (LNL)', 'https://www.google.com/maps/search/?api=1&query=18.75037,73.40694')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('rann-of-kutch', 'Rann of Kutch', 'Gujarat', 'India', 24.08639, 70.63778, 'Bhuj Airport (BHJ), 80 km', 'Bhuj Railway Station (BHUJ), 82 km', 'https://www.google.com/maps/search/?api=1&query=24.08639,70.63778')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('gir', 'Gir National Park', 'Gujarat', 'India', 21.13556, 70.79667, 'Keshod Airport (IXK), 40 km / Rajkot (RAJ), 160 km', 'Sasan Gir (SASN) / Junagadh Junction (JND), 60 km', 'https://www.google.com/maps/search/?api=1&query=21.13556,70.79667')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;

insert into public.destinations (slug, name, state, region, latitude, longitude, nearest_airport, nearest_railway, map_url)
values ('dwarka', 'Dwarka', 'Gujarat', 'India', 22.23777, 68.96751, 'Porbandar Airport (PBD), 105 km / Jamnagar (JGA), 130 km', 'Dwarka Railway Station (DWK)', 'https://www.google.com/maps/search/?api=1&query=22.23777,68.96751')
on conflict (slug) do update set
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  map_url = excluded.map_url;
