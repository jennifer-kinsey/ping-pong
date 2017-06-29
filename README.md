# _Ping Pong_

####

#### By _Jennifer Kinsey_

## Description

This website takes a user inputted numerical value, counts from 1 to that value back, and replaces number divisible by 3 with "ping, numbers divisible by 5 with "pong", and number divisible by 15 with "ping pong".

_(Keeping this because this was the last project we made before Object Oriented Programming.)_

## _Specifications_

1) If you input a number it will return all the numbers inputted from 1 to that number
* Input: 6
* Output: 1, 2, 3, 4, 5, 6

2) If a number is divisible by 3, it will return the word "ping" in place of that number_
* Input: 6
* Output: 1, 2, ping, 4, 5, ping


3) If a number is divisible by 5, it will return the word "pong" in place of that number
* Input: 6
* Output: 1, 2, ping, 4, pong, ping

4) If a number is divisible by 15, it will return the word "ping-pong"
* Input: 17
* Output: ...14, ping-pong, 16, 17

5) A non-numerical input is rejected
* Input: 17A, jhf
* Output: Please try again with a numerical value

6) User can dictate their ping, pong, and therefore their ping-pong interval. However, 3, 5, and 15 are the respective defaults.
* Input: 2(ping),3(pong), (ping-pong becomes 3), 10 (length)
* Output: 1, ping, pong, ping, 5, ping-pong, 7, ping, pong, ping


7) User can dictate their ping pong words.
* Input: ping is "leggo", pong is "eggo", ping-pong is "leggo-eggo", 2(ping),3(pong), (ping-pong becomes 3), 10 (length)
* Output: 1, leggo, eggo, leggo, 5, leggo-eggo, 7, leggo, eggo, leggo


## Setup/Installation Requirements

* Run "git clone  https://github.com/jennifer-kinsey/ping-pong.git"
* Open directory in your text editor of choice
* or open 'index.html' file in browser

## Known Bugs

There are no known bugs at this time.

## Github Pages link

http://jennifer-kinsey.github.io/ping-pong


## Technologies Used

Webpage is built with HTML, CSS (specifically using a default bootstrap.css file/framework with minimal styling), JavaScript, and the jQuery3.2.0 files/framework. Jennifer Kinsey and Epicodus are not liable for anything.

### License

Copyright (c) 2017 Jennifer Kinsey. This software is licensed under the MIT license.
