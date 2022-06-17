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


```![1598250658474](https://user-images.githubusercontent.com/46752637/174392910-56af4a2c-15e4-4271-a033-3c818cea8742.png)
