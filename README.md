<h1>TicketJAM : NJIT Hackathon 2022 Submission</h1>

![image](https://user-images.githubusercontent.com/100609687/200203165-95d1684c-5575-499a-bc33-d59dffe391b6.png)




<h2>Description</h2> <br/>
Ticket Jam is a powerful smart contract protocol which facilitates all financial processes for paid admission events. It is a system  that organizers can use to fairly and openly plan events. It allows customers to quickly purchase and transfer tickets without fear of fraud. It also ensures fans that their favorite artists will be paid for their performance.

<br/>
<h2>Why use TicketJAM? </h2> <br/>
<b>For event organizers: </b> Easily set up events that have all financial processes automated. <br/>
Planners can specify the Title of th event, date/time, and other basic information. Each event may cost a different price, it can be specified how much each ticket will cost and the maximum amout to be sold. It also manages a reward system that incentivises patrons to attend future events.<br/> <br/>

<b>For patrons: </b> No more fake or fraudulent tickets, easily transferrable, and secondary ticket sales sold on digital asset marketplace will have royalties paid to the performer they are supporting. Using this service will ensure the performer will be paid out first before event planners. 

<h2> Technical Description</h2> <br/>
<b> Manager Contract </b> is the program that organizers can use to deploy self running events. It also stores rewards points for each user. <br/>
<b> Concert Contract </b> is the program that manages each events ticket sales, and payments. 
<br/>
<br/>
<b> Manager.sol contain the two smart contracts</b>
<br/>
<b>ticketjam folder is the front end website </b>

<h2> Instructions </h2>
1. Event Organizer deploys "Manager" Contract
2. Event Organizer creates event using createEvent() which takes several parameters that customizes each event: <br/>
Parameters include: Event title, time/date, price of tickets, max amount of tickets allowed to be sold, the payment amount of the performer and the performer's payment address. Also a parameter that includes the royalty % of each secondary sale. <br/>
3. Patrons buy tickets, they specify whether they want to buy 'General Admission' or 'VIP tickets', and the quantity.<br/>
4. Rewards points are accumulated and can be used by patrons in future purchases. <br/>
5. Ticket holders can sell their tickets on a digital asset marketplace which accumulates royalty % fees that goes to the performer.<br/>
6. Patrons can sign in and mark themselves "Checked in" by calling checkIn() function which lets security know whether a person has a ticket/ or has been checked in yet.<br/>
7. Once the event is over, performer is paid - (organizers can only be paid out if and ONLY if the performer is paid first) <br/>

<h2>Front End Screenshots: Needs work </h2>


![image](https://user-images.githubusercontent.com/100609687/200204098-d26a70aa-f6e2-4fc1-ad4e-6a9399f187d9.png)

![image](https://user-images.githubusercontent.com/100609687/200203990-8ac28c98-5177-458b-9c41-1dbc2888897c.png)
![image](https://user-images.githubusercontent.com/100609687/200204058-8b7a7ad2-8a9a-49a5-a4bf-b510d1308155.png)

![image](https://user-images.githubusercontent.com/100609687/200204010-fff493f9-487d-48dd-bcd7-a5228f569f64.png)

