//import { useTranslation } from 'react-i18next';


const serviceDetails = [

    {
        id:1,
        link:"data-centers",
        image:"dataCenter/datacenter.png", 
        // <a href="https://www.freepik.com/free-photo/server-racks-computer-network-security-server-room-data-center-d-render-dark-blue-generative-ai_38095230.htm#query=data%20center&position=9&from_view=keyword&track=ais">Image by benzoix</a> on Freepik
        categoty:[
            {
                heading:"Unleash the Power of Software-Defined Data Center Solutions",
                image:"dataCenter/SDDC2.jpeg",
                description:"With Cyber Vision, embrace practical, secure, and scalable Software Defined Data Center (SDDC) solutions. Future-proof your business with leading SDN technologies for mission-critical workloads and cloud capabilities. Your journey to digital success starts here." 
            },
            {
                heading:"Software Defined Networking",
                image:"dataCenter/DataCenter_SDN.jpg",
                description:`DataCenterPageSDN`
            },
            {
                heading:"Hyperconverged Infrastructure",
                image:"dataCenter/HCI.jpg",
                description:`DataCenterPageHCI`
                // <p>
                // A seamless blend of hardware and software, HCI simplifies your infrastructure by consolidating servers, storage networks, and arrays into flexible building blocks. Experience the future of datacenter efficiency.
                // </p>
                // <b>Key features and capabilities:</b>
                // <ul>
                // <li>Rapid deployment</li>
                // <li>Scalable virtual environments</li>
                // <li>Enterprise class storage features</li>
                // <li>Intrinsic Security</li>
                // </ul>
                
            },
            {
                heading:"Private Cloud",
                image:"dataCenter/DataCenter_PrivateCloud.jpg",
                description:`DataCenterPagePrivateCloud`
                // <p>                
                // A private cloud delivers computing services over a secure internal network, exclusively catering to specific users rather than the public at large.
                // <br/>
                // Also called an internal or corporate cloud, private cloud computing gives businesses many of the benefits of a public cloud as:
                // </p>
                // <ul>
                // <li>Self-Service Catalog</li>
                // <li>Efficiency & control</li>
                // <li>Availability</li>
                // <li>Security & privacy</li>
                // <li>Automation</li>
                // </ul>
                
            },
            {
                heading:"Virtual Desktop Infrastructure",
                image:"dataCenter/datacenter_infrs.png",
                description:`VDI, a type of DaaS, hosts desktop environments on a central server. Desktop images run within VMs and are delivered over a network to PCs or other devices.`
            },
            {
                heading:"Digital Workspace",
                image:"dataCenter/DataCenter_WorkSpaceV2.jpg",
                description:`DataCenterPageDigitalWorkspace`
                // <p>
                // Experience the power of a unified digital workspace: streamlining app, data, and desktop delivery.<br />
                // It allows employees to access their apps and data real-time – on any device, from any location regardless of whether the information is stored through cloud services or in the data center.
                // </p>
                
            }
        ]
        
    },

    {
        id:2,
        link:"cloud-services",
        image:"cloudServices/banner.png",
        categoty:[
            {
                heading:"Private Cloud",
                image:"cloudServices/1.jpg",
                description:`Discover a cutting-edge data center model that dynamically serves businesses with on-demand services. Tailored for large enterprises, it empowers corporate network and data center administrators to act as internal service providers, catering to the needs of customers within the organization.`
            }, 
                {
                heading:"Hybrid Cloud",
                image:"cloudServices/Hybrid.jpg",
                description:`A hybrid cloud combines two or more separate cloud infrastructures (private, community, or public) using standardized or proprietary technology for data and application portability. It typically includes a mix of public and private clouds.`
            },
            {
                heading:"Multi Cloud",
                image:"cloudServices/Multi.jpg",
                description:`CloudPageMulti-cloud`
                // <p>
                // Multi-cloud: Harnessing the Power of Diverse Cloud Providers. Utilize two or more clouds from different providers, blending Infrastructure, Platform, or Software as a Service (IaaS, PaaS, or SaaS). For instance, email from one vendor, CRM from another, and IaaS from yet another. Unlock the following advantages with multi-cloud platforms
                // </p> 
                // <ul>
                // <li>Easily manage and deploy on multiple clouds,</li>
                // <li>Avoid vendor lock-in</li>
                // <li>Reduce cost</li>
                // <li>Increase overall productivity</li>
                // </ul>
                
            },
          
            
        ]
        
    },
    {
        id:3,
        link:"cyber-security",
        image:"cyberSecurity/banner.jpg",
        categoty:[
            {
                heading:"Cyber Security Solutions",
                image:"cyberSecurity/1.png",
                description:`CYberSecurityPageSolutions`,
            },
                {
                heading:"NGFW Solution",
                image:"cyberSecurity/2.png",
                description:`<p>The NGFW (Next Generation Firewall) solution delivers advanced capabilities including application-based policy enforcement, user identification, threat prevention, sandboxing, malware analysis, traffic visibility, secure remote networking, URL filtering, DNS protection, and integrated branch SD-WAN functionalities.</p>`
            },
            {
                heading:"WAF Solution",
                image:"cyberSecurity/3.png",
                description:`A Web Application Firewall (WAF) provides robust defense against web application threats, such as SQL injection, cross-site scripting (XSS) attacks, and input validation breaches. It ensures the safeguarding of enterprise application servers from potential security breaches.`
            },
            {
                heading:"Identity Access Management",
                image:"cyberSecurity/4.jpg",
                description:`Experience a comprehensive identity management platform catering to wired, wireless, and VPN traffic. Our solution offers policy classification and enforcement, along with robust authentication, authorization, and accounting for your network infrastructure traffic.`
            },
            {
                heading:"Identity Access Management Solution",
                image:"cyberSecurity/5.png",
                description:`The IAM solution offers a comprehensive array of features, including data governance, access requests, compliance management, single sign-on (SSO), password administration, identity analytics, and role management, all catered to the needs of end users.`
            },
            {
                heading:"Next generation SIEM Solution",
                image:"cyberSecurity/6.png",
                description:`Delivers log management, event correlation, incident analysis, and live monitoring. Ensures compliance alignment, enforcement, and reporting. Swiftly detects threats, minimizes response time in threat hunting, and enhances overall visibility.`
            },
            {
                heading:"Network Detection Response & Threat Hunting",
                image:"cyberSecurity/7.jpg",
                description:`<p>Utilizing artificial intelligence and machine learning, we employ advanced techniques to identify network-based attacks, conduct thorough traffic analysis, and analyze files for enhanced network visibility. Our solutions not only bolster your security posture but also significantly minimize Mean Time to Recovery (MTTR) for file-less attacks, ensuring a fortified and responsive network defense.</p>`
            },
            {
                heading:"End point Detection and Response",
                image:"cyberSecurity/8.jpg",
                description:`CYberSecurityPageEndPoint `
            },
            {
                heading:"Vulnerability Assessment & Penetration Testing Solution",
                image:"cyberSecurity/12.jpg",
                description:`<p>Deliver enhanced asset visibility, ensure compliance, and conduct active and passive scans to uncover vulnerability blind spots across networks, endpoints, and servers. Our solution extends support to both SAS and cloud assessments. It quantifies your existing security stance, empowering continuous enhancement of your security posture.</p>`
            },
            {
                heading:"Data Protection and Classification Solution",
                image:"cyberSecurity/9.png",
                description:`Safeguard your files and documents during transmission, storage, and work processes. Identify and prevent unauthorized file transfers beyond the perimeter with our Data Loss Prevention (DLP) feature. Employ file and email tagging for accurate classification.`
            },
            {
                heading:"Email Security",
                image:"cyberSecurity/10.jpg",
                description:`Cyber Vision offers a comprehensive email security solution encompassing anti-spam and antivirus protection, file reputation management, data loss prevention, encryption, and content control.`
            },
            {
                heading:"Web Security Solution",
                image:"cyberSecurity/11.png",
                description:`The solution offers capabilities for filtering content, analyzing malware, implementing precise controls, generating comprehensive reports, as well as providing proxy and caching services.`
            },
        ]
        
    },
    // {
    //     id:4,
    //     link:"digital-signature",
    //     image:"digitalSignature/banner.png",
    //     categoty:[
    //         {
    //             heading:"Digital Signature",
    //             image:"digitalSignature/1.jpg",
    //             description:`
    //             <p>
    //             emdha Trust Service Provider is owned and managed by Cyber Vision under the Saudi National Root CA offering trust services ranging from Online Digital Signature, Validation and Digital Certificates enabling business to seamlessly integrate and avail trust services in real-time. Delivering superior user experience by incorporating a secure, international compliant digital signature methodology fully integrated with any third party trusted registered KYC (Know Your Customer) approved by local governmental regulators.
    //             <br/>
    //             The Government of Saudi Arabia has embarked on an ambitious e-transaction program under 2030 vision, recognizing that there is a tremendous opportunity to better utilize information technology to improve the quality of care/service, lower the cost of operations, and increase customer satisfaction.
    //             <br />
    //             To ensure the secure, efficient transmission and exchange of information electronically, the Kingdom of Saudi Arabia has created a National Public Key Infrastructure (PKI), managed by National Centre for Digital Certification (NCDC). NCDC is created by an act of law and its mandate as stipulated in the Saudi e-Transactions Act and its bylaws. Digitally signed-documents under the article 14-1 of e-Transactions Law of the Kingdom of Saudi Arabia grants legal recognition to digital /electronic signatures.
    //             <br/>
    //             <b>emdha Trusted Digital Signature Service</b>
    //             <br/>
    //             <b>emdha</b> Certification Authority (CA) is owned and managed by Baud Telecom Company (Cyber Vision) under KSA Root CA and is poised to offer Online Digital Signature Service enabling applications to seamlessly integrate and avail digital signatures in real time. It incorporates a secure and compliant digital signature methodology with online “Know Your Customer (KYC)” process of the signatory, validated against information from reliable KYC agencies.
    //             <br/>
    //             <b>emdha’s online</b> signature service provides a paperless signature experience by using e-KYC from the bank or any other KYC Provider. This is intended to reduce the cost of KYC, paper storage and paper-based document movement. It also minimizes the risk of forged documents.
    //             <br/>
    //             <b>emdha’s certificate</b> policy provides a provision for short term certificates, which is used in order to create a one-time online signature. This facilitates digitally signing a document by the signatory using emdha’s Online Trusted Digital Signature Service. The authentication of the signatory is based on e-KYC data provided by a reliable KYC agency. Upon successful validation by emdha CA, the signature on the document is carried out on secure backend server. This is an integrated service that facilitates issuing a Digital Signature Certificate and performing Signing of requested document on the basis of authenticated e-KYC information. The certificate issued through this service will have a limited validity period and is only for the one-time signing of requested document.
    //             <br />
    //             <b>emdha eSign</b> CA provides trust services to secure the exchange of information between key stakeholders, that primarily include, Government, Citizens and Businesses.
    //             <br />
    //             emdha is setup according to global standards and procedures; Cyber Vision operates the Certifying Authority using skilled subject matter experts in a secure infrastructure.


    //             </p>
    //             <br />
    //             <h3>Use Cases</h3>

    //             <ul>
    //             <li>Front office and customer facing applications.</li>
    //             <li>Financial services organizations using e-signatures for credit card applications, account opening, etc...</li>

    //             <li>Real Estate industry working to make the</li>
    //             <li>
    //             Company’s back office, or internal, functions—including human resources, legal, supply chain management and finance (approve purchase orders, accelerate invoice processing, etc...).</li>

    //             </ul>
    //             `,
    //         }
            
          
            
    //     ]
        
    // },
    {
        id:5,
        link:"customer-experience-solutions",
        image:"customerExperience/banner.jpeg",
        categoty:[
            {
                heading:"Customer Experience Solutions",
                image:"customerExperience/1.jpeg",
                description:`PageCustomerExperienceSolutions`
                // <p>
                // Cyber Vision holds the trust of leading banks, insurance providers, healthcare institutions, educational establishments, and governmental bodies to elevate customer service standards. Our expertise lies in crafting, building, and deploying omni-channel contact center solutions, ensuring superior services across diverse sectors
                // <br />
                // Cyber Vision has vast experience in Contact Center implementations and delivered ample of mission critical Contact Center Projects in the Kingdom. We offer solutions using leading technologies from Genesys, Cisco, Avaya, Verint, Serenova, Sestek, etc.
                // </p>`
            }, 
                {
                    heading:"Self Service Solutions",
                    image:"customerExperience/3.png",
                    description:`PageSelf-serviceSolutions​`
                    // <ul>
                    //     <li>Self-service solutions​</li>
                    //     <li>Interactive Voice Response (IVR)</li>
                    //     <li>Chatbot</li>
                    // </ul>
                    
                },
                {
                    heading:"CRM Integrations",
                    image:"customerExperience/crm.png",
                    description:`PageCRM-Integrations`
                    // <ul>
                    //     <li>Microsoft Dynamics 365 Integration​</li>
                    //     <li>Microsoft SharePoint Integration​</li>
                    //     <li>Microsoft Cloud Services Integration​</li>
                    //     <li>Salesforce Integration​</li> 
                    // </ul>
                    
                },
                // {
                //     heading:"Outbound Campaign",
                //     image:"customerExperience/5.png",
                //     description:`
                //     <ul>
                //         <li>Telemarketing​</li>
                //         <li>Collection</li> 
                //     </ul>
                //     `
                // },
                // {
                //     heading:"Speech Solutions",
                //     image:"customerExperience/6.png",
                //     description:`
                //     <ul>
                //         <li>Speech Analytics​</li>
                //         <li>Text to speech (TTS)</li>
                //         <li>Automatic Speech Recognition (ASR)</li>
                //         <li>Automated Quality Management Solution</li>
                //     </ul>
                //     `
                // },
                {
                    heading:"Intelligent Automation",
                    image:"customerExperience/7.png",
                    description:`PageIntelligentAutomation`
                    // <ul>
                    //     <li>Automated Speech Recognition</li>
                    //     <li>Natural Language Understanding</li>
                    //     <li>Conversational IVR​</li>
                    //     <li>Voice Biometrics</li> 
                    // </ul>
                    
                },
                {
                    heading:"360 Customer Journey",
                    image:"customerExperience/8.png",
                    description:`Page360CustomerJourney`
                    // <ul>
                    //     <li>24 x 7 Time Critical Support Services​</li>
                    //     <li>Customized Wallboards​</li>
                    //     <li>Customized Dashboards​</li> 
                    // </ul>
                    // `
                },
                {
                    heading:"Workforce Management",
                    image:"customerExperience/9.png",
                    description:`PageWorkforceManagement`
                    // <ul>
                    //     <li>Contract Employment</li>    
                    //     <li>Residence Engineering Services</li>    
                    //     <li>Forecasting</li>
                    //     <li>Scheduling</li> 
                    // </ul>
                    
                },

        ]
        
    },
    {
        id:6,
        link:"unified-collaborations",
        image:"collaborations/banner.png",
        categoty:[
            {
                heading:"UNIFIED COLLABORATION",
                image:"collaborations/1.jpeg",
                description:`UNIFIEDCOLLABORATION`
                // <p>
                // Teamwork has always been an essential part of running an effective business. However, in today’s digital environment, the way that people collaborate is changing. Employees situated all over the world still need to be able to connect and work together on important projects.
                // <br />
                // For companies to thrive in the age of the digital workforce, they need more than just a cohesive communication strategy. Collaborative tools are part of the fundamental requirements that all organizations need to maintain exceptional outcomes and employee performance
                // <br />
                // We will analyze your UC requirements and set up the necessary connected devices, endpoints, and software solutions in order to <b>create a powerful collaboration ecosystem on your premises.</b>
                // </p>`,
            }, 
                {
                    heading:"CALL CONTROL",
                    image:"collaborations/2.png",
                    description:`CALLCONTROL`
                    // <p>
                    // Scalable and Resilient Call control is centralized at a single location that serves multiple remote sites. Management and administration are centralized from web base interface Virtualization Supported Common telephony features are available across voice and video endpoints
                    // </p>
                    // `
                },
                {
                    heading:"COLLABORATION ENDPOINTS",
                    image:"collaborations/3.jpg",
                    description:`CollaborationEndpoint`
                    // <p>
                    // Collaboration Endpoint products make communicating with your counterparts across town or on the other side of the world easy. Video conferencing, IP phones, and desktop systems unite people and enhance the user experience.
                    // </p>
                    // `
                },
                {
                    heading:"VIDEO CONFERENCING",
                    image:"collaborations/4.png",
                    description:`VIDEOCONFERENCING`
//                     <p>   
//                         Centralized Scalable Call Control: Manage call control centrally from a single location, serving multiple remote sites.
//                         <br/>                      
//                         Streamlined Management: Centralize management and administration through a web-based interface.
// <br/>
//                         Virtualization Ready: Ready for virtualization to optimize resource utilization.
// <br/>
// Unified Telephony Features: Enjoy consistent telephony features across voice and video endpoints.
//                     </p>
//                     `
                },
                {
                    heading:"MOBILITY",
                    image:"collaborations/5.png",
                    description:`MOBILITYDetails`
                    // <p>
                    // Stay seamlessly connected from anywhere. Utilize your office extension to make/receive calls, chat, and more using softphone apps.
                    // </p>
                    // `
                },
                {
                    heading:"PRESENCE & INSTANT MESSAGING",
                    image:"collaborations/6.png",
                    description:`PRESENCEInstantDetails`
                    // <p>
                    //    Chat instantly with users via text messages, and seamlessly receive image, audio, video, and various attachments. 
                    //    <br/>
                    //    Stay informed about your colleagues' availability status before initiating connections.
                    // </p>
                    // `
                },
                {
                    heading:"UNIFIED MESSAGING",
                    image:"collaborations/7.png",
                    description:`UNIFIEDMESSAGINGDetails`
                    // <p>
                    // UM integrates voice and email messaging into a single mailbox accessible across multiple devices, with the option for added features like Fax support.
                    // </p>
                    // `
                },

        ]
        
    },
    {
        id:7,
        link:"managed-services",
        image:"managedServices/managedServices-old.jpg",
        categoty:[
            {
                heading:"Why Managed Services?",
                image:"managedServices/ManagedService1.png",
                description:`<p>Managed services in cybersecurity involve outsourcing the management and monitoring of an organization's security to a specialized provider. It includes continuous monitoring, threat detection, incident response, patch management, and more. Benefits include access to expertise, 24/7 monitoring, cost-effectiveness, scalability, and focus on core activities.<br /><br />CyberTechSheild (CTS) provides complete monitoring, management and optimization services for everything on your IT infrastructure that could result business disruption. Our expert teams along with tools proactively monitor your services and equipment with close coordination with product vendors to resolve issues before they even occur.</p>`,
            },
            
            {
                heading:"Monitoring",
                image:"managedServices/Monitoring.jpg",
                description:`ManagedPageMonitoring`
            },

                {
                    heading:"Management",
                    image:"managedServices/Management.jpg",
                    description:`ManagedPageManagement`
                },
                {
                    heading:"Optimize",
                    image:"managedServices/Optimize.jpg",
                    description:`ManagedPageOptimize`
                },

        ]
        
    },
    {
        id:8,
        link:"converged-networks",
        image:"convergedNetworks/Network-Convergence.jpg",
        categoty:[
            {
                heading:"Long Haul Fiber Optic Repeater-less Solution",
                image:"convergedNetworks/Fiber-Optics.jpg",
                 description:`ConvergedPageLongHaulFiber`,
            }, 
                {
                    heading:"MPLS-TP Solution",
                    image:"convergedNetworks/2.png",
                    description:`ConvergedPageMPLS`
                },
                {
                    heading:"RFTS Solution",
                    image:"convergedNetworks/RFTS.png",
                    description:`ConvergedNetworkPageRFTSSolution`
                },
                {
                    heading:"SDH Solution",
                    image:"convergedNetworks/SDH.jpg",
                    description:`PageSDHSolution`
                },
        ]
    },

    {
        id:9,
        link:"vsat-radio-wireless-new",
        image:"vsatRadioWireless/banner.png",
        categoty:[
            {
                heading:"VSAT",
                image:"vsatRadioWireless/1.png",
                description:`
                <p>
                VSAT (Very Small Aperture Terminal) is a satellite communications system that serves home or business users. Each end user is interconnected with the hub station via the satellite in a star topology.

                <br />
                For one end user to communicate with another, each transmission has to first go to the hub station which re transmits it via the satellite to the other end user’s VSAT. VSAT handles data, SCADA, voice, and video signals.
                </p>
                `,
            }, 
                {
                    heading:"P25",
                    image:"vsatRadioWireless/2.jpg",
                    description:`
                    <p>
                    We are dedicated to designing and delivering superior P25 solutions that are robust, interoperable, and secure. With a range of both P25 Phase 1 and Phase 2 open standard-based elements, Cyber Vision can provide public safety agencies
                    with complete end-to-end solutions to meet your unique organizational requirements.
                    </p> 
                    `
                },
                {
                    heading:"DMR",
                    image:"vsatRadioWireless/3.jpg",
                    description:`
                    <p>
                    DMR is a digital communications platform that delivers commercial and worker safety benefits for mission critical users. With the capability to carry both voice and data, DMR gives you a powerful combination of flexibility, control and resiliency. DMR products adhere to the DMR Association’s open standards, ensuring interoperability with other compliant equipment.
                    </p>
                    
                    `
                },
                {
                    heading:"TETRA",
                    image:"vsatRadioWireless/4.png",
                    description:`
                    <p>
                    TETRA (Terrestrial Trunked Radio) is a global standard for digital trunked radio. Secure voice and data transmission and a wide range of features guarantee the adaptability needed to meet the unique requirements of professional
                    <br />
                    mobile radio users. With this technology we can guarantee the same level of services provided from the regular GSM service provider over your own standalone mission critical communications
                    network.
                    </p>
                    `
                },
                {
                    heading:"Backhaul Microwave",
                    image:"vsatRadioWireless/5.jpg",
                    description:`
                    <p>
                    For a long or short distance point-to-point link, a smart point-to-multipoint wireless SCADA network, or a utility- grade LTE modem, or both together, we provide a solution with unbeatable reliability and performance, the smart radios support all analogue and digital interfaces for a wide variety of applications.
                    </p>
                    `
                },
                {
                    heading:"Command & Control",
                    image:"vsatRadioWireless/6.jpg",
                    description:`
                    <p>
                    Its  meet the complex demands of critical communication centers throughout the world. With its combination of advanced telephony capabilities and radio integration.
                    <br />
                    Delivers a robust, command and control system, whether centralized or distributed, with unparalleled operational efficiency, an extensive feature set, enterprise class server architecture, and end-to-end resiliency, It’s offers the most complete mission critical communications solution.
                    </p>
                    `
                },
        ]
    },

    /* {
        id:10,
        link:"low-current",
        image:"lowCurrent/banner.png",
        categoty:[
            {
                heading:"Fire Alarm",
                image:"lowCurrent/1.png",
                description:`
                <p>
                    Cyber Vision provide all fire alarm solutions according to NFPA and has amassing references for Both UL (American) and EN54(European)
                 </p>
                `,
            }, 
                {
                    heading:"Public Address / Voice EVAC",
                    image:"lowCurrent/2.png",
                    description:`
                    <p>
                    one of the leading Integrators for Public Address solutions providing the latest technologies solutions in the field

                    </p> 
                    `
                },
                {
                    heading:"MATV / IP TV",
                    image:"lowCurrent/3.png",
                    description:`
                    <p>
                    #MATV RF , IF distribution 

                    #IPTV solution with deploying all modules known in the market (VOD, Hospitality services,
                    </p>
                    
                    `
                },
                {
                    heading:"Nurse Call",
                    image:"lowCurrent/4.png",
                    description:`
                    <p>
                    Edge technologies in the market for Nurse call systems: wired, wireless solution designed mainly for requesting nurses for assisting patient

                    </p>
                    `
                },
                {
                    heading:"Master Clock",
                    image:"lowCurrent/5.png",
                    description:`
                    <p>
                    In hospital, airports, universities and government buildings people need for synchronized and exact updated time, we offers all types of Clocks and timers with all types of Sync.

                    </p>
                    `
                },
                {
                    heading:"Flight Information Display System",
                    image:"lowCurrent/6.png",
                    description:`
                    <p>
                    Airport FIDS . It is designed to display timetables, gate or baggage belt information or other travel/tourist information at any location.

                    </p>
                    `
                },
                {
                    heading:"BMS",
                    image:"lowCurrent/7.png",
                    description:`
                    <p>
                    BMS systems are “Intelligent” microprocessor-based controller networks installed to monitor and control a buildings technical systems

                    </p>
                    `
                },
                {
                    heading:"Queue Management System",
                    image:"lowCurrent/8.png",
                    description:`
                    <p>
                    A need to manage the flow , this solution is ideal for Banks branches , service providers , hospital ..etc.

                    </p>
                    `
                },
                {
                    heading:"SCADA & Automation",
                    image:"lowCurrent/9.png",
                    description:`
                    <p>
                    A need to manage the flow , this solution is ideal for Banks branches , service providers , hospital ..etc.
                    
                    </p>
                    `
                },

                {
                    heading:"Parking Management System",
                    image:"lowCurrent/10.png",
                    description:`
                    <p>

                    Entry Ticket Dispenser and exit Dispenser , payment machine
Parking Guidance: for traffic flow , empty-busy places
                    </p>
                    `
                },
        ]
    }, */
    {
        id:11,
        link:"Identity-Authentication-Security",
        image:"physicalSecurity/banner.png",
        categoty:[
            {
                heading:"Integrated Security Platform",
                image:"physicalSecurity/1.jpg",
                description:`Cyber Vision boasts extensive expertise in deploying an integrated unified platform that seamlessly combines physical security, fire and safety, and building asset management solutions within command and control centers. Our experience ensures flawless integration and effortless scalability, delivering a comprehensive solution.`,
            }, 
                {
                    heading:"Security Control Center",
                    image:"physicalSecurity/2.jpg",
                    description:`Cyber Vision offers an all-inclusive solution for security control centers, combining top-tier technologies and superior architectural design. Our package includes the Integrated Security Platform (PISM), VMS and analytics, server and storage solutions, video walls, technical consoles, network switches, racks, UPS, and more.`
                },
                {
                    heading:"Access Control",
                    image:"physicalSecurity/3.jpg",
                    description:`The technical experts at Cyber Vision possess extensive proficiency in delivering enterprise-level access control solutions, backed by impressive endorsements. Our team excels in seamlessly integrating diverse access modules, accommodating a broad spectrum of authentication levels. This cohesive approach caters to a vast access user database, spanning remote locations, all streamlined within a unified platform tailored to each client's specific requirements.`
                },
                {
                    heading:"Physical Security",
                    image:"physicalSecurity/4.jpg",
                    description:`The Cyber Vision portfolio encompasses nearly every recognized physical security solution available in the market. Each solution boasts enterprise-level, cutting-edge technology that spearheads the industry. We stand at the forefront of this market, backed by an impressive array of references across various government sectors and industrial utilities. Our offerings range from advanced Walk-Through Gate Scanners and Luggage X-Ray Scanners to Handheld Metal Detectors. Additionally, we specialize in seamlessly integrated solutions like Under Vehicle Surveillance Systems (UVSS) coupled with License Plate Recognition (LPR), Sliding Gates, Road Blockers, Bollards, and Barriers.`
                },
                {
                    heading:"Intrusion Detection",
                    image:"physicalSecurity/5.jpg",
                    description:`pageIntrusionDetection`
                },
                {
                    heading:"Integrated CCTV Solutions",
                    image:"physicalSecurity/6.jpg",
                    description:`Cyber Vision boasts extensive expertise in delivering cutting-edge security solutions, specializing in state-of-the-art technology within the realm of CCTV systems. With HCIS certification, we bring a wealth of experience in safeguarding industrial environments, particularly in the context of large-scale projects within the industrial security domain.`
                },
        ]
    },
    {
        id:12,
        link:"audio-visual",
        image:"audioVisual/banner.png",
        categoty:[
            {
                heading:"Audio System",
                image:"audioVisual/1.png",
                description:`
                <p>
                Using Pro Audio System, Process Acoustic Study are done to deliver clear and intelligibility Sound Based on Application needs.  
                </p>
                `,
            }, 
                {
                    heading:"Lighting & Dimming",
                    image:"audioVisual/2.jpg",
                    description:`
                    <p>
                    Repair Ambient Light effect and create interesting view by using Stage lighting.
                    </p> 
                    `
                },
                {
                    heading:"Display System",
                    image:"audioVisual/3.jpg",
                    description:`
                    <p>Define size of Display with technology suitable based on room dimension and application needs. </p>
                    
                    `
                },
                {
                    heading:"Projection System",
                    image:"audioVisual/4.jpg",
                    description:`
                    <p>
                    Provide Projector Solution for Meeting Rooms, Auditoriums, Cinema, Interactive projection solution for Smart class room or training Center and projection Mapping Solution.

                    </p>
                    `
                },
                {
                    heading:"Audio Conferencing",
                    image:"audioVisual/5.jpg",
                    description:`
                    <p>
                    Adding more confidently to your meeting through Discussion, voting and Recording System.

                    </p>
                    `
                },
                {
                    heading:"Control System",
                    image:"audioVisual/6.jpg",
                    description:`
                    <p>
                    Create Scenario to simplify using the complex AV system to be easy use from end user.
                    </p>
                    `
                },
                {
                    heading:"Interpreter System",
                    image:"audioVisual/7.jpg",
                    description:`
                    <p>
                    Translate system to deliver your presentation message by many language at the same time event.
                    </p>
                    `
                },
                {
                    heading:"Digital Signage Solution",
                    image:"audioVisual/8.jpg",
                    description:`
                    <p>
                    Deliver Digital information like announcement and instructions messages based on Ethernet network.
                    </p>
                    `
                },

                {
                    heading:"Interactive System",
                    image:"audioVisual/9.jpg",
                    description:`
                    <p>
                    support your building with Wayfinding Solution or Make Smart Meeting Rooms and Smart Class to give you more collaboration and interaction for your meetings
                    </p>
                    `
                },

                {
                    heading:"E-Learning Platform System",
                    image:"audioVisual/10.jpg",
                    description:`
                    <p>
                    Providing Library VOD Server for all Recording material with control software for teacher and student communication and sharing content
                    </p>
                    `
                },

                {
                    heading:"Video Conference System",
                    image:"audioVisual/11.jpg",
                    description:`
                    <p>
                    Get A/V Calls with grantee high quality for your meeting as if far side is seating with you in the same room.
                    </p>
                    `
                },

                {
                    heading:"Room Manager System",
                    image:"audioVisual/12.jpg",
                    description:`
                    <p>
                    Handling and mentoring Meeting Rooms with easy to reserve and schedule meeting through your Calendar.
                    </p>
                    `
                },
        ]
    },
    {
        id:12,
        link:"smart-aviations",
        image:"smartAviation/banner.png",
        categoty:[
            {
                heading:"Smart Aviation",
                image:"smartAviation/1.jpeg",
                description:`
                <ul>
                <li>Air Navigation Networks</li>
                <li>Wireless ILS NAVIDS sys</li>
                <li>Aeronautical communication networks “ACN” solutions</li>
                <li>Voice Communication Switching systems “VCSS “ solutions</li>
                <li>ATC Simulators</li>
                <li>GTA communications</li>
                <li>VSAT RCAGS PTP,PMP communications</li>
                <li>Digital Remote Towers</li>
                </ul>
                `,
            }, 
               
        ]
    },
    {
        id:13,
        link:"ourServices",
        image:"ourservices/banner.png",
        categoty:[
            {
                heading:"Governance, risk management and compliance",
                image:"ourservices/1.png",
                description:`
                <p>
                Building a cyber security program<br />
                Cybersecurity Program Evaluation <br />
                Cyber ​​security management service<br />
                </p>
                `,
            },
            {
                heading:"Cyber ​​security consulting",
                image:"ourservices/2.png",
                description:`
                <p>
                Business continuity management<br />
                Business continuity and IT disaster recovery plan <br />
                Cyber ​​Security Operations Center <br />
                </p>
                `,
            }, 
            {
                heading:"Penetration testing",
                image:"ourservices/3.png",
                description:`
                <p>
                    Infrastructure penetration testing
                    Network testing
                    Website testing
                    Mobile app penetration testing
                    Programming languages ​​review
                </p>

                `,
            },  
               
        ]
    },
    {
        id:13,
        link:"ourSuccess",
        image:"ourSuccess/banner.jpeg",
        categoty:[
            {
                heading:"King Abdullah Humanitarian Foundation",
                image:"ourSuccess/kaf.png",
                description:`
                <p>
                King Abdullah Humanitarian Foundation partnered with Cybervision to enhance its cybersecurity. A tailored firewall and network infrastructure revamp were deployed, seamlessly integrating with operations. The advanced firewall thwarted cyber threats, reducing unauthorized access and boosting overall security. Simultaneously, network optimizations improved performance and user experience. The collaboration transformed King Abdullah Humanitarian Foundation into a resilient digital fortress, safeguarding assets and ensuring operational efficiency.
                <br />
                
                </p>
                `,
            },
            // {
            //     heading:"Madinah Development Authority",
            //     image:"ourSuccess/2.jpg",
            //     description:`
            //     <p>
            //     A Saudi Arabian governmental organization focused on developing the city of Madinah, the second holiest city in the Muslim world, to meet the expectations of its permanent residents and visitors. Cyber Vision was entrusted to build Data Center Structured Cabling System, Campus Network LAN solution, Hyperconverged Infrastructure, and Data Center SDN Solution.
            //     </p>
            //     `,
            // }, 
            // {
            //     heading:"Ministry of Justice",
            //     image:"ourSuccess/3.png",
            //     description:`
            //     <p>
            //     The main objective of the project is to facilitate the judicial procedure for all parties by documenting trials sessions and conversation between all parties, ensuring that Trials are executed with the best practices, and in case of any complaint the system should support the Investigation Board efficiently to clear all issues related to the judiciary process
            //     </p>

            //     `,
            // },  
               
        ]
    },
    {
        id:14,
        link:"grc-services",
        image:"ourservices/grc.jpg",
        categoty:[
            {
                heading:"Governance, Risk management & Compliance",
                image:"ourservices/blank.png",
                description:`Governance risk compliance (GRC) is a method for managing and strategizing an organization's regulations regarding governance, financial or physical risk, and regulatory compliance. It aligns the IT aspects with business objectives and works to improve the efficiency of a company. There are GRC consultants and GRC analysts who provide an assessment of a business’s GRC, identify risks, analyze the data, develop policies to benefit the workplace, and consult on the best choice of action. Your duties may involve optimizing GRC systems, implementing tactics to lower risk, providing internal audits, assisting with cybersecurity, creating routine reports, and ensuring regulatory compliance.`,
            }
               
        ]
    }
];
export default serviceDetails;