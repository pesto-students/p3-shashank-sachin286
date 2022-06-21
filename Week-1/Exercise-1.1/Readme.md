# How does a Browser work
Everday we open up the browser, type in our favourite websites and the browser loads it up for us.
Today we will be checking on the process that involved the browser, your computer’s operating system, your internet service provider, the server where you host the site, and services running on that server. It’s important to understand where things can go wrong, where to look for performance issues, and ensure you’re offering a secure experience for your users.

## The Process

## You enter the URL into the Browser

`https://www.google.com` 

URL stands for Uniform Resource Locator and as its name says, it contains the location of the resources you want to access, in other words, is an address that points to the place you want to visit. Looking at the URL above, the first part you see is 'https' that indicates the browser which protocol (set of rules) should be used to establish the communication on the network. It can be FTP, HTTP, HTTPS, etc. 
The second part is the hostname reached through Domain Name System (DNS), which is composed of:
- Subdomain: also known as third-level domain, is a subdivision of the domain name that is used to organize the web content into main categories, and in a URL indicates a particular page of the website the browser should serve. In the example, 'www' is the subdomain, this is given by default and is often used to land the home page of a website.
- Second-level Domain: is the name of the website, it is unique for the company or person that registers it, helping people to know what brand's site they are visiting. In the example, 'google' is the name of the website for Google search engine.
- Top-level domain: is the highest level in the DNS and it specifies the type of entity under which the website is registered on the internet, some of the most common TLDs are 'org', 'edu', 'com', etc. In the example, 'com' is used to identify the website as a commercial entity.



## Locating the Website in DNS

Well, once you hit Enter, the browser brakes down the URL in pieces as shown above, and looks for the hostname in its cache. If the browser does not find the hostname in there, then it asks outside. And the DNS comes into action, it takes the human-readable hostname and translates it to its corresponding computer-friendly IP address to serve the requested content.

A DNS request is made, where your computer is the DNS client demanding information to a DNS server. It first checks into your Internet Service Provider (ISP) DNS server to check if it can respond properly to the request. This DNS server will search into its local cache and if it handles the request, the DNS process ends here returning the IP address for Google's website allowing the browser to serve it up to you. However, if the ISP DNS server cannot handle the request, then a recursive query will start until the IP address is found.

The recursive query starts with next stop hitting the DNS root nameserver. The root domain does not have a formal name in the DNS hierarchy and its label is an empty string, which is represented by an implicit dot (.) that is at the end of every URL. The ISP DNS requests the DNS root nameserver and it responds with the IP address of a TLD DNS Server, in this case 'com', that stores the information for its domains.

After which the DNS server requests to the .com TLD and the TLD DNS server responds with the address of the domain’s nameserver, google.com.

After all of this, the ISP DNS server will store the collected information into its local cache and it will not have to repeat the entire process if the same query comes in the future, it can now provide the Google's IP address directly.


![1598250658474](https://user-images.githubusercontent.com/46752637/174392910-56af4a2c-15e4-4271-a033-3c818cea8742.png)

## Getting to our destination - The TCP/IP connection

Having the Google's IP address is time to initiate the connection with it, this is done by following the HTTPS protocol indicated in the URL. This protocol is the secure version of the Hypertext Transfer Protocol (HTTP).

In TCP/IP, the connection is built between two hosts (the client and the server) using a process called TCP 3-way handshake. The process can be described in brief:

1. A client computer sends a SYN message means, whether the second computer is open for a new connection or not.

2. Then another computer, if open for a new connection, sends an acknowledge message with SYN message as well.

3. After this, the first computer receives the message and acknowledges it by sending an ACK message, that is received by the second computer and the TCP socket connection is established.


![TCPIP](https://user-images.githubusercontent.com/46752637/174396969-6f1bfac7-01a8-441e-93f2-1553ebd05df2.png)

#### Connection Denied? - The firewall

When you use your network it would be good to consider looking at your firewall as well. The firewall could be part of your computer system or it could be a network. Firewalls are designed to restrict incoming and outgoing traffic based on a set of security rules defined by the user. This way, a list of IP addresses is verified before establishing any connection, if the IP address you are trying to reach is on the list, then the connection is blocked and it will not be an exchange of data over the network.

#### Security and Encryption - HTTPS/SSL


As mentioned before HTTPS stands for HyperText Transfer Protocol Secure, and is a secure version of the HTTP. This protocol defines different types of requests and responses served between clients and servers over a network. It is the main way to transfer data between a browser and a website. The requests include GET, POST, PUT, among others. The HTTPS requests and responses are secure by a standard security protocol called Secure Sockets Layer (SSL) which encrypts the data being exchanged between your browser and Holberton School's website server using a Public Key Infrastructure (PKI).

## Browser send HTTP request to server

The browser sends a GET request to the server asking for google.com webpage. It will also send the cookies that the browser has for this domain. Cookies are designed for websites to remember stateful information (items in the shopping cart or wishlist for a website like Amazon) or to record the user’s browsing history etc. It also has additional information like request header fields for that allows the client to pass information about the request, and about the client itself, to the server. Other header fields like the Accept-Language header tells the server which language the client is able to understand. All these header fields are added together to form an HTTP request.

![HTTP_RequestMessageExample](https://user-images.githubusercontent.com/46752637/174397020-4848041d-8442-4f8f-92a8-e182b2cd33f9.png)

## HTTP Request Response

The server handles the HTTP request and sends a response. The first line is called the status line. A Status-Line consists of the protocol version(e.g HTTP/1.1) followed by numeric status code(e.g 200)and its associated textual phrase(e.g OK). The status code is important as it contains the status of the response.

- 1xx: Informational: It means the request was received and the process is continuing.
- 2xx: Success: It means the action was successful.
- 3xx: Redirection: It means further action must be taken in order to complete the request. It may redirect the client to some other URL.
- 4xx: Client Error: It means some sort of error in the client’s part.
- 5xx: Server Error: It means there is some error on the server-side.
>It also contains response header fields like Server, Location, etc. These header fields give information about the server. A Content-Length header is a number denoting the exact byte length of the HTTP body. All these headers along with some additional information are added to form an HTTP response.

![HTTP_ResponseMessageExample](https://user-images.githubusercontent.com/46752637/174397078-ce78b4f7-0f29-488f-806c-c6115e47c7d1.png)

![what-happens-when-you-type-a-url-in-the-web-browser-request-response-f68c0cb95019db02](https://user-images.githubusercontent.com/46752637/174397116-9668b49e-8c4d-45c6-84c6-ddbd35164e99.jpg)


## Browser rendering HTML webpage

When a browser sends a request to a server to fetch an HTML document, the server returns an HTML page in binary stream format which is basically a text file with the response header `Content-Type` set to the value `text/html; charset=UTF-8`.
Here `text/html` is a MIME Type which tells the browser that it is an HTML document and `charset=UTF-8` tells the browser that it is encoded in UTF-8 character encoding. Using this information, the browser can convert the binary format into a readable text file. This has shown below in the screenshot.

![html render](https://user-images.githubusercontent.com/46752637/174397219-8eb00a6d-f016-4efc-a334-43f6b9dcbd83.png)


If this header is missing, the browser would not understand how to process the file and it will render in plain text format. But if everything is OK, after this conversion, the browser can start reading the HTML document. A typical HTML document could look like this.

<img width="720" alt="html layout" src="https://user-images.githubusercontent.com/46752637/174397255-c524c05a-f6d5-4454-b2b7-4cfa63da26ac.png">


In the above document, our webpage is dependent on style.css to provide styles to HTML elements and main.js to perform some JavaScript operations. With some neat CSS styles, the browser will render above webpage as shown below.

![rendered](https://user-images.githubusercontent.com/46752637/174397275-9b6a3c4e-67c4-4474-b691-ffee6ead0ae1.png)

### Document Object Model (DOM)

When the browser reads HTML code, whenever it encounters an HTML element like html, body, div etc., it creates a JavaScript object called a Node. Eventually, all HTML elements will be converted to JavaScript objects.
Since every HTML element has different properties, the Node object will be created from different classes (constructor functions). For example, the Node object for the div element is created from HTMLDivElement which inherits Node class.
After the browser has created Nodes from the HTML document, it has to create a tree-like structure of these node objects. Since our HTML elements in the HTML file are nested inside each other, the browser needs to replicate that but using Node objects it has previously created. This will help the browser efficiently render and manage the webpage throughout its lifecycle.

<img width="712" alt="Screenshot 2022-06-22 at 12 09 53 AM" src="https://user-images.githubusercontent.com/46752637/174875076-5da6e3e4-3d39-47b6-9b14-647ba5f1ea7c.png">


### CSS Object Model (CSSOM)
When we design a website, our intentions are to make it as good looking as possible. And we do that by providing some styles to HTML elements. In the HTML page, we provide styles to HTML elements using CSS which stands for Cascading Style Sheets. Using CSS selectors, we can target DOM elements and set a value to style property such as color or font-size.
There are different methods of applying styles to HTML elements like using an external CSS file, with embedded CSS using style tag, with an inline method using the style attribute on HTML elements or using JavaScript. But in the end, the browser has to do the heavy lifting of applying CSS styles to the DOM elements.
After constructing the DOM, the browser reads CSS from all the sources (external, embedded, inline, user-agent, etc.) and construct a CSSOM. CSSOM stands for CSS Object Model which is a Tree Like structure just like DOM.
Each node in this tree contains CSS style information that will be applied to DOM elements that it target (specified by the selector). CSSOM, however, does not contain DOM elements which can’t be printed on the screen like <meta>, <script>, <title> etc.
  
  <img width="553" alt="Screenshot 2022-06-22 at 12 13 34 AM" src="https://user-images.githubusercontent.com/46752637/174875125-bc130c1d-4ed1-4f6a-b5c5-e7a7204cf645.png">

  
