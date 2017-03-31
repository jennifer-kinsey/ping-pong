# _Ping Pong_

####

#### By _Jennifer Kinsey_

## Description

_This website takes a user inputted numerical value, counts from 1 to that value back, and replaces number divisible by 3 with "ping, numbers divisible by 5 with "pong", and number divisible by 15 with "ping pong"._

## _Specifications_

_1) If you input a number it will return all the numbers inputted from 1 to that number_
* _Input: 6_
* _Output: 1, 2, 3, 4, 5, 6_

_2) If a number is divisible by 3, it will return the word "ping" in place of that number_
* _Input: 6_
* _Output: 1, 2, ping, 4, 5, ping_


_3) If a number is divisible by 5, it will return the word "pong" in place of that number_
* _Input: 6_
* _Output: 1, 2, ping, 4, pong, ping_

_4) If a number is divisible by 15, it will return the word "ping-pong"_
* _Input: 17_
* _Output: ...14, ping-pong, 16, 17_

_5) A non-numerical input is rejected_
* _Input: 17A, jhf_
* _Output: Please try again with a numerical value_

_6) User can dictate their ping, pong, and therefore their ping-pong interval. However, 3, 5, and 15 are the respective defaults._
* _Input: 2(ping),3(pong), (ping-pong becomes 3), 10 (length)_
* _Output: 1, ping, pong, ping, 5, ping-pong, 7, ping, pong, ping_


_7) User can dictate their ping pong words._
* _Input: ping is "leggo", pong is "eggo", ping-pong is "leggo-eggo", 2(ping),3(pong), (ping-pong becomes 3), 10 (length)_
* _Output: 1, leggo, eggo, leggo, 5, leggo-eggo, 7, leggo, eggo, leggo_



## Setup/Installation Requirements

* _Ensure internet connection_
* _Open Terminal_
* _Change into the desktop directory ('cd desktop')_
* _Run "git clone  https://github.com/jennifer-kinsey/ping-pong.git"_
* _Open 'ping-pong' folder in desktop_
* _Open 'index.html' file_

## Known Bugs

_There are no known bugs at this time._

## Github Pages link

http://jennifer-kinsey.github.io/ping-pong

## Support and contact details

_Please contact Kinsey at kinseyplusplus@gmail.com if you have any questions or need any support._

## Technologies Used

_Webpage is built with HTML, CSS (specifically using a default bootstrap.css file/framework with minimal styling), JavaScript, and the jQuery3.2.0 files/framework. Jennifer Kinsey and Epicodus are not liable for anything._

### License

_Copyright (c) 2017 Jennifer Kinsey. This software is licensed under the MIT license._
