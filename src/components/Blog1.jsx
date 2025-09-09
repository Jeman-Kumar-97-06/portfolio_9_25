export default function HowInternetWorks() {
    return (
        <fieldset className="main_div hIW">
            <legend>How Internet Works <span className="first_letter">?</span></legend>
            <div className="hosts_pic"></div>
            <div className='hiw_sec1'> 
                Any Device that sends or receives network traffic is called a <span>Host</span>. 
                Hosts include : Your PC, Laptop, Smartphones, Printers, Servers, Smart TVs, Smart Watches.<br/>Hosts are 
                again divided into <span>Servers</span> and <span>Clients</span>. 
            </div>
            <div className='hiw_sec2'>
                Usually clients initiate requests and servers respond. Every host has a temporary <span>IP address </span> 
                to communicate on the internet. This IP address is made of 32 bits (1s and 0s). These 32 bits are divided into 
                4 Octets (A group of 8 bits). These Octets when converted to decimals, will have values ranging from 0 to 255.
            </div>
            <div className="ip_pic"></div>
            <div className="hiw_sec3">
                IP addresses are assigned hierarchially. This process of dividing IP addresses by hierarchy is called <span>Subnetting</span>. 
            </div>
            <div className="hiw_sec4">
                For example, lets say Apple Inc., has 3 offices, NY Office, LDN Office, IND Office. If Apple Inc., has an IP - 10.x.x.x,
                NY Office will have an IP - 10.20.x.x, LND Office will have an IP - 10.30.x.x and IND Office will have an IP - 10.40.x.x. 
                Each office will have several departments. In NY Office, sales department may have an IP - 10.20.55.x, engineering department 
                may have an IP - 10.20.66.x and Design Department may have an IP - 10.20.77.x.
            </div>
            <div className="hiw_sec4">
                Each Host also has a <span>MAC Address</span>. These are permanent hardware-based identifiers given by the manufacturer.
                It is made up of 12-digit hexadecimal number ( e.g., 00 : 1A : 2B : 3C : 4D : 5E ). You can see them printed on your device's
                <span> Network Interface Card.</span> 
            </div>
        </fieldset>
    )
}