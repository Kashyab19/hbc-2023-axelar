<h1 align="center">
CookieMart
</h1>

<h2 align="center">

HBC x EasyA 2023

Cross-Chain Data Marketplace

Axelar + Thirdweb Track
</h2>

<h3 align="center">
Vicken Matiossian, Babuaravind Gururaj, Burhanuddin Jinwala, Mahith Chigurupati, Kashyab Murali
</h3>

### Summary

Web 1 platforms allowed users to access but not share information over the internet. Web 2, where users became more active, allowed users to access, interact with, and share information over websites. Web 3 allows users to access, interact with, share, and also own information over the internet. 

In today’s digital world, data is gold, and gold is money. Online services and applications collect vast amounts of user data through cookies, tracking mechanisms, and user accounts. The harvested information includes but is not limited to user demographics, browsing and purchase behavior, search queries, hardware specifics, and session information. This valuable data is sold and uploaded to data management platforms by both websites and data brokers. The data is parsed and segmented into groups based on different criteria. Advertisers browse and select the dataset, creating detailed personal profiles which are used to predict user behavior and interests in order to tailor specific ads that are more likely to generate clicks.

Our cross-chain data marketplace will allow users to claim a share of royalties from the data that is collected and sold. The purchaser of data can spend any token and with the use of Axelar, the data marketplace will receive the converted token to be sent to the desired chain of the seller or any royaly owner.

### Problem
Users are not incentivized to participate in data collection, and hence not compensated for the data they produce, which is in turn sold and used for targeted advertisements. The current method of data collection and transacting is controversial due to privacy, transparency, and consent concerns. 

Transparency

- Websites do not provide clear and concise information about what data they collect, how it’s used, and with whom it’s shared with
- Users cannot make truly informed decisions on whether to allow data collection to occur

Privacy

- Data breaches and a lack of transparency contribute to the fact that user data is not truly private and secure

Consent

- Many sites do not ask users for consent to collect and track their data, while others restrict access completely if data collection is turned off
- Lack of choice is a point of frustration for users. 

### Solution
Although data driven advertising is an essential tool for businesses to reach their desired audience, our team believes in incentivizing the users to willingly participate in data collection where they are compensated for their contributions.

### Axelar Implementation
Royalty owners such as users, websites, the data marketplace, or advertisers will specify a desired destination chain they want to be paid in. The data purchaser will have the freedom to spend any token on the data. After buying the data, the token amount from the buyer(source chain) will be sent to the Axelar network where it is converted to the destination chain token. The new token will be sent to the Data Marketplace smart contract to be distributed to the correct royalty owners using the correct chain.

### Thirdweb Implementation
With the use of the Thirdweb SDK, we are able to allow the user to connect their crypto wallet to the DApp. Thirdweb's beautiful user interface makes it easy for developers to display functional and easy to understand user ready applications.

### Current Process
Data Collection

- Websites and applications collect user data through cookies, tracking pixels(tiny, invisible images embedded in a website’s code to track user behavior) and user account information, some of which are often optional. This collected information includes personal information, browsing history, purchase history, clicks, interactions and even amount of time spent, and will be used to create targeted ad campaigns and personalize content

Data Transfer

- Once this data is collected, it can be sold to advertisers or third parties. They must follow privacy laws and regulations some being General Data Protection Regulation(GDPR) - European Union, and California Consumer Privacy (CCPA) - California. These laws aim to protect user’s privacy rights and ensure websites are transparent about data collection and usage
	
Data Management Platforms (DMP) - Data Provider

- DMP's are Platforms that allow advertisers to collect and manage data from different sources. They may charge fees to access their platform and for the data they provide. Different data providers have different benefits, quality, reputation, and costs

Segmentation

- After collection, the data is segmented into groups based on different criteria. Advertisers can now choose from and target specific pools of data and users

Ad Creation/Placement

- Creation of targeted advertisements based on user information. Ads placed on various platforms such as websites, applications, and games
	
Ad Serving

- When a user visits a site, the ad server displays the appropriate ad 
	
Performance Tracking

- Advertisers track the performance of their targeted ads through various metrics

### Proposed Money Flow

Advertisers
- Who do they Pay? 
	- DMP for data and site access
- How do they make money
	- Clicks from users based on targeted ads
	- Selling their own collected data to other companies
		
CookieMart
- Who do they Pay
	- Site upkeep fees
- How do they make money
	- Royalties
	- Selling data
	- Site subscription/access
	- Data transaction fees
	- Listing fees
	
Websites/Applications
- Who do they Pay
	- DMP to list data on marketplace
- How do they make money
	- Earning a portion of the revenue generated that each ad click generates on their site
	- Charging advertisers for data access through DMP
	
Users
- Who do they Pay
	- Site access(optional)
- How do they make money
	- **Currently** - They don’t - Data is collected and sold without royalties
	- **Proposed** - Any time their data is sold on the marketplace, the user receives royalties

### Financials
In 2017 on average, basic data about an individual such as name, age, gender, and location costs $0.0005 per person while the average monthly price for a personal profile on a user was $0.80. 
In 2019, the average price for a Facebook personal profile was $2. 
In 2021, the average monthly price for a personal profile on Facebook was $2.50 and $0.817 on Youtube. 

A survey done by Angela Wigenar and Cass Sunstein of Harvard University in 2019 showed that the average participant was willing to pay $5 per month for demographic, identity, and health data privacy, but would on average accept $80 per month to give said data away.

### Road Map
1. Cross-Chain Distribution DApp for Users

DApp that distributes payments and royalties to the destination chains

2. Native Token

Creation and sale of native ERC-20 token
Owning token decreases fees and subscription costs

3. User to Business Data Transfer

Users can collect and list their own data to the marketplace

4. Global Cross-Chain Payments

Enable true cross-chain token conversion capability

5. Global Cross-Chain Data Storage

Allow data to be stored, retrieved, and purchased from any blockchain

### Axelar Experience
Positive

- Documentation is easy to read
- Cross-chain compatability

Negative

- Minor errors on local machine with example programs
- Complex for amount of time given

### Thirdweb Experience
Positive

- Beautiful UI
- Easy to use once trained

Negative

- Documentation could be more detailed for React SDK users
- Many bundling errors

### AxelarScan of Completed Transaction

