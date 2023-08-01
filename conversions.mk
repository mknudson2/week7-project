CONTENTS
	1. Time Conversions from Unix UTC
	2. Reading wind direction from Degrees
	3. API request by Zip code
	4. API request by City name
	5. Units of measurement and conversion
	6. Weather Icons
	7. State Codes


======================
~~~~~~~~~~~~~~~~~~~~~~
======================

--(1)-- Time Conversions from Unix UTC
	var ts = new Date(1690604639000);
	console.log(ts.toDateString());
	# Fri Jul 28 2023

	console.log(ts.toGMTString());
	# Sat, 29 Jul 2023 04:23:59 GMT

	console.log(ts.toISOString());
	# 2023-07-29T04:23:59.692Z

	console.log(ts.toJSON());
	# 2023-07-29T04:23:59.692Z

	console.log(ts.toLocaleDateString());
	# 7/28/2023

	console.log(ts.toLocaleTimeString());
	# 10:23:59 PM

	console.log(ts.toLocaleString());
	# 7/28/2023, 10:23:59 PM

	console.log(ts.toString());
	# Fri Jul 28 2023 22:23:59 GMT-0600 (Mountain Daylight Time)

	console.log(ts.toTimeString());
	# 22:23:59 GMT-0600 (Mountain Daylight Time)

	console.log(ts.toUTCString());
	# Sat, 29 Jul 2023 04:23:59 GMT

	console.log(ts.toDateString());
	# Sat Jul 29 2023

=================================
What is Unix time?
Unix time is a system for representing a point in time. It is the number of seconds that have elapsed since January 1st, 1970 00:00:00 UTC.

Overview
Unix is an operating system originally developed in the 1960s.  Unix time is a way of representing a timestamp by representing the time as the number of seconds since January 1st, 1970 at 00:00:00 UTC.  One of the primary benefits of using Unix time is that it can be represented as an integer making it easier to parse and use across different systems. 

Narrative's Data Streaming Platform defaults to using Unix time (in milliseconds) for all timestamp fields.  

Unix Epoch
January 1st, 1970 at 00:00:00 UTC is referred to as the Unix epoch.   Early Unix engineers picked that date arbitrarily because they needed to set a uniform date for the start of time, and New Year's Day, 1970, seemed most convenient.

Examples
Date / Time	Unix Time
January 1st, 1970 00:00:00	0
June 6th, 1983 00:00:00	423705600
June 6th, 1983 16:00:00	423763200
September 9, 2001 1:46:40	1000000000
July 20th, 1969 20:17:40	-14182940




===================================
--(2)-- Reading Wind Directions from Degrees

	0° — north wind (N)
	22.5° — north-northeast wind (NNE)
	45° — northeast wind (NE)
	67.5° — east-northeast wind (ENE)
	90°— east wind (E)
	112.5° — east-southeast wind (ESE)
	135° — southeast wind (SE)
	157.5° — south-southeast wind (SSE)
	180° — south wind (S)
	202.5° — south-southwest wind (SSW)
	225° — southwest wind (SW)
	247.5° — west-southwest wind (WSW)
	270° — west wind (W)
	292.5° — west-northwest wind (WNW)
	315° — northwest wind (NW)
	337.5° — north-northwest wind (NNW)
	360° — north wind (N)




===================================
--(3)-- Built-in API request by ZIP code
	Please note if country is not specified then the search works for USA as a default.

API call

	https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

Parameters
	zip		required	Zip code
	
	appid	required	Your unique API key (you can always 
						find it on your account page under the "API key" tab)
	
	mode	optional	Response format. Possible values are 
						xml and html. If you don't use the mode parameter format is JSON by default.  
	
	units	optional	Units of measurement. standard, 
						metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default.  
	
	lang	optional	You can use this parameter to get 
						the output in your language. 

Examples of API calls
https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid={API key}




===================================
--(4)-- Built-in API request by city name
	You can call by city name or city name, state code and country code. Please note that searching by states available only for the USA locations.

API call
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}

https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}

Parameters
q		required	City name, state code and country code 
					divided by comma, Please, refer to ISO 3166 for the state codes or country codes.

					You can specify the parameter not only in English. In this case, the API response should be returned in the same language as the language of requested location name if the location is in our predefined list of more than 200,000 locations.


appid	required	Your unique API key (you can always find 
					it on your account page under the "API key" tab)

mode	optional	Response format. Possible values are xml 
					and html. If you don't use the mode parameter format is JSON by default. Learn more

units	optional	Units of measurement. standard, metric 
					and imperial units are available. If you do not use the units parameter, standard units will be applied by default. Learn more

lang	optional	You can use this parameter to get the 
					output in your language. Learn more

Examples of API calls:
https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}

https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}




===================================
--(5)--Units of measurement
	standard, metric, and imperial units are available. List of all API parameters with available units.

Parameters
units	optional	standard, metric, imperial. When you do 
					not use the units parameter, format is standard by default.
					
					Temperature is available in Fahrenheit, Celsius and Kelvin units.

For temperature in Fahrenheit use units=imperial

For temperature in Celsius use units=metric

Temperature in Kelvin is used by default, no need to use units parameter in API call

List of all API parameters with units openweathermap.org/weather-data

Examples of API calls:
Standard (KELVIN)
https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}

metric (CELSIUS)
https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=metric

imperial (FAHRENHEIT)
https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=imperial




================================
--(6)--Weather Icons

	https://github.com/manifestinteractive/weather-underground-icons




================================
--(7)--US State Codes
	
	https://en.wikipedia.org/wiki/ISO_3166-2:US