export default function InitialInternet() {
    return (
        <fieldset className="main_div hIW">
            <legend>How The Internet Works <span className="first_letter">:</span></legend>
            <div className="hosts_pic"></div>
            <div className='hiw_sec1'> 
                 &nbsp; &nbsp; Any Device that sends or receives network traffic is called a <span>Host</span>. 
                Hosts include : Your PC, Laptop, Phones, Printers, Servers, Smart TVs, Smart Watches.<br/>&nbsp; &nbsp; &nbsp;Hosts are 
                again divided into <span>Servers</span> and <span>Clients</span>. A <span>Network</span> is formed when 
                two or more hosts are connected to each other. Networks of networks is what we call the <span>Internet</span>
            </div>
            <div className='hiw_sec2'>
                &nbsp; &nbsp; Usually clients initiate requests and servers respond. Every host has a temporary <span>IP address </span> 
                to communicate on the internet. This IP address is made of 32 bits (1s and 0s). These 32 bits are divided into 
                4 Octets (Groups of 8 bits). These Octets when converted to decimals, will have values ranging from 0 to 255. 
                IP addresses are assigned hierarchially. 
            </div>
            <div className="ip_pic"></div>
            <div className="hiw_sec3">
                &nbsp; &nbsp; This process of dividing IP addresses by hierarchy is called <span>Subnetting</span>. It is the logical
                process of enforcing boundaries within a network.
            </div>
            <div className="hiw_sec4">
                &nbsp; &nbsp; The boundary created by subnetting is called a <span>Subnet Mask</span>. Subnetting rules are created by network
                engineers/ network admins. Devices like Routers, Servers and sometimes Firewalls enforce those rules of subnetting. This process of 
                subnetting creates <span>Subnets</span>. Subnets are logical divisions within a network.
                <br/>
                &nbsp; &nbsp; For example, lets say Apple Inc., has 3 offices, NY Office, LDN Office, IND Office. If Apple Inc., has an IP - 10.x.x.x,
                NY Office will have an IP - 10.20.x.x, LND Office will have an IP - 10.30.x.x and IND Office will have an IP - 10.40.x.x. 
                Each office will have several departments. In NY Office, sales department may have an IP - 10.20.55.x, engineering department 
                may have an IP - 10.20.66.x and Design Department may have an IP-10.20.77.x.
            </div>
            <div className="ip_heirarchy"></div>
            <div className="hiw_sec4">
                &nbsp; &nbsp; Each Host also has a <span>MAC Address</span>. These are permanent hardware-based identifiers given by the manufacturer.
                It is made up of 12-digit hexadecimal number ( e.g., 00 : 1A : 2B : 3C : 4D : 5E ). You can see your device MAC address printed on your device's
                <span> Network Interface Card.</span> While MAC addresses are permanent, <span>dynamic IP addresses </span> change from time to time with new network
                connection and router reboot. <span>Static IP addresses</span> don't change. These are manually configurable IP addresses used primarly for
                servers and VPN communications.<br/>&nbsp; &nbsp; When you want to connect to the internet, you connect your devices to a <span>Router</span>. A 
                Router is a device that builds a road for network traffic between two or more networks/ subnets.<br/> <span>&nbsp; &nbsp;  Well, when do you say you have 2 subnets or 
                2 networks? How are networks or subnets seperated? </span> <br/>&nbsp; &nbsp; For example, when you take one large network and divide it into 
                smaller ranges with different subnet masks, subnets for formed. For example : You are given devices with IPs 192.168.0.x (one network). Devices with
                IPs from 192.168.0.1 to 192.168.126 form a subnet and devices with IPs from 192.168.0.129 to 192.168.0.254 form a different subnet (don't think about what
                happened to 192.168.0.0, 192.168.0.128 and 192.168.0.255 ). When it comes to networks, all devices with IP addresses from 195.170.5.0 to 195.170.5.255 are part of one network,
                 while devices with IP addresses from 195.179.5.0 to 195.179.5.255 are part of another network.<br/> &nbsp; &nbsp; Finally, these devices that belong to a 
                 subnet or a network are connected to a router. This router transports the data to a <span>Modem</span>. A modem consists of a modulator and a demodulator.
                  The modulator in the modem converts data from the router on the sender’s side into a format understandable by the ISP, while the demodulator converts data
                   from the ISP into a format understandable by the router on the receiver’s side.<br/> 
                &nbsp; &nbsp;The picture below sums up how the internet works
            </div>
        </fieldset>
    )
}